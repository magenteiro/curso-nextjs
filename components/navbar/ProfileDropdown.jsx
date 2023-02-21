"use client";
import {useEffect, useRef, useState} from "react";
import md5Hash from 'crypto-js/md5'
import {getCookie} from "cookies-next";
import Link from "next/link";

export default function ProfileDropDown(props) {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const [isLoggedIn, setIsLoggedIn] = useState()
    const [imgGravatar, setImgGravatar] = useState()
    
    const navigation = [
        { title: "Minha Conta", path: "#" },
        { title: "Meus Pedidos", path: "#" },
        { title: "Finalizar Sessão", path: "#" },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (profileRef.current == null || !profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
        
        
    }, [])

    useEffect(() => {
        if(getCookie('customerToken')){
            setIsLoggedIn(true)
            const emailHash = md5Hash(getCookie('customerEmail').toLowerCase())
            setImgGravatar('https://s.gravatar.com/avatar/' + emailHash + '?s=80&d=mp')
        }
    }, [getCookie('customerToken')])
    return (
        <>
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                {isLoggedIn && <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                        onClick={() => setState(!state)}
                >                                       
                    <img
                        src={imgGravatar}
                        className="w-full h-full rounded-full"
                    />
                </button>}
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <button className={`bg-blue-700 text-white p-2 rounded px-3 ${isLoggedIn ? 'hidden' : ''}`}><Link href={`/customer/account/login`}>Entrar</Link></button>
        </>
    )
}
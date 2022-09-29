import { useState } from "react"
import Head from 'next/head'
import Link from 'next/link'

export default function State(){
    return (<>
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=968, initial-scale=1.0"/>
        <title>Olá Mundo! 🌍</title>
    </Head>
    <Cabecalho titulo="Curso Next.JS"/><ListaCursos/>
    </>)
}

function Cabecalho(props) {
    return (<nav>
        <div>
            <strong>{props.titulo}</strong> - 
            <span>
                <a href="/docs.html">Docs</a> ·
                <a href="sobre.html">Sobre</a> ·
                <a href="https://github.com/magenteiro/curso-nextjs">Repositório</a> · 
                <Link href="/ola">Link para Ola</Link> ·
                <Href link="https://magenteiro.com" texto="Cursos Magento"/>
            </span>
        </div>
    </nav>)
}

function Href(props) {
    return <a href={props.link}>{props.texto}</a>
}


function ListaCursos(){
    const cursos = ['Wordpress', 'Magento', 'React']

    return (
        <ul>
            {/* function normal */}
            {cursos.map(function (curso) {
                return <li key={curso}>{curso} <LikeButton/></li>
            })}
            
        </ul>
    )
}

function LikeButton(){
    const [likeCount, setLikeCount] = useState(0)

    function handleClick(){
        setLikeCount(likeCount + 1)
    }
    return (
        <button onClick={handleClick}>Like ({likeCount})</button>
    )
}
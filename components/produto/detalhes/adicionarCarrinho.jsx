"use client";
import {addProductsToCart} from "../../../helpers/cart";
import { useState} from "react";
import {log} from "next/dist/server/typescript/utils";

export default function AdicionarCarrinho({productData}) {
    
    const [loading, setLoading] = useState(false)
    const [cartRet, setCartRet] = useState(false)
    const [linkFinalizar, setlinkFinalizar] = useState('#')
    
    const adicionarCarrinho = async () => {
        setLoading(true)
        await addProductsToCart([{"sku": productData.sku, "quantity": 1}])
            .then((ret)=>{
                setCartRet(ret)
                setLoading(false)
                if(ret.cart?.id){
                    setlinkFinalizar(process.env.NEXT_PUBLIC_MAGENTO_URL + 'loadcart?cartId=' + ret.cart.id)
                }
            })
    }
        

    return (
        <>
        <button type="button" onClick={adicionarCarrinho}
                   className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"><BtnCont loading={loading}/></button>
            {cartRet && cartRet.cart?.id && <a  href={linkFinalizar}
                                     className="block text-center w-full rounded bg-green-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">Finalizar Compra</a>}
        </>
    )
    
    /*return <button type="button" onClick={adicionarCarrinho}
                   className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">Comprar</button>*/
}

const BtnCont = ({loading}) => {
    return (
            <span>
                {!loading ? 'Comprar' : 'adicionando...'}
            </span>
            )
}
const AddButton = ({ onSubmit, text, loading, cartRet }) => {
    return (
        <button className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white" onClick={onSubmit}>
            {!cartRet ? 
                !loading ? text : 'adicionando...'
            : 'bora'}
        </button>
    )
}

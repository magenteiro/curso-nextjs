import { useEffect, useState } from "react"
import Estoque from "../../components/Estoque"

export default function HookEffectEstoque() {
    const [tamanho, setTamanho] = useState(false)

    return (
        <>
            <h1>Camisa da Seleção</h1>

            <img src="/images/camisa-selecao.jpg" height="200" />

            <p>Selecione um tamanho</p>

            <button onClick={() => setTamanho('P')}>P</button>
            <button onClick={() => setTamanho('M')}>M</button>
            <button onClick={() => setTamanho('G')}>G</button>
            {tamanho ?
                <p>Tamanho selecionado: {tamanho}</p> : null
            }
            <Estoque tamanhoSelecionado={tamanho}/>
        </>
    )
}
import { useEffect, useState } from "react"

export default function hookEffect() {
    const [tamanho, setTamanho] = useState(0)

    useEffect(()=>{
        console.log('renderizou ou mudou valor')
        // return () => {console.log('destruiu')} //opcioinal
    }, [tamanho])

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
        </>
    )
}
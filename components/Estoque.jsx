import { useEffect, useState } from "react"

export default function Estoque({tamanhoSelecionado}){
    const [estoqueMensagem, setEstoqueMensagem] = useState(false)

    useEffect(()=>{
        if(!tamanhoSelecionado){
            return
        }
        fetch(`http://localhost:5555/estoque.php?tamanho=${tamanhoSelecionado}`)
        .then((resposta) => resposta.text())
        .then(setEstoqueMensagem)
    }, [tamanhoSelecionado])

    return (
        <p>{estoqueMensagem}</p>
    )
}
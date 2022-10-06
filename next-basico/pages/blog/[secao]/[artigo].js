import {useRouter} from 'next/router'
export default function Artigo(props){
    const router = useRouter()
    const categoria = router.query.secao
    const artigo = router.query.artigo

    console.log(router)
    return (
        <>
            <p>Blog &gt; {categoria}</p>
            <h1>Veja como fazer um {artigo}</h1>
            {mostraIngredientes(props.ingredientes)}
        </>
    )
}

function mostraIngredientes(ingredientes=false){
    if (!ingredientes) {
        return
    }

    return (
        <>
            <h2>Ingredientes</h2>
            <ul>
                {ingredientes.map((nome, i)=>(
                    <li key={i}>{nome}</li>
                ))}
            </ul>
        </>
    )
}

export function getStaticPaths(){
    return {
        paths: [{params: {secao: 'receita', artigo: 'tody'}}, {params: {secao: 'receita', artigo: 'pasta'}}, {params: {secao: 'receita', artigo: 'peixe'}}],
        fallback: false
    }
}

export function getStaticProps({params}){

    const receitas = {tody: ['leite', 'chocolate'], pasta: ['macarrao', 'agua', 'manteiga']}
    const ingredientesLista = receitas[params.artigo] ? receitas[params.artigo] : false
    return {
        props: {ingredientes: ingredientesLista}
    }
}
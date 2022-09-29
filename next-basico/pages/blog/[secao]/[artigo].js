import {useRouter} from 'next/router'
export default function Artigo(){
    const router = useRouter()
    const categoria = router.query.secao
    const artigo = router.query.artigo

    console.log(router)
    return (
        <>
            <p>Blog &gt; {categoria}</p>
            <h1>Veja como fazer um {artigo}</h1>
        </>
    )
}
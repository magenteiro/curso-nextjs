import {useRouter} from 'next/router'
export default function Bolo(){
    const router = useRouter()
    const categoria = router.query.secao
    console.log(router)
    return (
        <>
            <p>Blog &gt; {categoria}</p>
            <h1>Veja como fazer um bolo</h1>
        </>
    )
}
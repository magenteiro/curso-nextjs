export default function ArtigoEstatico({numero}){
    return (
        <>
            <h1>Artigo estático</h1>
            <span>Número aleatório: {numero}</span>
        </>
    )
}


export function getStaticProps(context){
    return {
        props: {
            numero: Math.random()
        },
        revalidate: 3600 * 24 //em segundos
    }
}
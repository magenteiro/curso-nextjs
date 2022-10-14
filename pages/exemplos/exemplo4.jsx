import Botao from '../../components/Botao'
export default function exemplo4() {
    return (
        <div className="container">
            <h1>Styled JSX</h1>
            <p>Usa o componente <a href="https://github.com/vercel/styled-jsx">styled-jsx</a> para permitir css escopado dentro do próprio arquivo/componente.</p>
            <Botao texto="Docs" link="https://github.com/vercel/styled-jsx"/>
            <style jsx>{`
            a {
                color: blue
            }
            p {
                font-size: 0.8rem;
            }
        
            .container :global(.botao){
                background: blue
            }
            `}</style>

            <style global jsx>{`
            body{
                background-color: #ddd;
            }
            `}</style>
        </div>
    )
}
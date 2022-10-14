export default function Botao(props) {
    return (
        <>
            <div className="botao" onClick={() => window.location.href = props.link}>
                {props.texto}
            </div>
            <style jsx>{`
                .botao{
                    cursor: pointer;
                    background: orange;
                    width: 100px;
                    text-align: center;
                }
        `}</style>
        </>
    )
}
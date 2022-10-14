import styles from "./exemplo2.module.css"
export default function exemplo2() {
    return (
        <div className={styles.container}>
            <h1>Estilo escopado</h1>
            <h2 id={styles.h2}>Restrito somente a este componente</h2>
            <div className={styles.corVermelha}>
                <p>Classes (.) e id's(#) do seu CSS são convertidos em propriedades do objeto referenciado à sua folha de estilos.</p>
            </div>
        </div>
    )
}
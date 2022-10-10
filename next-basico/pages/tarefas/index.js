export default function ListaTarefas({tarefas}) {
    return (
        <>
        <h1>Tarefas</h1>
        <ul>
            {tarefas.map(({title, id}) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const tarefas = await fetch('http://localhost:3002/tarefas')
        .then((response) => response.json())

        const props = { tarefas }
        return { props }
    } catch (error) {
        console.error('deu erro:', error)
    }
}

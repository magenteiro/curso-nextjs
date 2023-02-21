export default async function fetcher(query, variables = {}, headers = Array, cache = 'force-cache', nextOptions = {}) {
    headers = {...headers, 'Content-Type': 'application/json'}
    nextOptions = {next: nextOptions}
    const req = await fetch(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                query: query,
                variables: variables
            }),
            nextOptions
        },
        {cache: cache}
    )
    
    return await req.json()
}
import md5Hash from "crypto-js/md5";

export default async function fetcher(query, variables = {}, headers = Array, cache = 'force-cache', nextOptions = {}) {
    headers = {...headers, 'Content-Type': 'application/json'}
    nextOptions = {next: nextOptions}
    
    const bodyReq = JSON.stringify({
        query: query,
        variables: variables
    })
    
    const md5Req = md5Hash(bodyReq)
    const req = await fetch(
        process.env.NEXT_PUBLIC_GRAPHQL_URL + '?h=' + md5Req,
        {
            method: 'POST',
            headers: headers,
            body: bodyReq,
            nextOptions
        },
        {cache: cache}
    )
        .catch((error) => console.log('erro no fetcher', error))

    return await req.json()
}
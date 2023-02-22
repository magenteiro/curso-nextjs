import fetcher from "../../helpers/fetcher";

export default async function Logout(req, res) {
    if (!req.cookies.customerToken) {
        res.redirect('/')
    }
    const query = `mutation RevokeCustomerToken {
  revokeCustomerToken {
    result
  }
}`

    const headers = {'Authorization': 'Bearer ' + req.cookies.customerToken}

    const logout = await fetcher(query, {}, headers, 'no-cache')

    res.setHeader('Set-Cookie', ['customerEmail=; Max-Age=0; Path=/', 'customerToken=; Max-Age=0; Path=/'])
    res.redirect('/')
}
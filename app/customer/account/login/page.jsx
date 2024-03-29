"use client";
import {useState} from "react";
import {deleteCookie, setCookie} from "cookies-next";
import {useRouter} from "next/navigation";
import fetcher from "../../../../helpers/fetcher";

export default function Login(){
    const [msgError, setMsgError] = useState(false)
    const router = useRouter()
    const handleLogin = async (event) => {
        event.preventDefault()
        const login = event.target.email.value
        const password = event.target.password.value
        const query = `mutation GenerateCustomerToken($email: String!, $password: String!) {
  generateCustomerToken(email: $email, password: $password) {
    token
  }
}`
        const variables = {
            "email": login,
            "password": password
        }
        const token = await fetcher(query, variables, [], 'no-cache')
        // const token = await tokenReq.json()
        if(token.errors != null){
            setMsgError(token.errors[0].message)
        }
        deleteCookie('customerToken')
        deleteCookie('customerEmail')
        if(token.data?.generateCustomerToken != null){
            setMsgError(false)
            setCookie('customerToken', token.data.generateCustomerToken.token)
            setCookie('customerEmail', login)
            router.push('/')
            router.refresh()
        }
        
    }
    return <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Faça login em sua conta
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            crie uma conta agora mesmo
                        </a>
                    </p>
                </div>
                <p className="error text-red-600" id="errMsg">{msgError}</p>
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Seu e-mail
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoFocus={true}
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Seu e-mail"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Lembrar meu e-mail
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
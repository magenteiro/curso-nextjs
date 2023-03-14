//Componente importado parcialmente de https://www.floatui.com/components/heroes/
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl">
          Bem-vindo a nossa loja demo do <br/>
          <Link href={`https://magenteiro.com/nextjs?utm_source=lojademonext&utm_campaign=mainbanner`}><span className="text-amber-900"> Curso de Next.js</span></Link>do Magenteiro.com
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Uma loja feita em Next.js 13 integrada ao Magento usando GraphQL
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <a
          href="https://magenteiro.com/nextjs?utm_source=lojademonext&utm_campaign=mainbanner"
          className="px-10 py-3.5 w-full bg-orange-700 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          Espiar curso
        </a>
        {/* <a
          href="javascript:void(0)"
          className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
        >
          Try it out
        </a> */}
      </div>
    </section>
  );
}

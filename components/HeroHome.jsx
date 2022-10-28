//Componente importado parcialmente de https://www.floatui.com/components/heroes/
export default function HeroHome() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Confira as últimas novidades da
          <span className="text-indigo-600"> Coleção Yoga Luma</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Roupas de yoga feitas sob medida para mulheres de todas as idades
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <a
          href="javascript:void(0)"
          className="px-10 py-3.5 w-full bg-orange-600 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          Espiar
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

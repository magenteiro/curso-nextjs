import Image from 'next/image'
import clube from '../public/images/clube.jpeg'
export default function Home() {
  return (
    <main className="w-8/12 m-auto">
        <h1 className='text-2xl'>Exemplo de Uso - Imagens</h1>
        
        {/*Imagem local com img*/}
        <img src='/images/clube.jpeg'/>
        
        <div className="h-96">&nbsp;</div>
        
        {/*Imagem local com Image*/}
        <Image src={clube} />
        
        {/*Imagem remota com Image*/}
        <Image src="https://i.imgur.com/8d11eYK.jpeg" width={1920} height={1080} />

        {/*Imagem remota com Image sem especificar tamanho*/}
        <div className={'relative h-60 w-96 mt-64'}>
            <Image src="https://i.imgur.com/8d11eYK.jpeg" fill style={{objectFit: 'contain'}} 
                   // priority={true} //opcional para desabilitar o lazy load
            />
        </div>
    </main>
  )
}

export const metadata = {
    title: 'Next.js Image Exemplo',
}
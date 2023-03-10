import Image from 'next/image'
import clube from "../public/images/clube.jpeg";
export default function Home() {
  return (
    <main className="w-8/12 m-auto">
        <Image src={clube}/>
    </main>
  )
}

export const metadata = {
    title: 'Next.js Image Exemplo',
}
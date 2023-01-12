import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="pt">
        <head/>
        <body>
        <Navbar/>
            <main className="w-8/12 mx-auto">
                {children}
            </main>
        </body>
        <Footer/>
        </html>
    )
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/globals.css";

export default function RootLayout({children}) {
    return (
        <html lang="pt">
        <head/>
        <body>
        <Navbar/>
            <main className="w-8/12 mx-auto">
                {children}
            </main>
        <Footer/>
        </body>
        </html>
    )
}

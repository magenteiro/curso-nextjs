import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function UmaColuna({children}){
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}
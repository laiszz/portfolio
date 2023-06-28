import Navbar from "../components/lg/navbar/Navbar"
import Perfil from "../components/lg/perfil/Perfil"
import Sobre from "../components/lg/sobre/Sobre"
import Experiencias from "../components/lg/experiencias/Experiencias"
import Trabalhos from "../components/lg/trabalhos/Trabalhos"
import Footer from "../components/lg/footer/Footer"

function Home() {
    return (
        <>
            <Navbar />
            <Perfil />
            <Sobre />
            <Experiencias />
            <Trabalhos />
            <Footer />
        </>
    )
}

export default Home
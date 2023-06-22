import Navbar from "../components/navbar/Navbar"
import Perfil from "../components/perfil/Perfil"
import Sobre from "../components/sobre/Sobre"
import Experiencias from "../components/experiencias/Experiencias"
import Trabalhos from "../components/trabalhos/Trabalhos"
import Footer from "../components/footer/Footer"

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
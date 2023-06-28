import { Box } from "@mui/material"
import NavbarXl from "../components/xl/navbar/Navbar"
import PerfilXl from "../components/xl/perfil/Perfil"
import SobreXl from "../components/xl/sobre/Sobre"
import ExperienciasXl from "../components/xl/experiencias/Experiencias"
import TrabalhosXl from "../components/xl/trabalhos/Trabalhos"
import FooterXl from "../components/xl/footer/Footer"
import NavbarMd from "../components/md/navbar/Navbar"
import PerfilMd from "../components/md/perfil/Perfil"
import SobreMd from "../components/md/sobre/Sobre"
import ExperienciasMd from "../components/md/experiencias/Experiencias"
import TrabalhosMd from "../components/md/trabalhos/Trabalhos"
import FooterMd from "../components/md/footer/Footer"
import NavbarXs from "../components/xs/navbar/Navbar"
import PerfilXs from "../components/xs/perfil/Perfil"
import SobreXs from "../components/xs/sobre/Sobre"
import ExperienciasXs from "../components/xs/experiencias/Experiencias"
import TrabalhosXs from "../components/xs/trabalhos/Trabalhos"
import FooterXs from "../components/xs/footer/Footer"

function Home() {
    return (
        <>
            <Box display={{ xs: 'none', md: 'none', xl: 'block' }}>
                <NavbarXl />
                <PerfilXl />
                <SobreXl />
                <ExperienciasXl />
                <TrabalhosXl />
                <FooterXl />
            </Box>
            <Box display={{ xs: 'none', md: 'block', xl: 'none' }}>
                <NavbarMd />
                <PerfilMd />
                <SobreMd />
                <ExperienciasMd />
                <TrabalhosMd />
                <FooterMd />
            </Box>
            <Box display={{ xs: 'block', md: 'none', xl: 'none' }}>
                <NavbarXs />
                <PerfilXs />
                <SobreXs />
                <ExperienciasXs />
                <TrabalhosXs />
                <FooterXs />
            </Box>
        </>
    )
}

export default Home
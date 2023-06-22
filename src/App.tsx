
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { PortfolioTheme } from "./theme/PortfolioTheme"
import Home from "./pages/Home"
import './App.css'

function App() {
	return (
		<>
			<ThemeProvider theme={PortfolioTheme}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</ThemeProvider>
		</>
	)
}

export default App
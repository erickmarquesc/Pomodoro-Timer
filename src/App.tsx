import { CyclesContextProvider } from './context/CyclesContext'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>

        <GlobalStyle />
      </BrowserRouter>
      <h3>V.2.0.0 Criado por Erick Marques</h3>
    </ThemeProvider>
  )
}

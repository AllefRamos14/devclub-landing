import { ThemeProvider } from 'styled-components';
import { Alcance } from './components/Alcance';
import { Alunos } from './components/Alunos';
import { Empresas } from './components/Empresas';
import { CTAFinal } from './components/finalCTA';
import { Footer } from './components/Footer/Footer';
import { Formacoes } from './components/Formacoes';
import { Hero } from './components/Hero';
import { Numeros } from './components/Numeros';
import { QuemSomos } from './components/QuemSomos';
import { Tutores } from './components/Tutores';
import { NavBar } from './components/ui/NavBar';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Formacoes />
      <QuemSomos />
      <Tutores />
      <Alunos />
      <Alcance />
      <Empresas />
      <Numeros />
      <CTAFinal />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

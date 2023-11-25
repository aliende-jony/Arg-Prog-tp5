
import './App.css';
import { ContadorResponsive } from './components/contadorResponsive';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <ContadorResponsive/>
      </ChakraProvider>
    </div>
  );
}

export default App;

import './App.css'

// 2 - imagem em assets
import city from './assets/city.jpg'

// 4 - useState
import Dados from './components/dados'

function App() {
  

  return (
    <div>
      <h1>Avançando com React</h1>
      {/* Trabalhando com imagens no React - Assets */}
      <img src={city} alt="imagem do assets" />

      {/* imagens no public */}
      <img src='/img1.jpg' alt="imagem em public" />

      {/* 3- atuando com useState - Mudanças de estado, valor de algo  */}
      <Dados/>
    </div>
  )
}

export default App

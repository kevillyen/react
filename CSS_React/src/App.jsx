import './App.css'
import MeuComponents from './components/MeuComponents'
import Title from './components/Title';

function App() {
  // 4
 
const n = 10;
const redTitle = false
  return (
   <div className='App'>

    <h1>CSS no React</h1>

    <MeuComponents/>
    
    <p style={{color: "blue", padding: "25px", borderTop: "1px solid black"}}>
      Este paragrafo foi estilizado com CSS Inline!
    </p>

    {/*Operador Ternário - condição ? Valor Verdadeiro : Valor Falso */}
    <h2 style={ n > 10 ? {color: "purple"} : {color: "red"}}>
      CSS Dinamico
    </h2>

    <h2 className={redTitle ? "red-title" : "title"}>
      Usando Classes Dinamicas no CSS Externo 
    </h2>

    <Title/>

   </div>
  )
}

export default App

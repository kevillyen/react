import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'  
// 1- Chamar o componente


function App() {
  

  return (
    <div>
      <h1>Teste</h1>
      <p>paragrafo</p>
      
      {/* Chamando o componente que nós criamos  */}
      <FirstComponent/>

      {/* 2- USAR ESSE COMPONENTE */}
      <TemplateExpression/>
    </div>
     
    
  )
}

export default App

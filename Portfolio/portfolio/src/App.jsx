import './App.css'
import About from './components/About'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <NavBar/>
      <div style={{ paddingTop: "70px" }}>
        <Hero/>

        <Gallery/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

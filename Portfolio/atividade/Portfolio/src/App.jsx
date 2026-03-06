import "./App.css"

import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <NavBar />

      <div style={{ paddingTop: "70px" }}></div>

      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
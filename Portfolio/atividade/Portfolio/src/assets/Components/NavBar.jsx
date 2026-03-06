import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Kevillyen.dev</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

    </nav>
  )
}

export default NavBar
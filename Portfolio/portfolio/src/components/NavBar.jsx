
import './NavBar.css'

const NavBar = () => {
  return (
   <nav className="navbar">
    <div className="nav-logo">&lt;Turma Dev /&gt;</div>

    <ul className="nav-links">
        <li>
            <a href="#home"> Home</a>
        </li>
        <li>
            <a href="#about"> Sobre</a>
        </li>
        <li>
            <a href="#projects">Projetos</a>
        </li>

        <li>
            <a href="#contact">Contato</a>
        </li>
    </ul>
   </nav>
  )
}

export default NavBar
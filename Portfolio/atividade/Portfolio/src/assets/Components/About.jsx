import "./About.css"

function About() {
  return (

    <section className="about" id="about">

      <h2>Sobre Mim</h2>

      <p className="about-text">
        Sou uma desenvolvedora apaixonada por tecnologia e criação de interfaces
        modernas. Gosto de transformar ideias em aplicações funcionais,
        bonitas e fáceis de usar.
      </p>

      <div className="skills">

        <div className="skill-card">
          <h3>Front-end</h3>
          <p>React, JavaScript, HTML e CSS</p>
        </div>

        <div className="skill-card">
          <h3>Back-end</h3>
          <p>C#, SQL Server e APIs</p>
        </div>

        <div className="skill-card">
          <h3>UI / UX</h3>
          <p>Figma, design moderno e responsivo</p>
        </div>

      </div>

    </section>

  )
}

export default About
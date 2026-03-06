import "./Gallery.css"

function Gallery(){
return(

<section className="projects" id="projects">

<h2>Meus Projetos</h2>

<div className="project-grid">

<div className="project-card">
<h3>Calculadora IMC</h3>
<p>Aplicação React que calcula IMC.</p>
</div>

<div className="project-card">
<h3>Formulário React</h3>
<p>Sistema de cadastro com validação.</p>
</div>

<div className="project-card">
<h3>Site de Perfil</h3>
<p>Página pessoal com HTML e CSS.</p>
</div>

</div>

</section>

)
}

export default Gallery
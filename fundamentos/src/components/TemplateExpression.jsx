//atalho para criar o projeto: rafce

const nome = "Kevillyen"

//Sempre que ver data é dados o significado
const dados = {
    idade: 17,
    trabalho: "Programadora"
}

const skills = ["React", "C#", "JS", "HTML"]
const projects = [
    {name: "Portfólio", tech: "React + CSS", status: "Finalizando"},
    {name: "Lista de Tarefas", tech: "Javascript", status: "Em andamento"},
];

const TemplateExpression = () => {
    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Seu nome é: {nome}</h3>
            <p>
                Sua idade é {dados.idade} anos e voce é um {dados.trabalho}
            </p>

            <p>Voce tem {skills.length} habilidades</p>

            <h4>Habilidades</h4>
            <ul>
                {skills.map((skill) => (
                    <li>{ skill }</li>
))}
            </ul>
            <h4>Projetos</h4>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                        {project.name} - {project.tech} - {project.status}
                    </li>
                )
            )}
            </ul>
        </div>
    )
}

export default TemplateExpression
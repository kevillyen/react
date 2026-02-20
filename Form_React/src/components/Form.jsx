import { useState } from "react"
import'./Form.css'

//Atalho para criar projeto em jsx : RAFCE
const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("admin");


    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Limpar após enviar os dados

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite o seu nome:" onChange={handleName} value={name} />

            <label>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Digite o seu email:" onChange={handleEmail} value={email}/>
            </label>
            </div>

            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do Usuário" onChange={handleBio} value={bio}>
                </textarea>
            </label>

            <label>
                <span>Função no sistema: </span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editar</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />

        </form>
    </div>
  )
}

export default Form
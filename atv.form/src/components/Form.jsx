import { useState } from "react";
import Button from "./Button";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("Usuário");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name) {
      setError("O nome é obrigatório.");
      return;
    }

    if (!email) {
      setError("O email é obrigatório.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (!terms) {
      setError("Você precisa aceitar os termos.");
      return;
    }

    setSuccess("Cadastro realizado com sucesso! 🎉");
  };

  const handleClear = () => {
    setName("");
    setLastname("");
    setEmail("");
    setAge("");
    setPhone("");
    setCountry("Brasil");
    setBio("");
    setRole("Usuário");
    setPassword("");
    setTerms(false);
    setError("");
    setSuccess("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>

        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Sobrenome</label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Idade</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

        <label>Telefone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>País</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option>Brasil</option>
          <option>Portugal</option>
          <option>Estados Unidos</option>
          <option>Mexico</option>
          <option>Alemanha</option>
          <option>Canada</option>
          <option>Reino Unido</option>
          <option>França</option>
        </select>

        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

        <label>Função no sistema</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Usuário</option>
          <option>Editor</option>
          <option>Administrador</option>
        </select>

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="terms">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          Aceito os termos
        </label>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <Button
          text="Enviar Cadastro"
          onClick={handleSubmit}
          disabled={!terms}
        />

        <Button
          text="Limpar Dados"
          onClick={handleClear}
          variant="secondary"
        />
      </form>
    </div>
  );
};

export default Form;
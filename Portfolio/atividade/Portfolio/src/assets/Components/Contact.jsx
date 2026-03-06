import "./Contact.css"

function Contact(){
return(

<section className="contact" id="contact">

<h2>Contato</h2>

<form>

<input type="text" placeholder="Seu nome"/>

<input type="email" placeholder="Seu email"/>

<textarea placeholder="Sua mensagem"></textarea>

<button>Enviar</button>

</form>

</section>

)
}

export default Contact
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const template_params = {
    name,
    message,
    email,
    title,
  };

  const sendForm = async () => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        template_params,
        import.meta.env.VITE_PUBLIC_KEY
        );
        if (response.status !== 200) {
          throw new Error(response);
        }
        setEmail('');
        setMessage('');
        setName('');
        setTitle('');
        setSuccessful(true);
      } catch (err) {
        console.log('Erro ao tentar enviar email:', err.text);
        setError(true);
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    if(name === '' || email === '' || title === '' || message.length < 20) {
      alert('Preencha todos os campos')
      return;
    };
    await sendForm();
  }

  return (
    <footer id='contact' className="contact">
      <div className="form__asside">
        <h1>FICOU INTERESSADO?</h1>
        <h3>Entre em contato<br />e tire suas dúvidas ou faça um orçamento</h3>
      </div>
      <div className="form__body">
        <form className="form" method="post" onSubmit={ (e) => submitForm(e) }>
          <input
            type="text"
            className="form__name"
            placeholder="Digite seu nome"
            onChange={ (e) => setName(e.target.value) }
            value={name}
          />

          <input
            type="email"
            className="form__email"
            placeholder="Digite seu email"
            onChange={ (e) => setEmail(e.target.value) }
            value={email}
          />

          <input
            type="text"
            className="form__title"
            placeholder="Digite o assunto"
            onChange={ (e) => setTitle(e.target.value) }
            value={title}
          />

          <textarea
            className="form__message"
            placeholder="Digite sua mensagem aqui"
            onChange={ (e) => setMessage(e.target.value) }
            value={message}
          />
          {successful && <strong>Contato enviado com sucesso!</strong>}
          {error && <strong>OOPS! Falha ao enviar a mensagem, por favor tente novamente mais tarde ou deixe uma mensagem no Linkedin</strong>}
          <button>ENVIAR</button>
        </form>
      </div>
    </footer>
  );
};
 
export default Form;

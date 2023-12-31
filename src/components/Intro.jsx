import gifIntro from '../assets/gifIntro.gif';
import './Intro.css';
import MiniNav from './MiniNav';

function Intro() {

  return (
    <header className='intro'>
      <div className='intro__content'>
        <h1>Lucas<br/>Langsch</h1>
        <h3>Desenvolvedor<br/>Web Full Stack</h3>
        <MiniNav />
      </div>
      <div className='intro__image'>
        <img className='gif' src={gifIntro} alt="imagem animada de uma pessoa no computador" />
      </div>
    </header>
  )
}

export default Intro;

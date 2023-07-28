import './About.css';
import AnimatedPhoto from './AnimatedPhoto';
import { useContext } from 'react';
import { RepoContext } from '../context/RepoProvider';

function About() {
  const { ref } = useContext(RepoContext);

  return (
    <section id='about' className='about'>
      <div className='about__image'>
        <AnimatedPhoto />
      </div>
      <div className='about__content'>
        <h1 ref={ref}>OLÁ, EU SOU O<br/><span className='about__content-name'>LUCAS</span></h1>
        <p>
          Sou um profissional determinado que está constantemente buscando evoluir e aprender.
          Com formação em Engenharia Química, decidi me aventurar em uma emocionante transição de carreira para me tornar um Desenvolvedor Web Full Stack.
          <br/>
          <br/>
          A engenharia me proporcionou uma base para a <strong>resolução de problemas</strong> e <strong>habilidades analíticas</strong>, e ao longo do tempo,
          minha paixão pela tecnologia e o campo da programação me cativaram profundamente.
          <br/>
          <br/>
          Foi assim que dei início à minha jornada na <strong>Trybe</strong>, onde venho aprimorando minhas habilidades em desenvolvimento web.
        </p>
      </div>
    </section>
  );
};

export default About;

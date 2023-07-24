import SliderImages from './SliderImages';
import './Tecnologies.css';

function Tecnologies() {
  return (
    <section className='tecnologies'>
      <div className='tecnologies__body'>
        <div className='tecnologies__content'>
          <h1>MINHAS HABILIDADES</h1>
          <p>
            Como desenvolvedor fullstack crio soluções <strong>personalizadas</strong> de ponta a ponta com base nas suas necessidades específicas.
            <br />
            <br />
            Minhas habilidades desenvolvidas permitem desenvolver os produtos de forma <strong>organizada</strong>, <strong>segura</strong> e <strong>escalável</strong>.
          </p>
        </div>
        <SliderImages/>
      </div>
    </section>
  );
}

export default Tecnologies;
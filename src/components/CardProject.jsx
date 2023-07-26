import './CardProject.css';
import imagesData from '../utils/imagesData';

function CardProject({props}) {
  return (
    <div className='projects__card'>
      <div className='projects__card-img'>
        <img src={imagesData[props.name]} alt="" />
      </div>
      <div className='projects__card-content'>
        <h2>{props.name.replace('-', ' ')}</h2>
        <a href=''>SAIBA MAIS</a>
      </div>
    </div>
  );
}

export default CardProject;
import './CardProject.css';
import imagesData from '../utils/imagesData';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CardProject({props}) {
  return (
    <div className='projects__card'>
      <div className='projects__card-img'>
        <img src={imagesData[props.name]} alt="" />
      </div>
      <div className='projects__card-content'>
        <h2>{props.name.replace('-', ' ')}</h2>
        <Link to={`/project/${props.id}`}>SAIBA MAIS</Link>
      </div>
    </div>
  );
}

export default CardProject;
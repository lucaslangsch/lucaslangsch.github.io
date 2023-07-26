import './CardProject.css';
import imagesData from '../utils/imagesData';

function CardProject({props}) {
  return (
    <div className='projects__card'>
      <div className='projects__card-img'>
        <img src={imagesData[props.name]} alt="" />
      </div>
      <div className='projects__card-content'>
        <h3>{props.name.replace('-', ' ')}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, animi. Fugiat est odio rerum culpa quam atque mollitia vero. Magni maiores placeat iusto, aperiam minus voluptas quas doloribus qui id.</p>
      </div>
    </div>
  );
}

export default CardProject;
import lucas from '../assets/lucasBack.png';
import back from '../assets/backLucas.png';
import './AnimatedPhoto.css';

function AnimatedPhoto() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" width="80%" className="image" aria-hidden="true">
      <title>This is an image title</title>
      <desc>This is an image description</desc>
      <defs>
        <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
          <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c17 0 52 42 52 70z" />
        </clipPath>
        <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
          <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
        </clipPath>
      </defs>

      <g clipPath="url(#maskImage)" transform="translate(0 -7)">
        <image clipPath="url(#maskBackground)" width="190" height="150" x="50" y="0" href={back} transform="translate(-90 -31)" />
        <image width="100%" height="100%" x="0" y="0" fill="none" loading="lazy" className="image__foreground" href={lucas} />
      </g>
    </svg>
  );
}

export default AnimatedPhoto;
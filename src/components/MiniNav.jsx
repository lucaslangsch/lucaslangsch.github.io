import { AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import './MiniNav.css';

function MiniNav() {
  return (
    <nav className='about__nav'>
      <ul>
        <a target="_blank" href="https://www.linkedin.com/in/lucas-langsch-910250189/">
          <AiOutlineLinkedin className='about__nav-icon' />
        </a>
        <a href="#">
          <AiOutlineMail className='about__nav-icon' />
        </a>
        <a target="_blank" href="https://github.com/lucaslangsch">
          <AiOutlineGithub className='about__nav-icon' />
        </a>
      </ul>
    </nav>
  );
}

export default MiniNav;
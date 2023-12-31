import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import './MiniNav.css';

function MiniNav() {
  return (
    <nav className='intro__nav'>
      <ul>
        <a target="_blank" href="https://www.linkedin.com/in/lucas-langsch-910250189/">
          <AiFillLinkedin className='intro__nav-icon' />
        </a>
        <a href="#contact">
          <AiOutlineMail className='intro__nav-icon' />
        </a>
        <a target="_blank" href="https://github.com/lucaslangsch">
          <AiOutlineGithub className='intro__nav-icon' />
        </a>
      </ul>
    </nav>
  );
}

export default MiniNav;
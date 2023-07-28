import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectDetails.css';
import { RepoDetailsContext } from '../context/RepoDetailsProvider';
import imagesData from '../utils/imagesData';
import { AiOutlineGithub, AiOutlineTag, AiOutlineLink } from 'react-icons/ai';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { RepoContext } from '../context/RepoProvider';

function ProjectDetails() {
  const { repoDetails } = useContext(RepoDetailsContext);
  const { ref } = useContext(RepoContext);
  const history = useHistory()

  useEffect(() => {
    // Verifica se a referência (ref) existe e é um elemento válido antes de tentar focar
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]); // Executa o efeito sempre que a referência (ref) for alterada
  
  if (repoDetails.length == 0) {
    return <h1>Carregando</h1>
  }

  return (
    <section className="projectdetails">
      <a className='projectdetails-link link-1' href={repoDetails.html_url} target='blank'><AiOutlineGithub /></a>
      <a className='projectdetails-link link-2' href={repoDetails.homepage} target='blank'><AiOutlineLink /></a>
      <button onClick={ () => {history.goBack()}} className='projectdetails-link link-3'><IoChevronBackCircleOutline /></button>
      <div className='projectdetails__img'>
        <img src={imagesData[repoDetails.name]} alt="" />
      </div>
      <div className='projectdetails__body'>
        <h1>{repoDetails.name.replace('-', ' ')}</h1>
          <p>{repoDetails.description}</p>
          <ul>
            {repoDetails.topics.map((topic) => {
              return (
                <li key={topic}>
                  <AiOutlineTag />
                  {' '}
                  {topic}
                  </li>
              )
            })}
          </ul>
      </div>
    </section>
  );
}

export default ProjectDetails;

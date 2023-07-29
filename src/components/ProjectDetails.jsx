import { useContext } from 'react';
import './ProjectDetails.css';
import { RepoDetailsContext } from '../context/RepoDetailsProvider';
import imagesData from '../utils/imagesData';
import { AiOutlineGithub, AiOutlineTag, AiOutlineLink } from 'react-icons/ai';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ProjectDetails() {
  const { repoDetails } = useContext(RepoDetailsContext);

  if (repoDetails.length == 0) {
    return <h1>Carregando</h1>
  }

  return (
    <>
      <section className="projectdetails">
        <a className='projectdetails-link link-1' href={repoDetails.html_url} target='_blank'><AiOutlineGithub /></a>
        {
          repoDetails.homepage ? 
            <a className='projectdetails-link link-2' href={repoDetails.homepage} target='_blank'><AiOutlineLink /></a>
            :
            null
        }
        <button onClick={ () => {window.location.href = '/#projects'}} className='projectdetails-link link-3'><IoChevronBackCircleOutline /></button>
        {/* <Link to='/' className='projectdetails-link link-3' href={repoDetails.homepage} target='blank'><IoChevronBackCircleOutline /></Link> */}
        <div className='projectdetails__img'>
          <img src={imagesData[repoDetails.name]} alt="" />
        </div>
        <div className='projectdetails__body'>
          <h1 className='projectdetails-title'>{repoDetails.name.replace('-', ' ')}</h1>
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
    </>
  );
};

export default ProjectDetails;

import { useContext } from 'react';
import CardProject from './CardProject';
import { RepoContext } from '../context/RepoProvider';
import './Projects.css';

function Projects() {
  const { repos } = useContext(RepoContext);
 
  if (!repos) {
    return (
      <section className='projects'>
        <h1>OOPS! Algo errado ao trazer os projetos, por favor tente mais tarde ou visite o github :|</h1>
      </section>
    );
  };

  return (
    <section className='projects'>
      <h1>MEUS PROJETOS</h1>
      <div className='projects__body'>
        {repos.map((repo) => <CardProject key={repo.id} props={repo}/>)}
      </div>
    </section>
  );
};

export default Projects;

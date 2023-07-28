import { useContext, useEffect, useRef, useState } from 'react';
import CardProject from './CardProject';
import { RepoContext } from '../context/RepoProvider';
import './Projects.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Projects() {
  const { repos, ref } = useContext(RepoContext);
  const history = useHistory();

  useEffect(() => {
    if (history.location.hash === '#projects' && ref && ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView();
    }
  }, [location, ref]);

  if (!repos) {
    return (
      <section className='projects'>
        <h1>OOPS! Algo errado ao trazer os projetos, por favor tente mais tarde ou visite o github :|</h1>
      </section>
    );
  };

  return (
    <section className='projects' id='proj'>
      <h1 ref={ref}>MEUS PROJETOS</h1>
      <div className='projects__body'>
        {repos.map((repo) => <CardProject key={repo.id} props={repo} />)}
      </div>
    </section>
  );
};

export default Projects;

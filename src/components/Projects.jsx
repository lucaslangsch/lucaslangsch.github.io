import { useEffect, useState } from 'react';
import CardProject from './CardProject';
import fetchData from '../utils/fetchData';
import { getLocalStorage, saveLocalStorage } from '../utils/localStorageFunctions';
import './Projects.css';

function Projects() {
  const [reposGit, setReposGit] = useState(null);
  const [reposTitle, _setReposTitle] = useState(['trivia', 'recipes-app', 'newpace']);

  useEffect(() => {
    const callFetchData = async () => {
      try {
        const response = await fetchData();
        setReposGit(response);
        const filteredRepos = response.filter(repo => reposTitle.includes(repo.name));
        saveLocalStorage('reposDataToRender', filteredRepos);
      } catch (error) {
        throw new Error(error);
      }
    }

    if (getLocalStorage('reposTitle') !== JSON.stringify(reposTitle) || getLocalStorage('reposTitle') === null || getLocalStorage('reposDataToRender') === null) {
      callFetchData();
      saveLocalStorage('reposTitle', reposTitle);
    }

  }, [reposGit]);

  const repos = JSON.parse(getLocalStorage('reposDataToRender'));
 
  if (!repos) {
    return (
      <section className='projects'>
        <h1>OOPS! Algo errado ao trazer os projetos, por favor tente mais tarde ou visite o github :|</h1>
      </section>
    );
  };

  return (
    <section >
      <div className='projects__body'>
        {repos.map((repo) => <CardProject key={repo.name} props={repo}/>)}
      </div>
    </section>
  );
};

export default Projects;

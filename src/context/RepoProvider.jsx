import { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import fetchData from "../utils/fetchData";
import { getLocalStorage, saveLocalStorage } from "../utils/localStorageFunctions";

export const RepoContext = createContext();

function RepoProvider({ children }) {
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

  }, [reposGit, reposTitle]);

  const repos = JSON.parse(getLocalStorage('reposDataToRender'));

  const values = useMemo(() => ({
    repos
  }), [repos])

  return (
    <RepoContext.Provider value={values}>
      { children }
    </RepoContext.Provider>
  )
};

export default RepoProvider;
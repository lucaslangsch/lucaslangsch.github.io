import { useCallback, useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import { getRepoDetailsFromLocal } from "../utils/localStorageFunctions";

export const RepoDetailsContext = createContext();

function RepoDetailsProvider({ children }) {
  const [repoDetails, setRepoDetails] = useState([]);

  const getRepoDetails = useCallback((id) => {
    const repo = getRepoDetailsFromLocal(id);
    setRepoDetails(repo);
  }, [getRepoDetailsFromLocal]);
  
  const values = useMemo(() => ({
    getRepoDetails, repoDetails
  }), [getRepoDetails, repoDetails]);

  return (
    <RepoDetailsContext.Provider value={values}>
      { children }
    </RepoDetailsContext.Provider>
  )
};

export default RepoDetailsProvider;
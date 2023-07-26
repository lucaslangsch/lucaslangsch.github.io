import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { RepoDetailsContext } from "../context/RepoDetailsProvider";
import { useContext, useEffect } from "react";

function Project() {
  const { id } = useParams();
  const { getRepoDetails, repoDetails } = useContext(RepoDetailsContext);

  useEffect(() => {
    getRepoDetails(id);
  }, [id, getRepoDetails]);

  return (
    <>
      <p>Página do projeto</p>
    </>
  );
}

export default Project;
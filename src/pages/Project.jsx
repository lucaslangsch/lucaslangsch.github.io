import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { RepoDetailsContext } from "../context/RepoDetailsProvider";
import { useContext, useEffect } from "react";
import Intro from "../components/Intro";
import ProjectDetails from "../components/ProjectDetails";

function Project() {
  const { id } = useParams();
  const { getRepoDetails, repoDetails } = useContext(RepoDetailsContext);

  useEffect(() => {
    getRepoDetails(id);
  }, [id, getRepoDetails]);

  return (
    <>
      <ProjectDetails />
    </>
  );
}

export default Project;
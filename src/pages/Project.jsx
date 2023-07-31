import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { RepoDetailsContext } from "../context/RepoDetailsProvider";
import { useContext, useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import Form from "../components/Form";

function Project() {
  const { id } = useParams();
  const { getRepoDetails, repoDetails } = useContext(RepoDetailsContext);

  useEffect(() => {
    getRepoDetails(id);
  }, [id, getRepoDetails]);

  return (
    <>
      <ProjectDetails />
      <Form />
    </>
  );
}

export default Project;
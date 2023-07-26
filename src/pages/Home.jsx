import About from "../components/About";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Tecnologies from "../components/Tecnologias";

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Tecnologies />
      <Projects />
    </>
  );
}

export default Home;
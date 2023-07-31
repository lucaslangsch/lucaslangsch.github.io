import About from "../components/About";
import Form from "../components/Form";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Tecnologies from "../components/Tecnologias";

function Home() {
  return (
    <>
      <Intro />
    <main>
      <About />
      <Tecnologies />
      <Projects />
    </main>
      <Form />
    </>
  );
}

export default Home;

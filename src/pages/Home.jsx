import { useRef } from "react";
import About from "../components/About";
import Form from "../components/Form";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Tecnologies from "../components/Tecnologias";

function Home() {
  const ref = useRef(null)

  return (
    <>
      <Intro />
    <main>
      <About />
      <Tecnologies />
      <Projects />
    </main>
      <Form refer={ref}></Form>
    </>
  );
}

export default Home;
import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologias';

function App() {

  return (
    <>
      <header>MENU</header>
      <main>
        <Intro />
        <About />
        <Tecnologies />
        <Projects />
      </main>
    </>
  );
};

export default App;

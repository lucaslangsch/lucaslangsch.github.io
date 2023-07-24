import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import SliderImages from './components/SliderImages';
import Tecnologies from './components/Tecnologias';

function App() {

  return (
    <>
      <header>MENU</header>
      <main>
        <Intro />
        <About />
        <Tecnologies />
      </main>
    </>
  );
};

export default App;

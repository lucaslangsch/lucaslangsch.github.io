import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import './App.css';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" render={ () => (<Home />) }/>
        <Route path="/project/:id" render={ () => (<Project />) }/>
      </Switch>
    </>
  );
};

export default App;

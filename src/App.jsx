import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import './App.css';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" render={ () => (<Home />) }/>
        <Route path="/project/:id" render={ () => (<Project />) }/>
        <Route path="*" render={ () => (<NotFound />) }/>
      </Switch>
    </>
  );
};

export default App;

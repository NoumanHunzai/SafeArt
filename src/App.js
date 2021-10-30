import React from 'react';
import Nav from './components/NavBar/Nav';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Feature from './components/FeaturesArt/Feature';
import Creator  from './components/creators/creator';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <>
      <Nav/>
      <Route path='/home' component={Hero}/>
      <Route exact path='/artworks' component={Feature}/>
      <Route exact path='/creators' component={Creator}/>
    </>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

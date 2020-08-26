import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './page/Navbar';
import Error from './page/Error';
import About from './page/About';
import Contact from './page/Contact';
import './App.css';

const App =() => {
  return (
    <section className="App">

    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/Error" component={Error} />
      <Redirect to="/Error" />
    </Switch>

</section>
);
}

export default App;
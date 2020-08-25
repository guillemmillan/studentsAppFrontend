import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Jobs from './components/Jobs';
import Business from './components/Business';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route  path="/" component={Home}></Route>
       <Route exact path="/jobs">{Jobs}</Route>
       <Route path="/business">{Business}</Route>
       <Route exact path="/business/:name">{Business}</Route>
       <Route path="/signup">{Signup}</Route>
       <Route> </Route>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;

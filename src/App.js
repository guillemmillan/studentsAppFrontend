import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Jobs from './components/Jobs';
import Business from './components/Business';
import Footer from './components/Footer';
import Signup from './components/auth/Signup';
import OneJob from './components/OneJob';
import OneBusiness from './components/OneBusiness';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import AddJob from './components/AddJob';
import NewJob from './components/NewJob';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/jobs" component={Jobs}></Route>
       <Route path="/jobs/:id" component={OneJob}></Route>
       <Route path="/add-job" component={AddJob}></Route>
       <Route path="/new-job" component={NewJob}></Route>
       <Route exact path="/business" component={Business}></Route>
       <Route path="/business/:name" component={OneBusiness}></Route>
       <Route exact path="/signup" component={Signup}></Route>
       <Route exact path="/login" component={Login}></Route>
       <Route exact path="/search" component={Search}></Route>
       <Route exact path="/profile" component={Profile}></Route>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import Navigation from './statefull/Navigation';
import Keyboardpage from './statefull/Keyboardpage';
import Headsetpage from './statefull/Headsetpage';
import Mousepage from './statefull/Mousepage';
import Homepage from './statefull/Homepage';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

export default function App() {
  return(
    <div>
    <Router>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route path="/headset"><HeadsetPage/></Route>
        <Route path="/keyboard"><KeyboardPage/></Route>
        <Route path="/mouse"><MousePage/></Route>
      </Switch>
    </Router>
    </div>
  )
}
function HomePage(){
  return(
    <div className="container-fluid">
      <Navigation/>
      <Homepage/>
    </div>
  )
}
function HeadsetPage(){
  return(
    <div className="container-fluid">
      <Navigation/>
      <Headsetpage/>
    </div>
  )
}
function KeyboardPage(){
  return(
    <div className="container-fluid">
      <Navigation/>
      <Keyboardpage/>
    </div>
  )
}
function MousePage(){
  return(
    <div className="container-fluid">
      <Navigation/>
      <Mousepage/>
    </div>
  )
}
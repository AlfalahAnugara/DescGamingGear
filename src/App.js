import React from 'react';
import Navigation from './statefull/Navigation';
import Keyboardpage from './statefull/Keyboardpage';
import Headsetpage from './statefull/Headsetpage';
import Mousepage from './statefull/Mousepage';
import Homepage from './statefull/Homepage';
// import Content from './container/Content';
// import Provinsi from './container/Provinsi';
// import Footer from './container/Footer';
// import Hotline from './container/Hotline'/;
// import TableProvinsi from './components/ListProvinsi';
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
const HomePage = () => {
  return(
    <div className="container-fluid">
      <Navigation/>
      <Homepage/>
      {/* <Content/> */}
      {/* <Footer/> */}
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
// const Prov = () => {
//   return(
//     <div className="container dark">
//       <Navbar/>
//       <Provinsi/>
//       <Footer/>
//     </div>
//   )
// }
// const Hot = () => {
//   return(
//     <div className="container dark">
//       <Navbar/>
//       <Hotline/>
//       <Footer/>
//     </div>
//   )
// }
// const Contact = () => {
//   return(
//     <div className="container dark">
//       <Navbar/>
//       <Footer/>
//     </div>
//   )
// }
import './App.css';
import React from 'react';
import Checker from "./components/Checker.js";
import Info from "./components/Info.js";
import Contact from "./components/Contact.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'; 
/*
  changes you want for sure on your website, PUSH TO GITHUB
  github will rebuild the website from there

  make sure you save your MIT app
  - show the early progression of the website


  we need index.js in the root directory
  "github pages showing readme"
*/

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* navigation bar start */}
          <ul id="headerBar">
            <li>
              <Link to="/">Checker</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          {/* navigation bar end*/}

          <Switch>
            <Route path="/mail" component={() => {
              window.location.href = "www.google.com";
              return null;
            }} />;
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Checker />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}





export default App;
// hw:
  // 1. Fill in the Info and Contact modules
    // if you want a button to show text: 
  // 2. Style the navigation bar (add classes to ul, li, Link => App.css and style)

// Later:
  // add in all the data for Checker
  // link to external email

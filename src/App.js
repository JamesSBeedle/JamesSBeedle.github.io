import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Project from './containers/ProjectContainer'
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css'

// import SiteContainer from '../src/containers/SiteContainer'


function App() {
  return (
    <main class="app-body">
      <>
      <Router>
        <>
          <Header />          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
          {/* <Footer/> */}
        </>
      </Router>
      
      </>
    </main>
  );
}

export default App;

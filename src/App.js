import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Project from './containers/ProjectContainer'
import Contact from './components/Contact'
import Header from './components/Header'
import InnVentoryMore from './components/InnVentoryMore'
import TryAtomicMore from './components/TryAtomicMore'
import BudgetawayMore from './components/BudgetawayMore'

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
          <Route path="/innventorymore" component={InnVentoryMore} />
          <Route path="/tryatomicmore" component={TryAtomicMore} />
          <Route path="/budgetawaymore" component={BudgetawayMore} />
          {/* <Footer/> */}
        </>
      </Router>
      
      </>
    </main>
  );
}

export default App;

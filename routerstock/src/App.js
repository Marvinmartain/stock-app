import React from 'react';
import { Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './components/Home';
import About from '.components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';



function App() {
  
  return (
    
    <Router>
    <div className="container">
      <p>Let's Track Money</p>
    <nav>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    </ul>
    </nav>
        <Route path="/" exact components={Home} />
        <Route path="/about" components={About} />
        <Route path="/stocks/:symbol" components={Stock} />
        <Route path="/dashboard" components={Dashboard} />
      </div>
    </Router>

    
);

}

export default App;



import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";



function App() {
  return (
    <Router>
      <Nav title="weather-dashboard"  />
      <div className="container">
        
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/about" component={About} />
          
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

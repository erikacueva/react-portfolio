import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

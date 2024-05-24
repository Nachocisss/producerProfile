import "./App.css";
import Footer from "./screens/Footer/Footer.tsx";
import Header from "./screens/Header/Header.tsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./screens/Home/Home.tsx";
import About from "./screens/About/About.tsx";
import Portafolio from "./screens/Portafolio/Portafolio.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="app">
          <nav className="navbar">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/Portafolio" className="nav-link">
              Portafolio
            </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Portafolio" component={Portafolio} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

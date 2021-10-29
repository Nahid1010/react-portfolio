// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react router
import { HashRouter as Router, Route } from "react-router-dom";

// css
import "./App.css";

// components
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Route exact path="/">
          <About />
        </Route> 
        <Route path="/Home">
          <About />
        </Route> 
        <Route path="/About">
          <About />
        </Route> 
        <Route path="/Portfolio">
          <Portfolio />
        </Route> 
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
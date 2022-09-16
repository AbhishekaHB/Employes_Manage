import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Addemp from "./components/Addemp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navabar from "./components/Navabar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navabar/>
        <Switch>
          <Route  exact path="/">
          <Home/>
          </Route>
          <Route  path="/Addemp">
          <Addemp/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

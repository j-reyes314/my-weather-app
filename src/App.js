import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/home"
import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from "react-router-dom";
import Error from './components/Error/error';
// d35e9be47f58e6445fb0227b42fdeed2


function App() {
  
  return (
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
  );
}

export default App;

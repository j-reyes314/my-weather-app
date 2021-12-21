import './App.css';
import Home from "./components/Home/home"
import {BrowserRouter as Router,
        Switch,
        Route,
        } from "react-router-dom";
import Error from './components/Error/error';
import DayWeather from './components/DayWeather/DayWeather';
// d35e9be47f58e6445fb0227b42fdeed2


function App() {
  
  return (
    <div className='App'>
      <Router>
          
          <Switch>

            <Route path="/my-weather-app"   exact>
              <Home/>
            </Route>

            <Route path ="/:id">
              <DayWeather/>
            </Route>

            <Route>
              <Error/>
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;

import './App.css';
import Inicio from './Components/Inicio';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return(
    <Router>
    <Switch>
    <Route path="/Inicio">
        <Inicio />
      </Route>
      <Route path="/">
      </Route>
    </Switch>
    </Router>
  )
}

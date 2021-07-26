import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav';
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
        <Nav />
      </Route>
    </Switch>
    </Router>
  )
}

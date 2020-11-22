import SongsPage from './Pages/SongsPage'
import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {  BrowserRouter as Router, Switch, Route, Redirect}  from 'react-router-dom';
import "./App.css";
function App() {

  return (
    <Router>
    <div className="App">
      <h1 class='title'>LyFind.</h1>
      <Route path="/songs" component={SongsPage}/>
      <Route path="/" component={SongsPage}><Redirect to="/songs" /></Route>
    </div>
    </Router>

  );
}

export default App;
  
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {
    Nav,
  } from "../components";
const Collection = () => {
  return (
    <div>
       <Nav />
      <h1> Collection </h1>
    </div>
  );
};
const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/collection" component={Collection} /> */}

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;

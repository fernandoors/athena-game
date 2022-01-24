import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import LivingRoom from "./pages/LivingRoom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/living-room/:room">
          <LivingRoom />
        </Route>
      </Switch>
    </Router>
  )
}

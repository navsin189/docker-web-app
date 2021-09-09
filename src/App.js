import "./styles.css";
import HomePage from "./components/core/Homepage";
import NavBar from "./components/core/navbar";
import Footer from "./components/core/footer";
import Login from "./components/core/login";
import SignUp from "./components/core/signup";
import Service from './components/service/services'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Docker() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

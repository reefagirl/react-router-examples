import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Brand from "./Components/Brand";
import Error from "./Components/Error";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-214738679-2 ", {
      gaOptions: { cookieFlags: "SameSite=None;Secure" },
    });
    console.log("Send to GA");
    //To record page view
    ReactGa.pageview("/");
  }, []);

  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
          <Route path="/">Please select brand...</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

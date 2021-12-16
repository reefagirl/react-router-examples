import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Brand from "./Components/Brand";
import Error from "./Components/Error";
//import ReactGa from "react-ga";
import GA4React from "ga-4-react";

function App() {
  useEffect(() => {
    GA4React.initialize("G-0HXM1DC6HY", {
      gaOptions: { cookieFlags: "SameSite=None;Secure" },
    });
    // const ga4react = new GA4React("G-0HXM1DC6HY", {
    //   cookie_flags: "max-age=7200;SameSite=None;Secure",
    // });
    // ga4react.initialize().then(
    //   (ga4) => {
    //     ga4.pageview("/");
    //     ga4.gtag("event", "pageview", "/"); // or your custom gtag event
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // );
    console.log("Send to GA4");
    //To record page view
    GA4React.pageview("/");
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

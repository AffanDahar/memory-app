import React from "react";
import { Container } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetail from "./components/PostDetail/PostDetail";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
        <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetail} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

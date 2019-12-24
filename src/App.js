import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import * as ROUTES from './constants/routes';

import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import GnaPage from "./components/Gna";
import TaoqiuPage from "./components/Taoqiu";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://brightonzhang.com/">
        Brighton Zhang
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container maxWidth="sm">
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.GNA} component={GnaPage} />
        <Route exact path={ROUTES.TAOQIU} component={TaoqiuPage} />
        </Container>
        <Copyright />
      </div>
    </Router>
  );
}

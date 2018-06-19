import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { MovieDetail } from "./movie/MovieDetail";
import { ErrorBoundary } from "./common/ErrorBoundary";

const App = () =>
    (<ErrorBoundary>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail' component={MovieDetail} />
            </Switch>
        </Router>
    </ErrorBoundary>);

export default App;




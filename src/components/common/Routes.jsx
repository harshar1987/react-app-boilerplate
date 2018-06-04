import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";
import {MovieDetail} from "../movie/MovieDetail";

export const routes = <div>
    <Route exact path='/' component={Home} />
    <Route path='/detail' component={MovieDetail} />
</div>;


import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import { HomePage } from './Home';
import { DetailPage } from './Detail';
import { BookingPage } from './Booking';

export const Routes = () =>(
    <Switch>
        <Route path="/booking/:id" exact component={ BookingPage }></Route>
        <Route path="/detail/:id"  exact component={ DetailPage }></Route>
        <Route path="/" exact component={ HomePage}></Route>
    </Switch>
)
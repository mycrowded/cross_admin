import * as React from "react";
import { Route } from 'react-router-dom';
import Map from './map';

export default [
    <Route exact path="/map" component={Map} />,
];
import * as React from "react";
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import logo from "./res/logoRed.png";


export default () => (

    <Card>
        <CardActionArea>
            <CardMedia style = {{justifyContent: "center", display: "flex"}} >
                <img src={logo}  />
            </CardMedia>
            <CardContent>Welcome to the CROSS administration</CardContent>
        </CardActionArea>
    </Card>
);
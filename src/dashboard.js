import * as React from "react";
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import logo from "./res/logoRed.png";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.paper}>
                        <CardActionArea>
                            <CardMedia style={{ justifyContent: "center", display: "flex" }} >
                                <img src={logo} />
                            </CardMedia>
                            <CardContent>Welcome to the CROSS administration</CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                {/* <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid> */}
            </Grid>
        </div>

    );
};





import * as React from 'react';
import { Login } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import loginImage from '../res/background.jpg';

const styles = ({
    card: {
        padding: '15px 0 15px 0',
    },

    icon: { background: '#b43f3f' },
});


const LoginPage = props => (

    <Login
        backgroundImage={loginImage}
        {...props}
    />

);
export default withStyles(styles)(LoginPage);
import React from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles(_ => ({
    body: {
        height: '100vh',
        width: '100%'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column'
    }
  }));

function BasicTextFields() {
    const classes = useStyles();
    return (
        <Box className={classes.body}>
            <Box
                className={classes.box}
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField className={classes.textField} id="outlined-basic" label="ID" variant="outlined" />
                <Button
                    onClick={() => {
                        fetch('http://localhost:3000/api/auth/login?q=8000000');
                        window.location.href = "http://localhost:3000";
                    }}
>
                    LOG IN
                </Button>
            </Box>
        </Box>
    );
  }

const Login = () => {
   return BasicTextFields();
}

export default Login;
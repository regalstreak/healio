import React from 'react';
import '../library/res/css/Login.css'
import loginImage from "../library/res/images/login.svg"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface ILoginProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default (props: ILoginProps) => {

    const classes = useStyles();

    return (
        <div>
            <div className='logo-login'>healio</div>

            <TextField
                label="email"
            />
            <TextField
                label="password"
                type="password"
            />

            <img className='login-image' src={loginImage} alt="" />
        </div>
    )
}

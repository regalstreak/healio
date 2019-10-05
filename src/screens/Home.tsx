import React from 'react';
import '../library/res/css/Home.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            borderRadius: 50,
            background: 'red',
            width: 200,
            height: 200
        },
        input: {
            display: 'none',
        },
    }),
);


interface IHomeProps {

}

export default (props: IHomeProps) => {

    const classes = useStyles();

    return (
        <div>
            <div>Hello Home</div>
            <Button variant="outlined"
                className={'test'}
                color='primary'
                >
                dd
            </Button>

        </div>
    )
}

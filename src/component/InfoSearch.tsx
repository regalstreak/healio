import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface INewComponentProps {

}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
		},
		input: {
			display: 'none',
		},
	}),
);

export default (props: INewComponentProps) => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h3" component="h2" gutterBottom style={{ textAlign: 'center' }}>
				Title
      </Typography>
			<div style={{ display: 'flex' }}>
				<div style={{ maxWidth: '70%' }}>
					<Typography variant="body1" gutterBottom style={{ margin: '5%' }}>
						body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
						unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
						dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
						body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
						unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
						dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      		</Typography>
					<Typography variant="body1" gutterBottom style={{ marginLeft: '5%', maxWidth: '50%' }}>
						Researcher Name: Somesh Koli
      		</Typography>
					<Typography variant="body1" gutterBottom style={{ marginLeft: '5%', maxWidth: '50%' }}>
						Dataset Size: 10,000
      		</Typography>
					<Typography variant="body1" gutterBottom style={{ marginLeft: '5%', maxWidth: '50%' }}>
						Cost: 5000$
      		</Typography>
				</div>
				<img src='https://via.placeholder.com/400' style={{ height: 400, width: 400 }} />
			</div>
			<div style={{ width: '100vw', textAlign: 'center' }}>
				<Button variant="contained" color="primary" className={classes.button}>
					Primary
      </Button>
			</div>
		</div>
	)
}

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

interface INewComponentProps {

}

export default (props: INewComponentProps) => {
	const classes = useStyles();
	const [numInputs, setNumInputs] = useState(1);
	const [fields, setFields] = useState(['']);
	const [value, setValues] = useState(['']);
	let inputList: any = [];
	let indiInput = (index: number) => (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<TextField
				id="standard-name"
				label='Key'
				className={classes.textField}
				value={fields[index]}
				// @ts-ignore: Unreachable code error
				onChange={(text: any) => {
					text.persist();
					setFields((a: any) => {
						a = a.map((b: any, i: any) => {
							if (i == index) {
								console.log(text.target);
								return text.target.value;
							} else {
								return b;
							}
						});
						return a;
					});
				}}
				margin="normal"
			/>
			:
				<TextField
				id="standard-name"
				label='Value'
				className={classes.textField}
				value={value[index]}
				// @ts-ignore: Unreachable code error
				onChange={(text: any) => {
					text.persist();
					setValues((a: any) => {
						a = a.map((b: any, i: any) => {
							if (i == index) {
								return text.target.value;
							} else {
								return b;
							}
						});
						return a;
					});
				}}
				margin="normal"
			/>
		</div>
	);
	for (let i = 0; i < numInputs; i++) {
		inputList.push(indiInput(i));
	}
	return (
		<div className={classes.outer}>
			<form className={classes.container} noValidate autoComplete="off">
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{inputList}
				</div>
			</form>
			<div style={{ textAlign: 'center' }}>
				<Fab size="small" aria-label="add" className={classes.blueButton} onClick={() => {
					setNumInputs(num => num + 1);
					setFields(allfields => [...allfields, '']);
					setValues(allValues => [...allValues, '']);
				}}>
					<AddIcon />
				</Fab>
			</div>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		textField: {
			width: '20vw'
		},
		dense: {
			marginTop: 19,
		},
		outer: {
			width: '40vw',
			marginLeft: '30vw'
		},
		blueButton: {
			background: '#2A64D6',
			color: 'white'
		}
	}),
);
import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import addResearch from '../library/util/addResearch';
import getWeb3 from '../library/Web3/getWeb3';

interface INewComponentProps {

}

export default (props: INewComponentProps) => {
	const classes = useStyles();
	const [numInputs, setNumInputs] = useState(1);
	const [fields, setFields] = useState(['']);
	const [value, setValues] = useState(['']);
	let inputList: any = [];
	const web3: any = useRef();
	const account: any = useRef();
	useEffect(() => {
		const run = async () => {
			web3.current = await getWeb3();
			const accounts = await web3.current.eth.getAccounts();
			account.current = accounts[0];
			console.log(account.current);
		}
		run();
	}, []);
	let indiInput = (index: number) => (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<TextField
				id="standard-name"
				label='Key'
				className={classes.textField}
				value={fields[index]}
				placeholder='Add Field'
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
				placeholder='Add Value'
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
			<Button variant="contained" color="default" className={classes.button} onClick={() => {
				addResearch('Name', 'ResearcherName', 'Cancer', account.current);
			}}>
				Submit
      </Button>
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
		},
		button: {
			margin: theme.spacing(1),
		},
		input: {
			display: 'none',
		},
	}),
);
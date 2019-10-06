import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ResearchCard from './ResearchCard';
import Grid from '@material-ui/core/Grid';
import getResearch from '../library/util/getResearch';

interface INewComponentProps {

}

export default (props: INewComponentProps) => {
	const classes = useStyles();
	const [researchList, setResearchList] = useState([]);
	const [allResearchList, setallResearchList] = useState([]);
	useEffect(() => {
		getResearch()
			.then((allResearch: any) => {
				console.log(allResearch);
				setallResearchList(allResearch);
			})
			.catch(console.log);
	}, []);
	let indivusualResearch = (index: number) => (
		<Grid
			container
			spacing={0}
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item xs>
				<ResearchCard
					name={allResearchList[index]['0']}
					researcherName={allResearchList[index]['1']}
					field={allResearchList[index]['2']}
					cost={allResearchList[index]['3']}
					noOfResults={allResearchList[index]['4']}
				/>
			</Grid>
		</Grid>
	);
	useEffect(() => {
		if (allResearchList) {
			let researchListabc: any = allResearchList.map((res, i) => {
				return indivusualResearch(i);
			});
			setResearchList(researchListabc);
		}
	}, [allResearchList]);
	return (
		<div className={classes.outerouter}>
			<div className={classes.outer}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
					/>
				</div>
			</div>
			{researchList}
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
	outer: {
		backgroundColor: 'white',
		marginLeft: '3%',
		marginRight: '50%'
	},
	outerouter: {

	}
}));
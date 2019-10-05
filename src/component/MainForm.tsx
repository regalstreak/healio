import React from 'react';
import FormBuilder from './FormBuilder';
import Typography from '@material-ui/core/Typography';

interface INewComponentProps {

}

export default (props: INewComponentProps) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Typography variant="h3" gutterBottom>
				Form
      </Typography>
			<FormBuilder />
		</div>
	)
}

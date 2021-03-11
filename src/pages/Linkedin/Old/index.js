import React from 'react';
import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Button } from '@material-ui/core';

function Old() {
	let history = useHistory();

	const { values, getFieldProps } = useFormik({
		initialValues: {
			cpfCnpj: '',
		},
	});

	return (
		<Grid container justify='center' alignItems='center'>
			<TextField select fullWidth label='Selecione...' {...getFieldProps('cpfCnpj')} style={{ marginBottom: 50 }}>
				<MenuItem value={0}>CPF</MenuItem>
				<MenuItem value={1}>CNPJ</MenuItem>
			</TextField>
			{values.cpfCnpj === 0 ? (
				<>
					<TextField label='CPF' fullWidth variant='outlined' margin='dense' />
				</>
			) : (
				<>
					<TextField label='CNPJ' fullWidth variant='outlined' margin='dense' />
				</>
			)}
			<Button size='small' onClick={() => history.push('/new')} variant='outlined' style={{ marginTop: 50 }}>
				NON UX
			</Button>
		</Grid>
	);
}

export default Old;

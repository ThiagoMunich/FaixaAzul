import React from 'react';

import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function New() {
	const history = useHistory();

	const removerFormatacaoCPF = cpf => {
		if (cpf !== null && cpf !== undefined) return cpf.replace(/\D/g, '');
		return '';
	};

	const { values, getFieldProps } = useFormik({
		initialValues: {
			cpfCnpj: '',
		},
	});

	return (
		<Grid container justify='center' alignItems='center'>
			<NumberFormat
				type='tel'
				label={
					removerFormatacaoCPF(values.cpfCnpj).length < 11
						? 'CPF / CNPJ'
						: removerFormatacaoCPF(values.cpfCnpj).length === 11
						? 'CPF'
						: 'CNPJ'
				}
				format={removerFormatacaoCPF(values.cpfCnpj).length <= 11 ? '###.###.###-###' : '##.###.###/####-##'}
				fullWidth
				margin='dense'
				variant='outlined'
				customInput={TextField}
				inputMode='numeric'
				{...getFieldProps('cpfCnpj')}
			/>
			<Button size='small' onClick={() => history.push('/old')} variant='outlined' style={{ marginTop: 50 }}>
				UX
			</Button>
		</Grid>
	);
}

export default New;

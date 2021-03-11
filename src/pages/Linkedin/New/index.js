import React from 'react';

import { useFormik } from 'formik';

import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function New() {
	const removerFormatacaoCPF = cpf => {
		if (cpf !== null && cpf !== undefined) return cpf.replace(/\D/g, '');
		return '';
	};

	const { values, getFieldProps } = useFormik({
		initialValues: {
			cpfCnpj: '',
		},
	});

	console.log(removerFormatacaoCPF(values.cpfCnpj).length);

	return (
		<Grid container justify='center' alignItems='center'>
			<NumberFormat
				label={
					removerFormatacaoCPF(values.cpfCnpj).length < 11
						? 'CPF / CNPJ'
						: removerFormatacaoCPF(values.cpfCnpj).length === 11
						? 'CPF'
						: 'CNPJ'
				}
				format={removerFormatacaoCPF(values.cpfCnpj).length <= 11 ? '###.###.###-###' : '##.###.###/####-##'}
				fullWidth
				variant='outlined'
				margin='dense'
				customInput={TextField}
				{...getFieldProps('cpfCnpj')}
			/>
		</Grid>
	);
}

export default New;

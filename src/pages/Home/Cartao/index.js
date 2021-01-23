import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Countdown from 'react-countdown';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import SportsMotorsportsOutlinedIcon from '@material-ui/icons/SportsMotorsportsOutlined';

import useMain from '../../../hooks/useMain';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 12,
		fontWeight: 700,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function Cartao({ veiculo }) {
	const classes = useStyles();

	const { saldo, setSaldo } = useMain();

	const [horarioEstacionamento, setHorarioEstacionamento] = useState();

	const handleEstacionar = veiculoParaEstacionar => {
		setSaldo({ saldo: saldo.saldo - 3.0 });
		veiculoParaEstacionar.estacionado = true;
		setHorarioEstacionamento(Date.now());
	};

	return (
		<Card className={classes.root} elevation={5}>
			<CardContent>
				<Typography variant='overline' className={classes.title}>
					{veiculo.nome}
				</Typography>
				<Divider variant='fullWidth' />
				<div
					style={{
						display: 'flex',
						alignContent: 'center',
						justifyContent: 'space-between',
						padding: 5,
						marginTop: 10,
					}}
				>
					<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
						{veiculo.tipo === 1 ? (
							<DirectionsCarOutlinedIcon style={{ marginRight: 10 }} />
						) : veiculo.tipo === 2 ? (
							<LocalShippingOutlinedIcon style={{ marginRight: 10 }} />
						) : (
							<SportsMotorsportsOutlinedIcon style={{ marginRight: 10 }} />
						)}
						<Typography>{veiculo.placa.toUpperCase()}</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<Typography variant='caption'>+2 bônus!</Typography>
						<CardGiftcardOutlinedIcon color='secondary' />
					</div>
				</div>
			</CardContent>
			<CardActions>
				{veiculo.estacionado ? (
					<>
						<Grid container justify='space-between' style={{ padding: 10 }}>
							<Typography variant='caption'>Veiculo estacionado!</Typography>
							<Countdown date={horarioEstacionamento + 3600000} />
						</Grid>
					</>
				) : saldo.saldo < 4 ? (
					<Button variant='outlined' fullWidth size='small' color='primary' disabled>
						Saldo insuficiente
					</Button>
				) : (
					<Button variant='outlined' fullWidth size='small' color='primary' onClick={() => handleEstacionar(veiculo)}>
						Estacionar
					</Button>
				)}
			</CardActions>
		</Card>
	);
}

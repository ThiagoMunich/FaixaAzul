import React, { useState } from 'react';

import CountUp from 'react-countup';

import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import Cartao from './Cartao';
import ModalComprarRotativo from './ModalComprarRotativo';
import ModalCadastrarVeiculo from './ModalCadastrarVeiculo';

import { useMain } from '../../hooks/useMain';

function Home() {
	const { saldo, veiculos, setVeiculos } = useMain();

	const [abrirCadastrarVeiculo, setAbrirCadastrarVeiculo] = useState(false);
	const [abrirComprarRotativo, setAbrirComprarRotativo] = useState(false);

	const modalCadastrarVeiculo = () => {
		setAbrirCadastrarVeiculo(!abrirCadastrarVeiculo);
	};

	const modalComprarRotativo = () => {
		setAbrirComprarRotativo(!abrirComprarRotativo);
	};

	const cadastrarVeiculo = novoVeiculo => {
		setVeiculos([...veiculos, novoVeiculo]);
	};

	return (
		<>
			{saldo.saldo === 0 ? (
				<>
					<Grid container justify='center'>
						<Alert severity='warning' variant='outlined' style={{ marginTop: '5vh', width: 300 }} color='error'>
							<AlertTitle>
								<Typography variant='overline'>Você não possui saldo</Typography>
							</AlertTitle>
							<Typography variant='body2'>
								<strong>Dica:</strong> Use o carrinho abaixo!
							</Typography>
						</Alert>
					</Grid>
					<Grid container justify='center'>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
							<IconButton onClick={modalComprarRotativo}>
								<AddShoppingCartIcon color='primary' />
							</IconButton>
							<Typography variant='body2'>Comprar rotativos</Typography>
						</div>
					</Grid>
				</>
			) : (
				<Grid container justify='space-between' alignContent='center' alignItems='center'>
					<Grid item>
						<div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
							<Typography variant='h6' style={{ marginRight: 10 }}>
								Seu saldo: 
								<CountUp duration={2} end={saldo.saldo} decimals={2} decimal=',' separator='.' prefix='R$ ' />
							</Typography>
						</div>
					</Grid>
					<Grid item>
						<IconButton onClick={modalComprarRotativo}>
							<AddShoppingCartIcon color='primary' />
						</IconButton>
					</Grid>
				</Grid>
			)}

			{saldo.saldo > 0 && (
				<>
					{veiculos.length !== 0 ? (
						<>
							<Typography variant='h5' style={{ marginTop: 60 }}>
								Veículos cadastrados
							</Typography>
							<Grid container style={{ marginTop: 20 }}>
								{veiculos.map((veiculo, index) => (
									<div key={index} style={{ width: '100%', marginBottom: 20 }}>
										<Cartao veiculo={veiculo} />
									</div>
								))}
							</Grid>
						</>
					) : (
						<Grid container justify='center'>
							<Alert severity='warning' variant='outlined' style={{ marginTop: '10vh', width: 300 }} color='error'>
								<AlertTitle>
									<Typography variant='overline'>Nenhum veículo encontrado</Typography>
								</AlertTitle>
								<Typography variant='body2'>
									<strong>Dica:</strong> Use o icone abaixo!
								</Typography>
							</Alert>
						</Grid>
					)}

					<Grid container justify='center'>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
							<IconButton onClick={modalCadastrarVeiculo}>
								<AddCircleOutlineOutlinedIcon color='primary' />
							</IconButton>
							<Typography variant='body2'>Cadastrar veículo</Typography>
						</div>
					</Grid>
				</>
			)}

			<ModalComprarRotativo abrir={abrirComprarRotativo} fechar={modalComprarRotativo} veiculos={veiculos} />
			<ModalCadastrarVeiculo
				cadastrar={cadastrarVeiculo}
				abrir={abrirCadastrarVeiculo}
				fechar={modalCadastrarVeiculo}
			/>
		</>
	);
}

export default Home;

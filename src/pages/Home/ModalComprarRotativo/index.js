import React, { useState } from 'react';

import { Chip, Paper, Typography } from '@material-ui/core';
import { useMain } from '../../../hooks/useMain';
import { Dialog, DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core';

function ModalComprarRotativo({ abrir, fechar }) {
	const { saldo, setSaldo } = useMain();

	const [saldoTemporario, setSaldoTemporario] = useState(0);

	return (
		<>
			<Dialog open={abrir} onClose={fechar} fullWidth>
				<DialogTitle>
					<Typography variant='h5'>Saldo atual: R${saldo.saldo}</Typography>
				</DialogTitle>
				<form>
					<DialogContent>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Typography variant='overline'>1 rotativo</Typography>
							<Chip
								label='R$ 4,00'
								variant='outlined'
								size='small'
								clickable
								style={{ color: '#7DB61C' }}
								onClick={() => setSaldoTemporario(4.0)}
							/>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Typography variant='overline'>5 rotativos</Typography>
							<Chip
								label='R$ 22,00'
								variant='outlined'
								size='small'
								clickable
								style={{ color: '#7DB61C' }}
								onClick={() => setSaldoTemporario(22.0)}
							/>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
							<Typography variant='overline'>10 rotativos</Typography>
							<Chip
								label='R$ 44,00'
								variant='outlined'
								size='small'
								clickable
								style={{ color: '#7DB61C' }}
								onClick={() => setSaldoTemporario(44.0)}
							/>
						</div>
						<Typography variant='caption' align='justify'>
							OBS: Nehum valor real será cobrado
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button size='small' color='secondary'>
							Cancelar
						</Button>
						<Button
							size='small'
							color='primary'
							disabled={saldoTemporario === 0}
							onClick={() => {
								setSaldo({ saldo: saldoTemporario + saldo.saldo });
								setTimeout(fechar, 5);
							}}
						>
							Comprar
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
}

export default ModalComprarRotativo;

import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import Cartao from './Cartao'
import ModalCadastrarVeiculo from './ModalCadastrarVeiculo'

function Home() {

  const [abrirCadastrarVeiculo, setAbrirCadastrarVeiculo] = useState(false)

  const modalCadastrarVeiculo = () => {
    setAbrirCadastrarVeiculo(!abrirCadastrarVeiculo)
  }

  return (
    <>
      <Grid container justify='space-between' alignContent='center' alignItems='center'>
        <Grid item>
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>

            <Typography variant='h5' style={{ marginRight: 10 }}>
              Saldo:
        </Typography>
            <Typography variant='body2'>
              R$ 25,00
        </Typography>
          </div>
        </Grid>
        <Grid item>
          <IconButton>
            <AddShoppingCartIcon color='primary' />
          </IconButton>
        </Grid>
      </Grid>
      <Paper elevation={5} style={{ marginTop: 20, padding: 5 }}>
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
          <Typography variant='body2'>
            Você tem 1 nova mensagem
        </Typography>
          <NotificationsNoneOutlinedIcon fontSize='small' color='secondary' />
        </div>
      </Paper>
      <Typography variant='h5' style={{ marginTop: 60 }}>
        Veículos cadastrados
    </Typography>
      <Grid container style={{ marginTop: 20 }}>
        <Cartao />
      </Grid>
      <Grid container justify='center'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 70 }}>
          <IconButton onClick={modalCadastrarVeiculo}>
            <AddCircleOutlineOutlinedIcon color='primary' />
          </IconButton>
          <Typography variant='body2'>
            Cadastrar veículo
      </Typography>

        </div>
      </Grid>
      <ModalCadastrarVeiculo abrir={abrirCadastrarVeiculo} fechar={modalCadastrarVeiculo} />
    </>
  );
}

export default Home;

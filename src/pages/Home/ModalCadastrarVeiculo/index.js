import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import ControleFormulario from '../../../components/ControleFormulario'

function ModalCadastrarVeiculo({ abrir, fechar }) {
  return (
    <>
      <Dialog open={abrir} onClose={fechar}>
        <DialogTitle>
          <Typography variant='h5'>
            Cadastrar veículo
          </Typography>
        </DialogTitle>
        <DialogContent>
          <ControleFormulario label='Placa'>
            <TextField variant='outlined' margin='dense' />
          </ControleFormulario>
          <ControleFormulario label='Nome/apelido do veículo'>
            <TextField variant='outlined' margin='dense' />
          </ControleFormulario>
        </DialogContent>
        <DialogActions>
          <Button size='small'>
            Cancelar
          </Button>
          <Button size='small'>
            Salvar
          </Button>
        </DialogActions>

      </Dialog>

    </>
  )
}

export default ModalCadastrarVeiculo;
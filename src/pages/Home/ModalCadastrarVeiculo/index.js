import React from 'react';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import ControleFormulario from '../../../components/ControleFormulario'

function ModalCadastrarVeiculo() {
  return (
    <>
      <Dialog>
        <DialogTitle>
          Cadastrar veículo
        </DialogTitle>
        <DialogContent>
          <ControleFormulario label='Placa'>
            <TextField variant='outlined' margin='dense' />
          </ControleFormulario>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default ModalCadastrarVeiculo;
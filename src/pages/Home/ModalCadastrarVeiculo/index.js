import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import ControleFormulario from '../../../components/ControleFormulario'

import { useFormik } from 'formik'

function ModalCadastrarVeiculo({ abrir, fechar }) {

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      placa: '',
      nome: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <>
      <Dialog open={abrir} onClose={fechar}>
        <DialogTitle>
          <Typography variant='h5'>
            Cadastrar veículo
          </Typography>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <ControleFormulario label='Placa'>
              <TextField variant='outlined' margin='dense' {...getFieldProps('placa')} />
            </ControleFormulario>
            <br />
            <br />
            <ControleFormulario label='Nome/apelido do veículo'>
              <TextField variant='outlined' margin='dense' {...getFieldProps('nome')} />
            </ControleFormulario>
          </DialogContent>
          <DialogActions>
            <Button size='small' color='secondary' onClick={fechar}>
              Cancelar
          </Button>
            <Button type='submit' size='small' color='primary'>
              Salvar
          </Button>
          </DialogActions>
        </form>
      </Dialog>

    </>
  )
}

export default ModalCadastrarVeiculo;
import React, { useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { FormControl, FormGroup } from '@material-ui/core'

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';

import { useFormik } from 'formik'

function ModalCadastrarVeiculo({ abrir, fechar, cadastrar }) {

  const [carro, setCarro] = useState(true)
  const [moto, setMoto] = useState(false)
  const [caminhao, setCaminhao] = useState(false)

  const [tipoVeiculo, setTipoVeiculo] = useState('Automóvel')

  const handleCarro = () => {
    setCarro(true)
    setTipoVeiculo('Automóvel')
    setMoto(false)
    setCaminhao(false)
  }

  const handleMoto = () => {
    setMoto(true)
    setTipoVeiculo('Motofrete C/D')
    setCarro(false)
    setCaminhao(false)
  }

  const handleCaminhao = () => {
    setCaminhao(true)
    setTipoVeiculo('Carga e descarga')
    setCarro(false)
    setMoto(false)
  }

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      id: 2,
      placa: '',
      nome: ''
    },
    onSubmit: values => {
      cadastrar(values)
    }
  })

  return (
    <>
      <Dialog open={abrir} onClose={fechar}>
        <DialogTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonGroup fullWidth>
              <Button onClick={handleCarro}><DriveEtaIcon /></Button>
              <Button onClick={handleCaminhao}><LocalShippingIcon /></Button>
              <Button onClick={handleMoto}><SportsMotorsportsIcon /></Button>
            </ButtonGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Typography variant='overline'>
              {tipoVeiculo}
            </Typography>
          </div>

        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth>
              <FormGroup>
                <TextField variant='outlined' margin='dense' label='Placa' autoComplete='off' {...getFieldProps('placa')} />
              </FormGroup>
            </FormControl>
            <br />
            <FormControl fullWidth>
              <FormGroup>
                <TextField variant='outlined' margin='dense' label='Confirme a placa' autoComplete='off' {...getFieldProps('placa')} />
              </FormGroup>
            </FormControl>
            <FormControl fullWidth>
              <FormGroup>
                <TextField variant='outlined' margin='dense' label='Nome' autoComplete='off' {...getFieldProps('nome')} />
              </FormGroup>
            </FormControl>
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
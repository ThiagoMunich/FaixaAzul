import React from 'react';

import { Chip, Paper, Typography } from '@material-ui/core'
import { Dialog, DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import SportsMotorsportsOutlinedIcon from '@material-ui/icons/SportsMotorsportsOutlined';

function ModalComprarRotativo({ abrir, fechar, veiculos }) {
  return (
    <>
      <Dialog open={abrir} onClose={fechar} fullWidth>
        <DialogTitle>
          <Typography variant='h5'>Seus veículos</Typography>
          {/* <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}> */}
          {veiculos.map((veiculo, index) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, marginRight: 10 }}>
              <Chip key={index} label={veiculo.nome} variant='outlined' icon={
                veiculo.tipo === 1 ? <DirectionsCarOutlinedIcon /> :
                  veiculo.tipo === 2 ? <LocalShippingOutlinedIcon /> :
                    <SportsMotorsportsOutlinedIcon />
              }
                size='small'
              />
            </div>
          ))}
          {/* </div> */}
        </DialogTitle>
        <form>
          <DialogContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='overline'>
                1 rotativo
                </Typography>
              <Chip label="R$ 4,40" variant='outlined' size='small' clickable style={{ color: '#7DB61C' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='overline'>
                5 rotativos
                </Typography>
              <Chip label="R$ 22,00" variant='outlined' size='small' clickable style={{ color: '#7DB61C' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='overline'>
                10 rotativos
                </Typography>
              <Chip label="R$ 44,00" variant='outlined' size='small' clickable style={{ color: '#7DB61C' }} />
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default ModalComprarRotativo;
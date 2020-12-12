import React from 'react';

import { Dialog, DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core'

function ModalComprarRotativo({ abrir, fechar }) {
  return (
    <>
      <Dialog open={abrir} onClose={fechar}>
        <DialogTitle>
          Comprar rotativo
        </DialogTitle>
        <form>
          <DialogContent>
            Compre aqui seu rotativo
          </DialogContent>
          <DialogActions>
            <Button size='small' color='secondary' onClick={fechar}>
              Cancelar
          </Button>
            <Button type='submit' size='small' color='primary'>
              Comprar
          </Button>
          </DialogActions>
        </form>
      </Dialog>

    </>
  )
}

export default ModalComprarRotativo;
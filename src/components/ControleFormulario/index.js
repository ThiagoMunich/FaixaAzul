import React from 'react';

import { FormControl, FormLabel, FormGroup } from '@material-ui/core'

function ControleFormulario({ children, label }) {
  return (
    <FormControl>
      <FormLabel>
        {label}
      </FormLabel>
      <FormGroup>
        {children}
      </FormGroup>
    </FormControl>
  )
}

export default ControleFormulario;
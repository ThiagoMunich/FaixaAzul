import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import Divider from "@material-ui/core/Divider"
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import { Button, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontWeight: 700
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cartao() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Typography variant='overline' className={classes.title}>
            Renault Sandero
        </Typography>
        <Divider variant='fullWidth'/>
        <div style={{display:'flex', alignContent:'center', justifyContent: 'space-between', padding: 5, marginTop: 10}}>
            <div style={{display:'flex', alignContent:'center', justifyContent: 'flex-start', marginTop: 10}}>
                <DirectionsCarOutlinedIcon style={{marginRight:10}}/>
                <Typography>
                    HNC2C28
                </Typography>
            </div>
            <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                <Typography variant='caption'>
                    +2 bônus!
                </Typography>
                <CardGiftcardOutlinedIcon color="secondary"/>
            </div>
        </div>

      </CardContent>
      <CardActions>
          <Button variant='outlined' fullWidth size='small' color='primary'>
              Estacionar
          </Button>
      </CardActions>
    </Card>
  );
}

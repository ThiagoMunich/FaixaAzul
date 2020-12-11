import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider"

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
        <Typography>
            HNC 1701
        </Typography>
        <Button variant='outlined' size='small'>
            +2 Bonus
        </Button>
        </div>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

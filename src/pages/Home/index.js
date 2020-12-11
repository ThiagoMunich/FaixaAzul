import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import Cartao from './Cartao'

function Home() {
  return (
    <>
    <Grid container justify='space-between' alignContent='center' alignItems='center'>
      <Grid item>
        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
          
        <Typography variant='h5' style={{marginRight:10}}>
          Saldo:
        </Typography>
        <Typography variant='body2'>
          R$ 25,00 
        </Typography>
        </div>
      </Grid>
      <Grid item>
        <IconButton>
          <AddShoppingCartIcon/>
        </IconButton>
      </Grid>
    </Grid>
    <Paper elevation={5} style={{marginTop: 20, padding:5}}>
      <div style={{display: 'flex', alignContent:'center', justifyContent:'space-between'}}>
        <Typography variant='body2'>
          Você tem 1 nova mensagem
        </Typography>
        <NotificationsNoneOutlinedIcon fontSize='small'/>
      </div>
    </Paper>
    <Typography variant='h5' style={{marginTop: 30}}>
      Veículos cadastrados
    </Typography>
    <Grid container style={{marginTop:20}}>
      <Cartao/>
    </Grid>
   </> 
  );
}

export default Home;

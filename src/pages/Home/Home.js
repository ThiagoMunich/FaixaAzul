import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function Home() {
  return (
    <>
    <Grid container justify='space-between' alignContent='center' alignItems='center'>
      <Grid item>
        <Typography variant='h6'>
          Meu saldo:
        </Typography>
        <Typography variant='body2'>
          R$ 25,00 
        </Typography>
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
   </> 
  );
}

export default Home;

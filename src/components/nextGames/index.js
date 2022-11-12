import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import '@fontsource/inter'
import '@fontsource/roboto'

const buildText = (itemText, variant) => {
    return (
        <Typography
            variant={variant}
            noWrap
            component="div"
            href=""
            sx={{              
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: '700',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'                       
            }}
          >
            {itemText}
          </Typography>
    )
}

const NextGame = ({ games }) => {

  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [gamesHistory, setGamesHistory] = useState(games);
  
  const isIndexLessThanArrayLimit = (index) => {
    return ((gamesHistory.length === 0) || (index < 0))
  }

  const isIndexBiggerThanArrayLimit = (index) => {
    return ((gamesHistory.length === 0) || (index > (gamesHistory.length - 1)))
  }

  const changeGame = (index) => {
    if (!isIndexLessThanArrayLimit(currentGameIndex + index) 
        && !isIndexBiggerThanArrayLimit(currentGameIndex + index)) {
          setCurrentGameIndex(currentGameIndex + index)
    }
  }
  
  const appendLocalDateTimeAndCup = (game) => {
    return `${game.local} - ${game.dateTime} | ${game.cup}`
  }


  return(
    <Container maxWidth="xl" disableGutters sx={{ bgcolor: '#f5f5f5', mt: '4rem'}}>
      
      <Box >
        {buildText('Próximas partida', 'body2')}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {buildText(appendLocalDateTimeAndCup(gamesHistory[currentGameIndex]), 'body2')}
      </Box>
      <Grid container>
        <Grid item xs={1} sm={3} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
          <IconButton 
            onClick={() => changeGame(-1)}
            sx={{ p: 0 }}
          >
            <ArrowBackIosIcon fontSize='small'/>
          </IconButton>
        </Grid>
        <Grid item xs={4} sm={2} sx={{ display: 'flex' }}>
          {buildText(gamesHistory[currentGameIndex].principal, 'body2')}
        </Grid>
        <Grid item xs={2} sm={2} sx={{ display: 'flex', justifyContent: 'center'}}>
          {buildText(gamesHistory[currentGameIndex].principal_score, 'body2')}
          {buildText('X', 'body2')}
          {buildText(gamesHistory[currentGameIndex].visitor_score, 'body2')}
        </Grid>
        <Grid item xs={4} sm={2} sx={{ display: 'flex' }}>
          {buildText(gamesHistory[currentGameIndex].visitor, 'body2')}
        </Grid>
        <Grid item xs={1} sm={3} sx={{ display: 'flex', justifyContent: 'flex-start'}}>
          <IconButton 
            onClick={() => changeGame(1)} 
            sx={{ p: 0 }}
          >
            <ArrowForwardIosIcon fontSize='small' />
          </IconButton>          
        </Grid>
      </Grid>
    </Container>
     
  );
}

export default NextGame;
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MiranteLogo from '../../../resources/tigre-logo.svg'
import  '../style.css'
import { Grid } from '@mui/material';

const DesktopNavBar = ({ 
  leftMenuItems, 
  rightMenuItems, 
  buildMenuItem, 
  settings, 
  userMenuVisibility, 
  handleOpenUserMenu, 
  handleCloseUserMenu,
  loggedUser 
}) => {     

    return(
      <Grid container sx={{ display: { xs: 'none', md: 'flex' }}}>
        <Grid item md={5}
            sx={{ display: 'flex', justifyContent: 'space-around' }}            
        >
          {leftMenuItems.map((page) => (
            <Button
              key={page}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              {buildMenuItem(page)}
            </Button>
          ))}
        </Grid>
        <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }} >
            <IconButton 
              // onClick={handleOpenUserMenu} 
              sx={{ p: 0, position: 'absolute', top: '4px' }}
            >              
              <img src={MiranteLogo} height={130} width={130}/>              
            </IconButton>
        </Grid>
        <Grid item md={5} sx={{display: 'flex' }}>
          <Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'space-around' }} >  
            {rightMenuItems.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {buildMenuItem(page)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }} >         
            <Tooltip title="Open settings" >
              <IconButton 
                onClick={handleOpenUserMenu}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={userMenuVisibility}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userMenuVisibility)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>     
        </Grid>
      </Grid>
    );
} 

export default DesktopNavBar
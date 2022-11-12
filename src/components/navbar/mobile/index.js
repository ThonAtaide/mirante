import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MiranteLogo from '../../../resources/tigre-logo.svg'
import  '../style.css'
import { Grid } from '@mui/material';

const MobileNavBar = ({
  menuItems,
  mobileMenuVisibility,
  handleOpenMobileMenu, 
  handleCloseMobileMenu, 
  userMenuVisibility, 
  handleOpenUserMenu, 
  handleCloseUserMenu,
  settings
}) => {

  return (
    <Grid container sx={{display: { xs: 'flex', md: 'none' } }}>
      <Grid item xs={5} sx={{display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMobileMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={mobileMenuVisibility}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(mobileMenuVisibility)}
          onClose={handleCloseMobileMenu}
          sx={{
            display: 'flex',
          }}
        >
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem} onClick={handleCloseMobileMenu}>
              <Typography textAlign="center">{menuItem}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      <Grid item xs={2}
        sx={{ 
          justifyContent: 'center',
          flexGrow: 1, 
          display: 'flex', 
        }}      
      >
        <IconButton sx={{ p: 0, position: 'absolute', top: '0.02rem'   }}>              
          <img src={MiranteLogo} height={100} width={100}/>              
        </IconButton>
      </Grid>
      
      <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }} >         
        <Tooltip title="Open settings" >
          <IconButton 
            onClick={handleOpenUserMenu} sx={{ p: 0 }}
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
            {settings.map((item) => (
              <MenuItem 
                key={item} 
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{item}</Typography>
              </MenuItem>
            ))}
          </Menu>
      </Grid>     
    </Grid>
  );
}

export default MobileNavBar;
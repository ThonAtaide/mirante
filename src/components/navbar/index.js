import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  './style.css'
import DesktopNavBar from './desktop';
import MobileNavBar from './mobile';
const settings = ['Perfil', 'Configurações', 'Sair'];
const menuItemsLeft = ['Notícias', 'Clube']
const menuItemsRight = ['Elenco', 'Contato']

function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = React.useState(null);
  const [userMenuVisibility, setUserMenuVisibility] = React.useState(null);
  const [loggedUser, setLoggedUser] = React.useState(null);

  const handleLogin = (user) => {
    setLoggedUser(user);
  }


  const handleLogout = () => {
    setLoggedUser(null);
  }

  const handleOpenMobileMenu = (event) => {
    setMobileMenuVisibility(event.currentTarget);
  };  

  const handleCloseMobileMenu = () => {
    setMobileMenuVisibility(null);
  };

  const handleOpenUserMenu = (event) => {
    setUserMenuVisibility(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuVisibility(null);
  };

  const buildUserSettingsMenu = () => {
    if (!loggedUser) {
      return ['Entrar', 'Sair']
    }
    return settings;
  }

  const buildMenuText = (itemText) => {
    return (
      <Typography
            variant="button"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'cursive',
              fontWeight: '600',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {itemText}
          </Typography>
    )
  }

  return (
    <>
      <AppBar position="fixed" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DesktopNavBar 
              leftMenuItems={menuItemsLeft} 
              rightMenuItems={menuItemsRight} 
              buildMenuItem={buildMenuText}
              loggedUser={loggedUser}
              userMenuVisibility={userMenuVisibility}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              settings={buildUserSettingsMenu()}
            />
            <MobileNavBar 
              menuItems={[...menuItemsLeft, ...menuItemsRight]}
              mobileMenuVisibility={mobileMenuVisibility}
              handleOpenMobileMenu={handleOpenMobileMenu}
              handleCloseMobileMenu={handleCloseMobileMenu}
              userMenuVisibility={userMenuVisibility}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              settings={buildUserSettingsMenu()}
            />          
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar/>
    </>
  );
}

export default Navbar;
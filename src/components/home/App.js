import logo from '../../logo.svg';
import Navbar from '../navbar';
import './App.css';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../../themes/theme";
import LoginPage from '../login';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NextGame from '../nextGames';
import { nextGames } from '../../utils/mocked-data'


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      {/* <div className="App"> */}      
      <Container maxWidth="xl" disableGutters sx={{ bgcolor: 'green', height: '100vh'}}>
        <Navbar />
        <NextGame games={nextGames}/>
        {/* <LoginPage /> */}

        
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      {/* </div> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;

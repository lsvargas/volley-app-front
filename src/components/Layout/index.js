import { createContext, useContext, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { amber, grey } from '@mui/material/colors';

import Navbar from '../Navbar';
import Footer from '../Footer';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const style = {
  boxStyle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'background.default',
    color: 'text.primary',
  }
};


function MyApp({ children }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={style.boxStyle}>
      <Box sx={{ width: '100%' }}>
        <Navbar theme={theme} colorMode={colorMode} />
        <Container>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === 'dark' && {
              main: amber[300],
            }),
          },
          ...(mode === 'dark' && {
            background: {
              default: '#252d3c',
              paper: '#252d3c',
            },
          }),
          text: {
            ...(mode === 'light'
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: '#fff',
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp children={children} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

import {
  AppBar,
  Button,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import defaultTheme from './themes/defaultTheme';
import './App.css';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>Hello</Toolbar>
      </AppBar>
      <Typography variant="h1">Variable Font</Typography>
      <Typography variant="h2">Variable Font</Typography>
      <Typography variant="h3">Variable Font</Typography>
      <Typography variant="h4">Variable Font</Typography>
      <Typography variant="h5">Variable Font</Typography>
      <Typography variant="h6">Variable Font</Typography>
      <Button variant="contained" color="primary">
        Hello
      </Button>
      <Button variant="contained" color="secondary">
        Hello
      </Button>
      <Button variant="contained" color="default">
        Hello
      </Button>

      <Button variant="outlined" color="primary">
        Hello
      </Button>
      <Button variant="outlined" color="secondary">
        Hello
      </Button>
      <Button variant="outlined" color="default">
        Hello
      </Button>

      <Paper>Hello</Paper>
    </ThemeProvider>
  );
}

export default App;

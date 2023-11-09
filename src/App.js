import './App.css';
import '@mantine/core/styles.css';
import Password from "./Components/Password";
import {MantineProvider, createTheme} from '@mantine/core';
import Alertt from "./Components/Alertt";
import Load from "./Components/Load";


const theme = createTheme({
    /** Your theme override here */
});

function App() {
  return (
      <MantineProvider theme={theme}>
          <Password/>
          <Load/>
          <Alertt/>
      </MantineProvider>
  );
}

export default App;

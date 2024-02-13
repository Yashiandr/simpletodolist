import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import './App.css'
import { ThemeProvider } from 'styled-components';
import TestButton from './components/TestButton/TestButton';
import { useDarkMode } from './components/useDarkMode';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light'? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme = {themeMode}>
      <>
      <GlobalStyles />
        <body className='App'>
          <TestButton theme={theme} themeToggler={themeToggler} />
        </body>
      </>
    </ThemeProvider>
  );
}

export default App;

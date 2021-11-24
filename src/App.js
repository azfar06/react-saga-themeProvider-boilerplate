import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "theme";
import { BrowserRouter } from 'react-router-dom'
import AppView from 'app/AppView';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <BrowserRouter>
          <AppView />
        </BrowserRouter>
        <button onClick={() => themeToggler()}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;

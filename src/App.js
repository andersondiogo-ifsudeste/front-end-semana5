import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import styled from "styled-components";
import './App.css';

function App() {
  const [ theme, setTheme ] = useState('light');
  const toggleTheme = () => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "ligth");
      setTheme("ligth");
    } else {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <center>

        <form class="container">
  <div class="container">
  <img src="carta.png" alt="boletim informativo"></img>
    <h1>Inscreva-se para o meu boletim informativo</h1>
   

    <input type="text" placeholder="meu@email.com.br" name="email" required>
      </input>

    <div class="clearfix">
      
      <button type="submit" class="signupbtn">inscrever-se</button>
      <ButtonChange onClick={toggleTheme}> Mudar Tema</ButtonChange>
      </div>
      
    </div>
    
</form>
          
          </center>
      </Fragment>
    </ThemeProvider>
  );
}


const ButtonChange = styled.button`
  width: 150px;
  padding: 14px 20px;
  margin: 20px 0;
`;

export default App;
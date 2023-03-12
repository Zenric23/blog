import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import LoginModalProvider from './context/loginModalContext'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/userContext'

const theme = {
  colors: {
    line: '#6b7280',
    publish: '#2FCA5A',
    badge: '#d1d5db',
    hero: 'rgba(248, 151, 87, 0.15)'  
  },  
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.9;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <UserContextProvider>
          <LoginModalProvider>
            <App />
          </LoginModalProvider>
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

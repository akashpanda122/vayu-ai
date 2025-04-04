import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#2C3E50',
    secondary: '#3498DB',
    accent: '#E74C3C',
    background: '#ECF0F1',
    text: '#2C3E50'
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`

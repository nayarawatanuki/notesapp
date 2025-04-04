import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

// Estilos e tema
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';

// Tradução
import '@/utils/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
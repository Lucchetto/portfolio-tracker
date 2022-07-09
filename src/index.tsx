import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { appTheme } from './theme/Theme';

function getLibrary(provider?: any, connector?: AbstractConnector): any {
  return new ethers.providers.Web3Provider(provider);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

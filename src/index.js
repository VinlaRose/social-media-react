import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import App from './App';
import { AuthProvider } from './Authentication/AuthContext';


// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />

    </AuthProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>
);
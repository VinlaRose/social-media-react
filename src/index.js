import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import App from './App';
import { AuthProvider } from './Authentication/AuthContext';
import { PostDataProvider } from './Data/posts';



// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PostDataProvider>
    <AuthProvider>
     
      
      <App />

    
    </AuthProvider>
    </PostDataProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
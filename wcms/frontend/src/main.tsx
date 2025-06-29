import '@/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';

document.addEventListener('DOMContentLoaded', () => {
  const navbarEl = document.getElementById('navbar');
  if (navbarEl) {
    ReactDOM.createRoot(navbarEl).render(
      <React.StrictMode>
        <Navbar />
      </React.StrictMode>,
    );
  } else {
    console.error("Navbar element (#navbar) not found on DOMContentLoaded");
  }
});

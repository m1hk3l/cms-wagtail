import '@/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Footer } from '@/components/Footer'



document.addEventListener('DOMContentLoaded', () => {
  const navbarEl = document.getElementById('navbar');
  
  if (navbarEl) {
    try {
      const menuData = JSON.parse(navbarEl.dataset.menu || '[]');
      const siteName = navbarEl.getAttribute('data-site-name') || "Akvarellistuudio";
      ReactDOM.createRoot(navbarEl).render(
        <React.StrictMode>
          <Navbar menu={menuData} siteName={siteName}/>
        </React.StrictMode>,
      );
    } catch (error) {
      console.error("Failed to parse navbar data-menu:", error);
    }
  } else {
    console.error("Navbar element (#navbar) not found on DOMContentLoaded");
  }

  const footerEl = document.getElementById('footer');
  if (footerEl) {
    ReactDOM.createRoot(footerEl).render(
      <React.StrictMode>
        <Footer />
      </React.StrictMode>,
    );
  }
});

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ScrollToTop from './components/ScrollToTop';
import GetStarted from './pages/GetStarted';
import Testimonials from './pages/Testimonials';
import FAQ from './components/FAQ';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0a4b78',
      light: '#3c7ab0',
      dark: '#002546',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    h5: {
      color: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
  status: {
    danger: '#e53e3e',
  },
});

const App: React.FC = () => {
  useEffect(() => {
    emailjs.init("jnT6XaLdydE07qf8-");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/donate" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App; 
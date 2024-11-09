import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'CLEO in the News', path: '/news' },
    { text: 'Get Started', path: '/get-started' },
    { text: 'Contact Us', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1 }}>
        Skip to Content
      </Box>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'linear-gradient(to bottom, rgba(10, 75, 120, 0.9) 0%, rgba(10, 75, 120, 0) 100%)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          height: '100px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar 
          sx={{ 
            height: '100%',
            paddingTop: '10px', 
            paddingBottom: '10px',
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Box
              component="img"
              src="/images/logo.png" 
              alt="CLEO Initiative Logo" 
              sx={{
                height: '80px',
                width: 'auto',
                filter: `
                  drop-shadow(0 0 1px rgba(255, 255, 255, 0.8))
                  drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
                `,
                transition: 'all 0.4s ease',
                '&:hover': {
                  filter: `
                    drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))
                    drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
                  `,
                  transform: 'scale(1.03)',
                }
              }}
            />
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ transform: 'scale(1.2)' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, marginLeft: 'auto', paddingRight: '2rem' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    fontSize: '1.1rem',
                    padding: '8px 16px',
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '4px',
                      left: '16px',
                      right: '16px',
                      height: '2px',
                      backgroundColor: 'white',
                      opacity: location.pathname === item.path ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&::after': {
                        opacity: 0.7
                      }
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/cleoinitiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/cleoinitiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
              <Button
                color="inherit"
                component="a"
                href="https://www.gofundme.com/f/help-cleo-connect-seniors-to-digital-world"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: '8px 24px',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }
                }}
              >
                Donate
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #0a4b78 0%, #001529 100%)',
            color: 'white',
            width: 240
          }
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                padding: '12px 24px',
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/cleoinitiative/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/cleoinitiative/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
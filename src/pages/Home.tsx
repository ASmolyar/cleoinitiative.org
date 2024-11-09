import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  return (
    <>
      {/* Dark box behind header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Main content wrapper */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0a4b78 0%, #001529 100%)',
          overflowY: 'auto',
          pt: '100px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            minHeight: '100%',
            color: 'white',
          }}
        >
          <ParticleBackground />

          {/* Hero Section with Background Image */}
          <Box
            sx={{
              position: 'relative',
              minHeight: '80vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/home/home1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3,
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                zIndex: 0,
              }
            }}
          >
            <Container 
              maxWidth="lg" 
              sx={{ 
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                py: 8,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      textAlign: 'center',
                      mb: 4,
                      background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Empowering Seniors Through Technology
                  </Typography>

                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 6,
                      opacity: 0.9,
                      maxWidth: '800px',
                      margin: '0 auto',
                      lineHeight: 1.6,
                      textAlign: 'center',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      color: 'white',
                    }}
                  >
                    Technology is rapidly changing and it can be overwhelming for seniors who are not familiar with it.
                    Our mission is to establish a community around providing access to technology and improving the quality 
                    of life for seniors who lack digital literacy skills.
                  </Typography>
                </motion.div>

                <Box sx={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      component={Link}
                      to="/get-started"
                      size="large"
                      sx={{
                        mt: 4,
                        mb: 0,
                        px: 6,
                        py: 2,
                        borderRadius: '50px',
                        fontSize: '1.2rem',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.2)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Join CLEO Today
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* Content Cards Section */}
          <Container maxWidth="lg" sx={{ 
            py: 4,
            position: 'relative',
            zIndex: 1,
            width: '95%',
            mt: -8,
            mb: 12
          }}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%' }}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 8,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: '30px',
                      transition: 'all 0.4s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.12)',
                        boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 4 }}>
                      <Typography 
                        variant="h3" 
                        gutterBottom
                        sx={{
                          fontSize: { xs: '2rem', md: '2.5rem' },
                          fontWeight: 700,
                          lineHeight: 1.2,
                          mb: 3,
                          background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Join the CLEO initiative today!
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontSize: '1.1rem',
                          lineHeight: 1.7,
                          opacity: 0.9,
                          mb: 6
                        }}
                      >
                        The CLEO initiative has chapters all over the United States. Join us today and make your 
                        impact on the seniors in your community.
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 'auto' }}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="contained"
                          component={Link}
                          to="/get-started"
                          size="large"
                          sx={{
                            borderRadius: '50px',
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.25)',
                            }
                          }}
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%' }}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 8,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: '30px',
                      transition: 'all 0.4s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.12)',
                        boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 4 }}>
                      <Typography 
                        variant="h3" 
                        gutterBottom
                        sx={{
                          fontSize: { xs: '2rem', md: '2.5rem' },
                          fontWeight: 700,
                          lineHeight: 1.2,
                          mb: 3,
                          background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Want to see our projects?
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontSize: '1.1rem',
                          lineHeight: 1.7,
                          opacity: 0.9,
                          mb: 6
                        }}
                      >
                        Click below to see information about our chapters and learn more about our organization
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 'auto' }}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="contained"
                          component={Link}
                          to="/about"
                          size="large"
                          sx={{
                            borderRadius: '50px',
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.25)',
                            }
                          }}
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Container>

          {/* Bottom Image Section */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '400px',
              mt: -12,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/home/home2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                opacity: 0.3,
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                zIndex: 0,
              }
            }}
          >
            <Container 
              maxWidth="lg" 
              sx={{ 
                position: 'relative', 
                zIndex: 1, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component={Link}
                to="/testimonials"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.3s ease',
                  display: 'block',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography 
                    variant="h4" 
                    component="blockquote" 
                    sx={{ 
                      textAlign: 'center',
                      fontStyle: 'italic',
                      maxWidth: '800px',
                      mx: 'auto',
                      px: 4,
                    }}
                  >
                    "A huge amount of fulfillment comes from being able to make such a positive impact on the lives of others."
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      textAlign: 'center',
                      mt: 2,
                      opacity: 0.8,
                    }}
                  >
                    — Chase Alley, Senior from Canterbury School
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      mt: 2,
                      opacity: 0.6,
                      fontStyle: 'italic',
                    }}
                  >
                    Click to see more testimonials →
                  </Typography>
                </motion.div>
              </Box>
            </Container>
          </Box>

          {/* FAQ Link Section */}
          <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8, position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component={Link}
                to="/faq"
                sx={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                  Have questions? Check out our FAQ →
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
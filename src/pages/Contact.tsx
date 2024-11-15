import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import SendIcon from '@mui/icons-material/Send';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_sbx09m9",
        "template_8h54p7q",
        {
          from_name: `${formValues.firstName} ${formValues.lastName}`,
          from_email: formValues.email,
          message: formValues.message,
          to_name: "CLEO Initiative",
        },
        "jnT6XaLdydE07qf8-",
      );
      
      setSubmitStatus('success');
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
          
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '95%' }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 12, mt: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 4,
                    background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Contact Us
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    maxWidth: '800px',
                    mx: 'auto',
                    opacity: 0.9,
                    mb: 6,
                    lineHeight: 1.6
                  }}
                >
                  A better future is possible for the seniors in your community. 
                  Contact us to learn more about our mission and work, or to become involved yourself.
                </Typography>
              </motion.div>
            </Box>

            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: 6,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 12,
                }}
              >
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        required
                        value={formValues.firstName}
                        onChange={handleChange}
                        error={formValues.firstName.length > 0}
                        helperText={formValues.firstName.length > 0 && 'First name is required'}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        required
                        value={formValues.lastName}
                        onChange={handleChange}
                        error={formValues.lastName.length > 0}
                        helperText={formValues.lastName.length > 0 && 'Last name is required'}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        error={formValues.email.length > 0}
                        helperText={formValues.email.length > 0 && 'Enter a valid email'}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label="Message"
                        required
                        multiline
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                        error={formValues.message.length > 0}
                        helperText={formValues.message.length > 0 && 'Message is required'}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          px: 6,
                          py: 2,
                          borderRadius: '50px',
                          fontSize: '1.1rem',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Container>

          <Snackbar
            open={submitStatus !== null}
            autoHideDuration={6000}
            onClose={() => setSubmitStatus(null)}
          >
            <Alert
              severity={submitStatus === 'success' ? 'success' : 'error'}
              sx={{ width: '100%' }}
            >
              {submitStatus === 'success'
                ? 'Message sent successfully!'
                : 'Failed to send message. Please try again.'}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
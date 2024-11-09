import React, { useState, useCallback } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Divider } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

interface Founder {
  name: string;
  image: string;
  role: string;
  bio: string;
  linkedin?: string;
}

const founders: Founder[] = [
  { 
    name: 'Derrick Hueniken',
    image: '/images/founders/derrick.png',
    role: 'Co-Founder & President',
    bio: 'Passionate about bridging the technological divide between generations.',
    linkedin: 'https://linkedin.com/in/derrick-hueniken'
  },
  { 
    name: 'Christian Laquis',
    image: '/images/founders/christian.png',
    role: 'Co-Founder & Vice President',
    bio: 'Dedicated to empowering seniors through technology education.',
    linkedin: 'https://linkedin.com/in/christian-laquis'
  },
  { 
    name: 'Aaron Smolyar',
    image: '/images/founders/aaron.png',
    role: 'Co-Founder & Director',
    bio: 'Committed to creating meaningful connections across generations.',
    linkedin: 'https://linkedin.com/in/aaron-smolyar'
  }
];

const stats = [
  { number: '1000+', label: 'Seniors Helped', icon: <GroupsIcon sx={{ fontSize: 40 }} /> },
  { number: '20+', label: 'School Chapters', icon: <SchoolIcon sx={{ fontSize: 40 }} /> },
  { number: '15', label: 'States', icon: <PublicIcon sx={{ fontSize: 40 }} /> },
];

const About: React.FC = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseLeave = useCallback(() => {
    if (!isHovering) {
      setIsMapVisible(false);
    }
  }, [isHovering]);

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

          {/* Hero Section */}
          <Box
            sx={{
              position: 'relative',
              height: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/images/about/hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                zIndex: 0,
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '3rem', md: '5rem' },
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About CLEO
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    maxWidth: '800px',
                    margin: '0 auto',
                    opacity: 0.9,
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  Empowering seniors through technology, one connection at a time
                </Typography>

                {/* Stats Section */}
                <Container maxWidth="lg">
                  <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                    {stats.map((stat, index) => (
                      <Grid item xs={12} md={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <Paper
                            sx={{
                              p: 4,
                              height: '200px',
                              bgcolor: 'rgba(255,255,255,0.1)',
                              backdropFilter: 'blur(10px)',
                              WebkitBackdropFilter: 'blur(10px)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                              }
                            }}
                          >
                            <Box sx={{ mb: 2 }}>
                              {stat.icon}
                            </Box>
                            <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                              {stat.number}
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8 }}>
                              {stat.label}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Container>
            </motion.div>
          </Box>

          {/* What is CLEO Section */}
          <Container 
            maxWidth="lg" 
            sx={{ 
              mt: 8,
              mb: 8,
              '& > *': {
                mx: 'auto',
                width: '95%',
              }
            }}
          >
            <Paper
              sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '30px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'url(/images/about/about1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                  zIndex: 0,
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, p: { xs: 4, md: 8 } }}>
                <Grid container spacing={6} alignItems="center">
                  <Grid item xs={12} md={5}>
                    <Typography 
                      variant="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      What is CLEO?
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 4, 
                        opacity: 0.9,
                        fontWeight: 500,
                        color: '#64b5f6'
                      }}
                    >
                      Computer Literacy Education Outreach
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ 
                          fontSize: '1.2rem', 
                          lineHeight: 1.8,
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          mb: 4
                        }}
                      >
                        CLEO is an initiative that bridges the digital divide between generations, 
                        connecting high school students with seniors to share essential technology skills.
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: '#64b5f6',
                              mb: 1
                            }}
                          >
                            Our Mission
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontSize: '1.1rem', 
                              lineHeight: 1.8,
                              opacity: 0.9
                            }}
                          >
                            We empower seniors with the knowledge and confidence to navigate the digital world, 
                            helping them stay connected with loved ones and maintain independence.
                          </Typography>
                        </Box>

                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: '#64b5f6',
                              mb: 1
                            }}
                          >
                            How It Works
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontSize: '1.1rem', 
                              lineHeight: 1.8,
                              opacity: 0.9
                            }}
                          >
                            Student volunteers meet regularly with seniors in local retirement communities, 
                            providing one-on-one guidance on using smartphones, computers, and other digital tools.
                          </Typography>
                        </Box>

                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: '#64b5f6',
                              mb: 1
                            }}
                          >
                            Our Impact
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontSize: '1.1rem', 
                              lineHeight: 1.8,
                              opacity: 0.9
                            }}
                          >
                            Beyond technical skills, CLEO creates meaningful intergenerational connections 
                            that enrich both students' and seniors' lives through shared learning experiences.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>

          {/* Founders Section */}
          <Container 
            maxWidth="lg" 
            sx={{ 
              mt: 8,
              mb: 8,
              '& > *': {
                mx: 'auto',
                width: '95%',
              }
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 8 }}>
              Our Founders
            </Typography>
            <Grid container spacing={6}>
              {founders.map((founder, index) => (
                <Grid item xs={12} md={4} key={founder.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          paddingTop: '100%',
                          borderRadius: '15px',
                          overflow: 'hidden',
                          mb: 3,
                        }}
                      >
                        <img
                          src={founder.image}
                          alt={founder.name}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      <Typography variant="h5" sx={{ textAlign: 'center' }}>
                        {founder.name}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Journey Section with Timeline */}
          <Container 
            maxWidth="lg" 
            sx={{ 
              mt: 8,
              mb: 8,
              '& > *': {
                mx: 'auto',
                width: '95%',
              }
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 12 }}>
              Our Journey
            </Typography>

            {/* Timeline Item 1 */}
            <Box
              sx={{
                position: 'relative',
                mb: 15,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 2,
                  height: '100%',
                  background: 'rgba(255,255,255,0.2)',
                  zIndex: 0,
                }
              }}
            >
              {/* A New Idea */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  mb: 15,
                  gap: 4,
                }}
              >
                {/* Image on the left */}
                <Box sx={{ width: '48%', display: 'flex', alignItems: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      }}
                    >
                      <img
                        src="/images/about/about2.jpg"
                        alt="A New Idea"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Box>

                {/* Content on the right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '48%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h4" gutterBottom color="primary.light">
                      2021
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      A New Idea
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                      The CLEO Initiative was born when Derrick Hueniken, Christian Laquis, and Aaron Smolyar 
                      were discussing their shared experience of their grandparents' daily struggles with technology. 
                      They decided that if their grandparents were too far away to help, they could at least help the 
                      seniors in their own community.
                    </Typography>
                  </Paper>
                </motion.div>

                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    border: '4px solid white',
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Getting Started - Reverse layout */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  mb: 15,
                  gap: 4,
                }}
              >
                {/* Content on the left */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '48%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h4" gutterBottom color="primary.light">
                      2022
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Getting Started
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                      The CLEO Initiative started at a Brookdale Senior Living community in Fort Myers. Every week, 
                      students from the Canterbury Upper School would visit Brookdale and help the seniors, forging 
                      long-lasting connections along the way. Soon, people began to notice that CLEO had a big impact 
                      on the seniors it was serving.
                    </Typography>
                  </Paper>
                </motion.div>

                {/* Image on the right */}
                <Box sx={{ width: '48%', display: 'flex', alignItems: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      }}
                    >
                      <img
                        src="/images/about/about3.jpg"
                        alt="Getting Started"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Box>

                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    border: '4px solid white',
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Nationwide Growth */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  gap: 4,
                }}
              >
                {/* Image on the left */}
                <Box sx={{ width: '48%', display: 'flex', alignItems: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      }}
                    >
                      <img
                        src="/images/about/about4.jpg"
                        alt="Nationwide Growth"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Box>

                {/* Content on the right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '48%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h4" gutterBottom color="primary.light">
                      2023
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Nationwide Growth
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                      Friends and family of CLEO members began reaching out to start chapters, and thus CLEO 
                      became a nationwide effort. Today, CLEO has chapters across multiple states, serving 
                      seniors in communities throughout the country.
                    </Typography>
                  </Paper>
                </motion.div>

                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    border: '4px solid white',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>

            {/* Chapters Section */}
            <Container 
              maxWidth="lg" 
              sx={{ 
                mt: 8,
                mb: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              id="chapters"
            >
              <Box sx={{ width: '95%', maxWidth: '800px' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
                  Our Chapters
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
                  From coast to coast, CLEO chapters are making a difference in their communities. 
                  Each pin represents a school where students are actively helping seniors bridge the digital divide.
                </Typography>

                <Paper
                  sx={{
                    p: 4,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '100%',
                  }}
                >
                  <Box sx={{ mt: 4, mb: 8, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      Want to start a chapter at your school?
                    </Typography>
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
                          mt: 2,
                          px: 6,
                          py: 1.5,
                          borderRadius: '50px',
                          fontSize: '1.1rem',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        Get Started Today
                      </Button>
                    </motion.div>
                  </Box>

                  {/* Map Container with Click Overlay */}
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: '100%', 
                        height: '600px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '20px',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transition: 'box-shadow 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseOver={() => setIsHovering(true)}
                      onMouseOut={() => setIsHovering(false)}
                    >
                      {!isMapVisible && (
                        <Box
                          onClick={() => setIsMapVisible(true)}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0,0,0,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(0,0,0,0.4)',
                            }
                          }}
                        >
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              color: 'white',
                              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                              letterSpacing: '1px',
                              fontWeight: 500,
                              opacity: 0.9,
                              transition: 'opacity 0.3s ease',
                              '&:hover': {
                                opacity: 1
                              }
                            }}
                          >
                            Click to View Map
                          </Typography>
                        </Box>
                      )}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          pointerEvents: isMapVisible ? 'auto' : 'none',
                        }}
                      >
                        <iframe 
                          src="https://www.google.com/maps/d/embed?mid=1jslHrYUFFqXpfYP_vJZEojGeMl_CHTo&ehbc=2E312F&hl=en&ui=0"
                          style={{ 
                            border: 0,
                            width: '100%',
                            height: 'calc(100% + 60px)',
                            marginTop: '-60px',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                          title="CLEO Chapters Map"
                        />
                      </Box>
                    </Box>
                  </motion.div>
                </Paper>
              </Box>
            </Container>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" gutterBottom>
                  The CLEO Initiative
                </Typography>
                <Typography variant="body2">
                  cleoinitiative@gmail.com
                </Typography>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;
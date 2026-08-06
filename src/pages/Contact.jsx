import React, { useState } from 'react';
import { Container, Box, Typography, Paper, TextField, Button, Stack, Grid } from '@mui/material';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Seo from '../components/Seo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:mohammadminhaj229@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const contactChannels = [
    {
      id: 'email',
      title: 'Direct Email',
      value: 'mohammadminhaj229@gmail.com',
      actionText: 'Send Email ↗',
      url: 'mailto:mohammadminhaj229@gmail.com',
      icon: <FaEnvelope size={26} color="#06B6D4" />,
      color: '#06B6D4'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Instant Chat',
      value: '+91 9908597337',
      actionText: 'Message on WhatsApp ↗',
      url: 'https://api.whatsapp.com/send/?phone=919908597337&text=Hi%20Minhaj!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: <FaWhatsapp size={26} color="#25D366" />,
      color: '#25D366'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Network',
      value: 'in/muhammadminhaj229',
      actionText: 'Connect on LinkedIn ↗',
      url: 'https://www.linkedin.com/in/muhammadminhaj229/',
      icon: <FaLinkedinIn size={26} color="#0A66C2" />,
      color: '#0A66C2'
    },
    {
      id: 'github',
      title: 'GitHub Repository',
      value: 'MuhammadMinhaj229',
      actionText: 'Explore GitHub ↗',
      url: 'https://github.com/MuhammadMinhaj229',
      icon: <FaGithub size={26} color="#f5f5f5" />,
      color: '#f5f5f5'
    }
  ];

  return (
    <section>
      <Seo
        title="Contact Mohammed Minhaj Mahmood | Data & ML Specialist"
        description="Get in touch with Mohammed Minhaj Mahmood for AI applied consulting, SME business automation, web systems, or research engineering."
      />
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 }, overflowX: 'hidden' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 0.5, sm: 0 } }}>
          <Typography component="h1" variant="h3" sx={{ fontWeight: 900, mb: 1.5, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto', fontWeight: 400, fontSize: { xs: 15, sm: 17, md: 18 }, lineHeight: 1.6 }}>
            Interested in AI consulting, custom business automation, modern web architecture, or machine learning engineering? Reach out directly below.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 3.5 }} sx={{ mb: { xs: 5, md: 8 } }}>
          {contactChannels.map((ch) => (
            <Grid item xs={12} sm={6} md={3} key={ch.id} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={(th) => ({
                  p: { xs: 2.25, sm: 3 },
                  borderRadius: 3.5,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  border: `1px solid ${th.palette.divider}`,
                  bgcolor: th.palette.background.paper,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
                  willChange: 'transform, box-shadow, border-color',
                  '&:hover': {
                    transform: 'translate3d(0, -5px, 0)',
                    boxShadow: '0 14px 36px rgba(0,0,0,0.14)',
                    borderColor: ch.color,
                  }
                })}
              >
                <Box sx={{ mb: 1.5, p: 1.25, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {ch.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: { xs: '1.05rem', sm: '1.15rem' } }}>
                  {ch.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, wordBreak: 'break-all', flexGrow: 1, fontSize: 14 }}>
                  {ch.value}
                </Typography>
                <Button
                  component="a"
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    borderRadius: 2,
                    borderWidth: '1.5px',
                    width: '100%',
                    minHeight: 44,
                    py: 1,
                    fontSize: 14,
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      borderWidth: '1.5px',
                      bgcolor: 'rgba(6, 182, 212, 0.1)'
                    }
                  }}
                >
                  {ch.actionText}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Quick Message Form */}
        <Box sx={{ maxWidth: 720, mx: 'auto', width: '100%' }}>
          <Paper
            elevation={0}
            sx={(th) => ({
              p: { xs: 2.5, sm: 4, md: 5 },
              borderRadius: { xs: 3, sm: 4 },
              border: `1px solid ${th.palette.divider}`,
              bgcolor: th.palette.background.paper,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            })}
          >
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.75rem' } }}>
              Send a Direct Message
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: { xs: 3, md: 4 }, fontSize: { xs: 14, sm: 15 }, lineHeight: 1.6 }}>
              Fill out the details below and click submit to quickly compose an email directly to my priority inbox.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2.5, sm: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 2, minHeight: 48, fontSize: { xs: 16, sm: 15 } } }}
                    InputLabelProps={{ sx: { fontSize: { xs: 15, sm: 14 } } }}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 2, minHeight: 48, fontSize: { xs: 16, sm: 15 } } }}
                    InputLabelProps={{ sx: { fontSize: { xs: 15, sm: 14 } } }}
                  />
                </Stack>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                  InputProps={{ sx: { borderRadius: 2, minHeight: 48, fontSize: { xs: 16, sm: 15 } } }}
                  InputLabelProps={{ sx: { fontSize: { xs: 15, sm: 14 } } }}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Your Message"
                  name="message"
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  InputProps={{ sx: { borderRadius: 2, fontSize: { xs: 16, sm: 15 } } }}
                  InputLabelProps={{ sx: { fontSize: { xs: 15, sm: 14 } } }}
                />
                <Box sx={{ pt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{ py: { xs: 1.5, md: 1.8 }, minHeight: 50, fontSize: { xs: 15, sm: 16 }, fontWeight: 800, borderRadius: 2.5 }}
                  >
                    Compose & Send Email ↗
                  </Button>
                </Box>
                {submitted && (
                  <Typography variant="body2" sx={{ color: '#25D366', textAlign: 'center', fontWeight: 600 }}>
                    ✨ Preparing email draft! If your email client did not open automatically, please contact mohammadminhaj229@gmail.com directly.
                  </Typography>
                )}
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}

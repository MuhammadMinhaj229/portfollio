import React, { useState } from 'react';
import { Container, Box, Typography, Paper, TextField, Button, Stack } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
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
      icon: <FaEnvelope size={28} color="#06B6D4" />,
      color: '#06B6D4'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Instant Chat',
      value: '+91 7997576508',
      actionText: 'Message on WhatsApp ↗',
      url: 'https://api.whatsapp.com/send/?phone=917997576508&text=Hi%20Minhaj!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: <FaWhatsapp size={28} color="#25D366" />,
      color: '#25D366'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Network',
      value: 'in/muhammadminhaj229',
      actionText: 'Connect on LinkedIn ↗',
      url: 'https://www.linkedin.com/in/muhammadminhaj229/',
      icon: <FaLinkedinIn size={28} color="#0A66C2" />,
      color: '#0A66C2'
    },
    {
      id: 'github',
      title: 'GitHub Repository',
      value: 'MuhammadMinhaj229',
      actionText: 'Explore GitHub ↗',
      url: 'https://github.com/MuhammadMinhaj229',
      icon: <FaGithub size={28} color="#f5f5f5" />,
      color: '#f5f5f5'
    }
  ];

  return (
    <section>
      <Seo
        title="Contact Mohammed Minhaj Mahmood | Data & ML Specialist"
        description="Get in touch with Mohammed Minhaj Mahmood for AI applied consulting, SME business automation, web systems, or research engineering."
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography component="h1" variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto', fontWeight: 400 }}>
            Interested in AI consulting, custom business automation, modern web architecture, or machine learning engineering? Reach out directly below.
          </Typography>
        </Box>

        <Grid2 container spacing={4} sx={{ mb: 8 }}>
          {contactChannels.map((ch) => (
            <Grid2 xs={12} sm={6} md={3} key={ch.id} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={(th) => ({
                  p: 3.5,
                  borderRadius: 4,
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
                <Box sx={{ mb: 2, p: 1.5, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {ch.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {ch.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, wordBreak: 'break-all', flexGrow: 1 }}>
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
            </Grid2>
          ))}
        </Grid2>

        {/* Quick Message Form */}
        <Box sx={{ maxWidth: 720, mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={(th) => ({
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              border: `1px solid ${th.palette.divider}`,
              bgcolor: th.palette.background.paper,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            })}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              Send a Direct Message
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
              Fill out the details below and click submit to quickly compose an email directly to my priority inbox.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
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
                  />
                </Stack>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={5}
                  label="Your Message"
                  name="message"
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Box sx={{ pt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontSize: 16, fontWeight: 800, borderRadius: 2.5 }}
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

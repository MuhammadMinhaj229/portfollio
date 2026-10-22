import React from 'react';
import { Container, Box, Typography, Button, Stack, Link as MuiLink } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FooterItems from './FooterItems';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: { xs: 8, md: 12 },
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          {/* Brand & Personal Summary */}
          <Box sx={{ maxWidth: 420 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.5, color: 'text.primary' }}>
              Mohammed Minhaj Mahmood
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.6 }}>
              Data & Business Automation Analyst · Full-Stack & AI Systems.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Based in Hyderabad, India · Available for full-time roles & projects
              </Typography>
            </Box>
          </Box>

          {/* Quick Nav Links */}
          <Stack direction="row" spacing={{ xs: 2, sm: 3 }} useFlexGap flexWrap="wrap">
            <MuiLink component={Link} to="/" color="text.secondary" underline="hover" sx={{ fontWeight: 600, fontSize: 14 }}>
              Home
            </MuiLink>
            <MuiLink component={Link} to="/projects" color="text.secondary" underline="hover" sx={{ fontWeight: 600, fontSize: 14 }}>
              Projects
            </MuiLink>
            <MuiLink component={Link} to="/blogs" color="text.secondary" underline="hover" sx={{ fontWeight: 600, fontSize: 14 }}>
              Certifications
            </MuiLink>
            <MuiLink component={Link} to="/skills" color="text.secondary" underline="hover" sx={{ fontWeight: 600, fontSize: 14 }}>
              Skills
            </MuiLink>
            <MuiLink component={Link} to="/contact" color="text.secondary" underline="hover" sx={{ fontWeight: 600, fontSize: 14 }}>
              Contact
            </MuiLink>
          </Stack>

          {/* Social Icons & Resume Download */}
          <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2} alignItems="center">
            <FooterItems />
            <Button
              component="a"
              href="/Mohammed_Minhaj_Mahmood_Resume.pdf"
              download="Mohammed_Minhaj_Mahmood_Resume.pdf"
              variant="outlined"
              size="small"
              startIcon={<DownloadIcon fontSize="small" />}
              sx={{
                borderRadius: 2,
                fontWeight: 700,
                fontSize: 13,
                minHeight: 40,
                px: 2,
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'secondary.main',
                  bgcolor: 'rgba(6, 182, 212, 0.08)',
                },
              }}
            >
              Resume
            </Button>
          </Stack>
        </Stack>

        {/* Divider & Copyright */}
        <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            © {new Date().getFullYear()} Mohammed Minhaj Mahmood. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Engineered with React & MUI · Designed with simplicity and precision
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

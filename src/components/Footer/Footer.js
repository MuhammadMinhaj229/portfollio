import React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FooterItems from './FooterItems';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 8 }}>
      <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
          Let's connect and build something great together
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 3.5, maxWidth: 600, mx: 'auto' }}>
          Whether you need a custom website, digital tools to automate your business, or help with data and AI testing — feel free to reach out.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4.5 }}>
          <Button
            href="/contact"
            variant="contained"
            color="secondary"
            aria-label="Contact Mohammed Minhaj"
            sx={{ fontWeight: 800, px: 3.5 }}
          >
            Contact Me
          </Button>
          <Button
            href="/projects"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.35)', px: 3, '&:hover': { borderColor: '#fff' } }}
          >
            View Projects
          </Button>
          <Button
            component="a"
            href="/Mohammed_Minhaj_Mahmood_Resume.pdf"
            download="Mohammed_Minhaj_Mahmood_Resume.pdf"
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{ color: '#06B6D4', borderColor: 'rgba(6, 182, 212, 0.5)', px: 3, '&:hover': { borderColor: '#06B6D4', bgcolor: 'rgba(6,182,212,0.1)' } }}
          >
            Download Resume
          </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 3, opacity: 0.8, fontWeight: 500 }}>
          © {new Date().getFullYear()} Mohammed Minhaj. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

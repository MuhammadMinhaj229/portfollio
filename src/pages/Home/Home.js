import React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DownloadIcon from '@mui/icons-material/Download';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';
import { useLang } from '../../utils/i18n';
import { Link } from 'react-router-dom';

export default function Home() {
  const [lang] = useLang();
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const titles = homeConfig.titles_i18n?.[lang] || homeConfig.titles || ['Data & Business Automation Analyst'];
  const about = homeConfig.about_i18n?.[lang] || homeConfig.about || { start: '', exit: '' };

  const timelineItems = (homeConfig.workTimeline || []).map((it) => ({
    ...it,
    title: it.title_i18n?.[lang] || it.title,
    description: it.description_i18n?.[lang] || it.description,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammed Minhaj Mahmood',
    url: canonical,
    jobTitle: titles?.[0] || 'Data & Business Automation Analyst',
  };

  const greetingNode = homeConfig.greeting_i18n?.[lang] || homeConfig.greeting;
  const ExperienceLabel = lang === 'es' ? 'Experiencia y Trayectoria' : 'Experience & Career Timeline';

  return (
    <section>
      <Seo
        title="Mohammed Minhaj Mahmood — Data & Business Automation Analyst"
        description="Portfolio of Mohammed Minhaj Mahmood: Website management, data automation tools, AI testing, and digital solutions."
        canonical={canonical}
        jsonLd={jsonLd}
      />

      {/* Hero & Bento Profile Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid2 xs={12} md={6}>
            {/* Live Availability Status Indicator */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.75,
                py: 0.6,
                mb: 2.5,
                borderRadius: 10,
                bgcolor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                }}
              />
              <Typography variant="caption" sx={{ color: '#15803d', fontWeight: 700, fontSize: 12 }}>
                {lang === 'es' ? 'Disponible para nuevos roles · Disposición para reubicación' : 'Available for full-time roles & projects · Open to relocate'}
              </Typography>
            </Box>

            {React.isValidElement(greetingNode) ? (
              <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>{greetingNode}</Box>
            ) : (
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 1.5, wordBreak: 'break-word' }}>
                {greetingNode}
              </Typography>
            )}

            <Box sx={{ color: 'text.secondary', fontSize: { xs: 16, sm: 18, md: 20 }, fontWeight: 600, lineHeight: 1.5, minHeight: 36, mb: 3.5 }}>
              <DynamicTyping titles={titles} />
            </Box>

            {/* Quick CTAs */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ fontWeight: 800, px: 3.5, py: 1.25, borderRadius: 2.5, minHeight: 46 }}
              >
                {lang === 'es' ? 'Ver Proyectos →' : 'Explore Featured Work →'}
              </Button>
              <Button
                component="a"
                href="/Mohammed_Minhaj_Mahmood_Resume.pdf"
                download="Mohammed_Minhaj_Mahmood_Resume.pdf"
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: 700,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 2.5,
                  minHeight: 46,
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    bgcolor: 'rgba(6, 182, 212, 0.08)'
                  }
                }}
              >
                Resume PDF
              </Button>
            </Stack>
          </Grid2>

          <Grid2 xs={12} md={6}>
            <About about={about} />
          </Grid2>
        </Grid2>
      </Container>

      {/* Dynamic Interactive Timeline Section */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, sm: 10, md: 12 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography variant="overline" color="secondary.main" fontWeight={800} sx={{ fontSize: 13, letterSpacing: 1.2 }}>
            Career Journey
          </Typography>
          <Typography component="h2" variant="h3" sx={{ fontWeight: 900, letterSpacing: -0.8, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            {ExperienceLabel}
          </Typography>
        </Box>
        <Box sx={{ width: '100%', maxWidth: '1000px', mx: 'auto' }}>
          <Timeline items={timelineItems} />
        </Box>
      </Container>
    </section>
  );
}

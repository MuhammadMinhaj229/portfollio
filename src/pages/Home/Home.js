import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';
import { useLang } from '../../utils/i18n';

export default function Home() {
  const [lang] = useLang();
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const titles = homeConfig.titles_i18n?.[lang] || homeConfig.titles || ['Data & ML Specialist'];
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
    jobTitle: titles?.[0] || 'Data & ML Specialist',
  };

  const greetingNode = homeConfig.greeting_i18n?.[lang] || homeConfig.greeting;
  const ExperienceLabel = 'Professional Experience & Leadership';

  return (
    <section>
      <Seo
        title="Mohammed Minhaj Mahmood — Data & ML Specialist & Founder"
        description="Portfolio of Mohammed Minhaj Mahmood: AI RAG architecture, SME business automation, web systems, and applied research."
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 xs={12} md={6}>
            {React.isValidElement(greetingNode) ? (
              <Box sx={{ mb: 2 }}>{greetingNode}</Box>
            ) : (
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                {greetingNode}
              </Typography>
            )}
            <Box sx={{ color: 'text.secondary', fontSize: 20, fontWeight: 600 }}>
              <DynamicTyping titles={titles} />
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <About about={about} />
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
          {ExperienceLabel}
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '960px' }}>
          <Timeline items={timelineItems} />
        </Box>
      </Container>
    </section>
  );
}



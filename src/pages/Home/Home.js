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
  const ExperienceLabel = 'Work Experience & Timeline';

  return (
    <section>
      <Seo
        title="Mohammed Minhaj Mahmood — Data & Business Automation Analyst"
        description="Portfolio of Mohammed Minhaj Mahmood: Website management, data automation tools, AI testing, and practical digital solutions."
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid2 xs={12} md={6}>
            {React.isValidElement(greetingNode) ? (
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>{greetingNode}</Box>
            ) : (
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, wordBreak: 'break-word' }}>
                {greetingNode}
              </Typography>
            )}
            <Box sx={{ color: 'text.secondary', fontSize: { xs: 16, sm: 18, md: 20 }, fontWeight: 600, lineHeight: 1.5 }}>
              <DynamicTyping titles={titles} />
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <About about={about} />
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Typography component="h2" variant="h3" sx={{ fontWeight: 800, mb: { xs: 3, md: 4 }, wordBreak: 'break-word' }}>
          {ExperienceLabel}
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '960px', overflowX: 'hidden' }}>
          <Timeline items={timelineItems} />
        </Box>
      </Container>
    </section>
  );
}

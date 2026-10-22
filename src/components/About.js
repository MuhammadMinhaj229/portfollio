import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
    <Box id="about" sx={{ my: { xs: 2, md: 3 }, width: '100%' }}>
      <Card
        sx={{
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 3.5, md: 4 } }}>
          {/* Card Tag Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
            <Chip
              size="small"
              label="Engineering Profile"
              sx={{
                bgcolor: 'rgba(6, 182, 212, 0.15)',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: 11,
                border: '1px solid rgba(6, 182, 212, 0.3)',
              }}
            />
            <Typography variant="caption" sx={{ color: '#94a3b8', fontFamily: 'monospace', fontSize: 11 }}>
              Hyderabad, IN · 2026
            </Typography>
          </Box>

          {/* About Text */}
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontWeight: 400,
              color: '#e2e8f0',
              lineHeight: 1.7,
              fontSize: { xs: 15, sm: 16 },
            }}
          >
            {start}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontWeight: 400,
              color: '#94a3b8',
              lineHeight: 1.7,
              fontSize: { xs: 14, sm: 15 },
            }}
          >
            {exit}
          </Typography>

          {/* Key Metrics / Highlights Bento Row */}
          <Grid container spacing={1.5} sx={{ pt: 1, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: 11, fontWeight: 600 }}>
                  Active Focus
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#38bdf8', fontWeight: 800, mt: 0.25, fontSize: 13 }}>
                  PHFI & Sanad AI
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: 11, fontWeight: 600 }}>
                  Deployed Work
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#22c55e', fontWeight: 800, mt: 0.25, fontSize: 13 }}>
                  10+ Live Web Systems
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: 11, fontWeight: 600 }}>
                  Education
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#e2e8f0', fontWeight: 800, mt: 0.25, fontSize: 13 }}>
                  B.Tech CSE (2026)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;

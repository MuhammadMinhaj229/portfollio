import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
    <Box id="about" sx={{ my: { xs: 2, md: 4 }, width: '100%' }}>
      <Card sx={{ backgroundColor: '#263238', color: '#f5f5f5', borderRadius: { xs: 3, md: 4 }, overflow: 'hidden' }}>
        <CardHeader
          sx={{ py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          avatar={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="span" className="iconify" data-icon="emojione:red-circle" sx={{ mr: 1 }} />
              <Box component="span" className="iconify" data-icon="twemoji:yellow-circle" sx={{ mr: 1 }} />
              <Box component="span" className="iconify" data-icon="twemoji:green-circle" />
            </Box>
          }
        />
        <CardContent sx={{ fontSize: { xs: '105%', sm: '118%', md: '130%' }, lineHeight: '160%', backgroundColor: '#F6F6F6', color: '#4A5568', p: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' } }}>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 500, color: 'text.primary', lineHeight: 1.6 }}>
            {start}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary', lineHeight: 1.6 }}>{exit}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;


import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillsItems = (props) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 1.25, sm: 2, md: 2.5 }, width: '100%', px: { xs: 0.5, sm: 1 } }}>
      {props.config.map((item) => (
        <Box
          key={item.id}
          sx={{
            color: '#263238',
            textAlign: 'center',
            p: { xs: '1rem 0.75rem', sm: '1.25rem 1rem', md: '1.5rem' },
            bgcolor: '#ffffff',
            borderRadius: '16px',
            minWidth: { xs: '128px', sm: '150px', md: '170px' },
            flex: { xs: '1 1 calc(50% - 12px)', sm: '0 1 auto' },
            maxWidth: { xs: '165px', sm: '185px', md: '200px' },
            boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.07)',
            border: '1px solid rgba(15, 18, 32, 0.08)',
            willChange: 'transform, box-shadow, border-color',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              transform: 'translate3d(0, -5px, 0)',
              boxShadow: '0px 10px 30px rgba(6, 182, 212, 0.22)',
              borderColor: '#06B6D4',
              cursor: 'pointer'
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 55 }}>
            {item.icon}
          </Box>
          <Typography variant="body2" sx={{ mt: '0.75rem', fontWeight: 800, fontSize: { xs: 13, sm: 14 } }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsItems;


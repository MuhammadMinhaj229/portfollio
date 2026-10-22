import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useLang } from '../../utils/i18n';

/**
 * Dynamic, Interactive Experience Timeline
 * Featuring category filtering, active status indicator lights, and modern glassmorphic cards.
 */
export default function Timeline({ items = [] }) {
  const [lang] = useLang();
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { value: 'all', label: lang === 'es' ? 'Toda la Trayectoria' : 'All Journey' },
    { value: 'industry', label: lang === 'es' ? 'Industria y Prácticas' : 'Industry & Work' },
    { value: 'leadership', label: lang === 'es' ? 'Liderazgo y Negocios' : 'Leadership' },
    { value: 'education', label: lang === 'es' ? 'Educación' : 'Education' },
  ];

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <Box sx={{ width: '100%' }}>
      {/* Interactive Category Filter Tabs */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, overflowX: 'auto' }}>
        <Tabs
          value={filter}
          onChange={(e, val) => setFilter(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 44,
            bgcolor: (th) => alpha(th.palette.secondary.main, 0.06),
            p: 0.5,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            '& .MuiTabs-indicator': {
              display: 'none',
            },
            '& .MuiTab-root': {
              minHeight: 36,
              borderRadius: 2.5,
              textTransform: 'none',
              fontWeight: 700,
              fontSize: { xs: 13, sm: 14 },
              px: { xs: 2, sm: 2.5 },
              color: 'text.secondary',
              transition: 'all 0.2s ease',
              '&.Mui-selected': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)',
              },
            },
          }}
        >
          {filterTabs.map((t) => (
            <Tab key={t.value} value={t.value} label={t.label} />
          ))}
        </Tabs>
      </Box>

      {/* Vertical Interactive Journey Cards */}
      <Box sx={{ position: 'relative', pl: { xs: 2.5, md: 4 } }}>
        {/* Continuous Animated Vertical Track Beam */}
        <Box
          sx={{
            position: 'absolute',
            top: 24,
            bottom: 24,
            left: { xs: 7, md: 15 },
            width: 2,
            background: (th) =>
              `linear-gradient(180deg, ${th.palette.secondary.main} 0%, rgba(6, 182, 212, 0.15) 100%)`,
          }}
        />

        <Stack spacing={3.5}>
          {filteredItems.map((item) => {
            const { id, date, icon, title, company, description, tags = [], link, linkText, isCurrent } = item;

            return (
              <Box key={id} sx={{ position: 'relative' }}>
                {/* Glowing Node Marker */}
                <Box
                  sx={(th) => ({
                    position: 'absolute',
                    top: 24,
                    left: { xs: -28, md: -34 },
                    width: { xs: 24, md: 28 },
                    height: { xs: 24, md: 28 },
                    borderRadius: '50%',
                    bgcolor: isCurrent ? th.palette.secondary.main : th.palette.background.paper,
                    border: `2px solid ${th.palette.secondary.main}`,
                    boxShadow: isCurrent ? '0 0 12px rgba(6, 182, 212, 0.6)' : '0 2px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCurrent ? '#ffffff' : th.palette.secondary.main,
                    zIndex: 2,
                    '& svg': { fontSize: { xs: 12, md: 14 } },
                  })}
                >
                  {icon}
                </Box>

                {/* Role Card */}
                <Paper
                  elevation={0}
                  sx={(th) => ({
                    p: { xs: 2.5, sm: 3.5 },
                    borderRadius: 3.5,
                    border: '1px solid',
                    borderColor: isCurrent ? alpha(th.palette.secondary.main, 0.4) : th.palette.divider,
                    bgcolor: th.palette.background.paper,
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform, box-shadow, border-color',
                    '&:hover': {
                      transform: 'translate3d(0, -4px, 0)',
                      borderColor: th.palette.secondary.main,
                      boxShadow: '0 16px 36px rgba(0, 0, 0, 0.08), 0 0 20px rgba(6, 182, 212, 0.12)',
                    },
                  })}
                >
                  <Stack spacing={1.5}>
                    {/* Header Row: Title, Company, Status & Date */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                          {title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 700, mt: 0.25 }}>
                          {company}
                        </Typography>
                      </Box>

                      {/* Status Badges */}
                      <Stack direction="row" spacing={1} alignItems="center">
                        {isCurrent && (
                          <Chip
                            size="small"
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    bgcolor: '#22c55e',
                                    boxShadow: '0 0 6px #22c55e',
                                  }}
                                />
                                <span>{lang === 'es' ? 'Rol Activo' : 'Active Role'}</span>
                              </Box>
                            }
                            sx={{
                              bgcolor: 'rgba(34, 197, 94, 0.12)',
                              color: '#15803d',
                              fontWeight: 700,
                              fontSize: 11,
                              border: '1px solid rgba(34, 197, 94, 0.3)',
                            }}
                          />
                        )}
                        <Chip
                          size="small"
                          label={date}
                          sx={{
                            bgcolor: (th) => alpha(th.palette.secondary.main, 0.08),
                            fontWeight: 700,
                            fontSize: 11,
                          }}
                        />
                      </Stack>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: { xs: 14, sm: 15 } }}>
                      {description}
                    </Typography>

                    {/* Tags */}
                    {tags.length > 0 && (
                      <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
                        {tags.map((t) => (
                          <Chip
                            key={t}
                            size="small"
                            label={t}
                            sx={{
                              bgcolor: 'rgba(15, 23, 42, 0.04)',
                              border: '1px solid',
                              borderColor: 'divider',
                              fontSize: 11,
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    )}

                    {/* Action link */}
                    {link && (
                      <Box sx={{ pt: 1 }}>
                        <Button
                          component="a"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          color="secondary"
                          sx={{
                            fontWeight: 800,
                            borderRadius: 2,
                            px: 2.5,
                            py: 0.8,
                            fontSize: 13,
                          }}
                        >
                          {linkText || 'Visit Site ↗'}
                        </Button>
                      </Box>
                    )}
                  </Stack>
                </Paper>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

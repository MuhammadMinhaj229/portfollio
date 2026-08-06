import React from 'react';
import { Paper, Typography, Box, Stack, Chip, Button, useMediaQuery } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { useLang } from '../../utils/i18n';

/**
 * Clean, theme‑matched responsive timeline with fluid mobile breakpoint behavior
 * Props
 *  - items: Array<{ id, date, icon, title, company, description, tags?: string[], link?: string, linkText?: string }>
 *  - position: 'alternate' | 'left' | 'right'
 */
const Timeline = ({ items = [], position = 'alternate' }) => {
  const [lang] = useLang();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const localizeDate = (d) => {
    if (typeof d !== 'string') return d;
    return lang === 'es' ? d.replace(/Present/i, 'Actualidad') : d;
  };

  const activePosition = isMobile ? 'right' : position;

  return (
    <MuiTimeline position={activePosition} sx={{
      p: { xs: 0, md: 2 },
      m: 0,
      '& .MuiTimelineItem-root:before': { flex: 0, padding: 0 },
    }}>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags = [], link, linkText } = item || {};

        return (
          <TimelineItem key={id}>
            {/* Date pill on desktop; hidden from opposite side on mobile to preserve width */}
            <TimelineOppositeContent
              sx={{
                my: 'auto',
                textAlign: 'right',
                minWidth: { md: 140 },
                display: { xs: 'none', md: 'block' }
              }}
            >
              <Chip
                label={localizeDate(date)}
                size="small"
                variant="outlined"
                sx={(th) => ({
                  borderColor: th.palette.divider,
                  bgcolor: alpha(th.palette.secondary.main, 0.06),
                  fontWeight: 600,
                })}
              />
            </TimelineOppositeContent>

            {/* Axis + dot */}
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={(th) => ({
                  borderColor: th.palette.secondary.main,
                  backgroundColor: th.palette.background.paper,
                  width: { xs: 38, md: 44 },
                  height: { xs: 38, md: 44 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,.06)'
                })}
              >
                <Box sx={(th) => ({ fontSize: { xs: 18, md: 22 }, color: th.palette.secondary.main, display: 'flex' })}>{icon}</Box>
              </TimelineDot>
              <TimelineConnector sx={(th) => ({ backgroundColor: th.palette.divider, width: 2 })} />
            </TimelineSeparator>

            {/* Card content */}
            <TimelineContent sx={{ py: 1.5, px: { xs: 1.5, md: 2.5 } }}>
              <Paper
                elevation={0}
                sx={(th) => ({
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 3,
                  border: `1px solid ${th.palette.divider}`,
                  backgroundColor: th.palette.background.paper,
                  boxShadow: '0 6px 20px rgba(15,18,32,0.06), 0 1px 2px rgba(15,18,32,0.03)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform, box-shadow',
                  '&:hover': {
                    transform: 'translate3d(0, -4px, 0)',
                    boxShadow: '0 12px 32px rgba(15,18,32,0.12), 0 4px 12px rgba(15,18,32,0.08)',
                  },
                })}
              >
                <Stack spacing={1}>
                  {/* Date chip embedded directly inside card on mobile */}
                  {isMobile && date && (
                    <Box sx={{ alignSelf: 'flex-start' }}>
                      <Chip
                        label={localizeDate(date)}
                        size="small"
                        sx={(th) => ({
                          borderColor: th.palette.divider,
                          bgcolor: alpha(th.palette.secondary.main, 0.12),
                          fontWeight: 700,
                          fontSize: 12,
                        })}
                      />
                    </Box>
                  )}

                  <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.2, fontSize: { xs: '1.05rem', md: '1.25rem' } }}>
                    {title}
                  </Typography>
                  {company && (
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      {company}
                    </Typography>
                  )}
                  {description && (
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {description}
                    </Typography>
                  )}

                  {/* Tags */}
                  {Array.isArray(tags) && tags.length > 0 && (
                    <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
                      {tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          sx={(th) => ({
                            bgcolor: alpha(th.palette.secondary.main, 0.15),
                            border: `1px solid ${alpha(th.palette.secondary.main, 0.3)}`,
                            color: th.palette.primary.main,
                            fontWeight: 700,
                            fontSize: 11
                          })}
                        />
                      ))}
                    </Stack>
                  )}

                  {link && (
                    <Box sx={{ pt: 2, textAlign: 'left' }}>
                      <Button
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="secondary"
                        sx={{
                          fontWeight: 800,
                          borderRadius: '10px',
                          borderWidth: '1.5px',
                          minHeight: 44,
                          minWidth: 44,
                          px: 3,
                          py: 1,
                          borderColor: 'secondary.main',
                          color: 'text.primary',
                          '&:hover': {
                            bgcolor: 'rgba(6, 182, 212, 0.15)',
                            borderColor: 'secondary.main',
                            borderWidth: '1.5px'
                          }
                        }}
                      >
                        {linkText || "Checkout"}
                      </Button>
                    </Box>
                  )}
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;




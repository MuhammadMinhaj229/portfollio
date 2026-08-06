import { createTheme } from '@mui/material/styles';

const paletteTokens = {
  primary: '#0B1220',
  secondary: '#06B6D4',
  bg: '#F7FAFC',
  paper: '#FFFFFF',
  textPrimary: '#0B1220',
  textSecondary: '#5B6B7A',
  divider: 'rgba(15, 18, 32, 0.12)',
  info: '#0EA5E9',
  success: '#16A34A',
  warning: '#F59E0B',
  error: '#EF4444',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: paletteTokens.primary },
    secondary: { main: paletteTokens.secondary },
    background: { default: paletteTokens.bg, paper: paletteTokens.paper },
    text: { primary: paletteTokens.textPrimary, secondary: paletteTokens.textSecondary },
    divider: paletteTokens.divider,
    info: { main: paletteTokens.info },
    success: { main: paletteTokens.success },
    warning: { main: paletteTokens.warning },
    error: { main: paletteTokens.error },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    h1: { 
      fontWeight: 900, 
      letterSpacing: '-0.04em',
      fontSize: 'clamp(2.2rem, 5vw + 1rem, 3.5rem)',
      lineHeight: 1.15
    },
    h2: { 
      fontWeight: 900, 
      letterSpacing: '-0.03em',
      fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 2.75rem)',
      lineHeight: 1.2
    },
    h3: { 
      fontWeight: 800, 
      letterSpacing: '-0.02em',
      fontSize: 'clamp(1.45rem, 3vw + 0.5rem, 2.25rem)',
      lineHeight: 1.25
    },
    h4: { 
      fontWeight: 800,
      letterSpacing: '-0.015em',
      fontSize: 'clamp(1.2rem, 2.2vw + 0.3rem, 1.75rem)',
      lineHeight: 1.3
    },
    h5: {
      fontWeight: 700,
      fontSize: 'clamp(1.1rem, 1.8vw + 0.2rem, 1.35rem)',
      lineHeight: 1.35
    },
    h6: {
      fontWeight: 700,
      fontSize: 'clamp(1rem, 1.2vw + 0.15rem, 1.15rem)',
      lineHeight: 1.4
    },
    subtitle1: { 
      fontWeight: 700,
      fontSize: 'clamp(1rem, 1vw + 0.2rem, 1.125rem)'
    },
    body1: {
      fontSize: 'clamp(0.95rem, 0.3vw + 0.85rem, 1.05rem)',
      lineHeight: 1.65
    },
    body2: {
      fontSize: 'clamp(0.875rem, 0.25vw + 0.8rem, 0.95rem)',
      lineHeight: 1.6
    },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          overflowX: 'hidden',
          width: '100%',
          scrollBehavior: 'smooth',
          WebkitTapHighlightColor: 'transparent',
        },
        body: {
          backgroundColor: paletteTokens.bg,
          color: paletteTokens.textPrimary,
          overflowX: 'hidden',
        },
        '::selection': {
          backgroundColor: 'rgba(6, 182, 212, 0.24)',
        },
        a: {
          color: paletteTokens.secondary,
          textDecoration: 'none',
        },
        'a:hover': {
          textDecoration: 'underline',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: { color: 'default', elevation: 0, position: 'sticky' },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 20,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: '0 6px 24px rgba(15,18,32,0.06), 0 1px 2px rgba(15,18,32,0.04)',
          willChange: 'transform, box-shadow',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            transform: 'translate3d(0, -4px, 0)',
            boxShadow: '0 12px 36px rgba(15,18,32,0.12), 0 4px 12px rgba(15,18,32,0.08)',
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 700,
          minHeight: 44,
          minWidth: 44,
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        },
        containedPrimary: {
          color: '#fff',
        },
        containedSecondary: {
          color: '#0B1220', // readable on cyan
        },
        outlined: ({ theme }) => ({
          borderWidth: 2,
          '&:hover': { borderWidth: 2, backgroundColor: 'rgba(6,182,212,0.08)' },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          minWidth: 44,
          transition: 'background-color 0.2s ease, transform 0.15s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 700,
        },
        filled: ({ theme }) => ({
          backgroundColor: 'rgba(6,182,212,0.16)',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          minHeight: 44,
          fontSize: '16px', // Prevents iOS Safari automatic zoom on inputs
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
            boxShadow: '0 0 0 3px rgba(6,182,212,0.20)',
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: 12,
          minHeight: 44,
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 40,
        },
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          borderRadius: 8,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({ opacity: 0.8, borderColor: theme.palette.divider }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          minHeight: 44,
          borderColor: theme.palette.divider,
          '&.Mui-selected': {
            backgroundColor: 'rgba(6,182,212,0.18)',
            borderColor: theme.palette.secondary.main,
          },
        }),
      },
    },
  },
});

export default theme;

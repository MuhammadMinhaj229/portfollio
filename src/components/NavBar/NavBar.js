import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import NavBarItems from './NavBarItems';
import menuConfig from '../../assets/configs/menuConfig';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
          position="sticky"
          color="default"
          elevation={0}
          sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', zIndex: 1400, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        >
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2, width: '100%', px: { xs: 2, md: 3 }, minHeight: { xs: 64, md: 72 } }}>
          {/* Mobile Hamburger Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              aria-label="open mobile navigation menu"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ color: 'text.primary', minWidth: 44, minHeight: 44 }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>

          {/* Desktop Navigation Items */}
          <NavBarItems />
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

          {/* Resume Download Action Button */}
          <Button
            component="a"
            href="/Mohammed_Minhaj_Mahmood_Resume.pdf"
            download="Mohammed_Minhaj_Mahmood_Resume.pdf"
            variant="outlined"
            startIcon={<DownloadIcon />}
            aria-label="Download Mohammed Minhaj Mahmood Resume PDF"
            sx={{
              fontWeight: 800,
              borderRadius: '10px',
              borderWidth: '1.5px',
              px: { xs: 2, md: 2.5 },
              py: 1,
              minHeight: 44,
              minWidth: 44,
              borderColor: 'secondary.main',
              color: 'text.primary',
              fontSize: { xs: 13, md: 14 },
              '&:hover': {
                bgcolor: 'rgba(6, 182, 212, 0.12)',
                borderColor: 'secondary.main',
                borderWidth: '1.5px',
              }
            }}
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: { xs: 300, sm: 320 }, p: 3, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column' }
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
            Navigation
          </Typography>
          <IconButton onClick={toggleDrawer(false)} aria-label="close mobile navigation menu" sx={{ color: 'text.secondary', minWidth: 44, minHeight: 44 }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <List sx={{ flexGrow: 1, p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {menuConfig.sidebarData.map((item) => {
            const active = location.pathname === item.path;
            return (
              <ListItemButton
                key={item.id}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                sx={(theme) => ({
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: active ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                  color: active ? theme.palette.secondary.main : theme.palette.text.primary,
                  '&:hover': {
                    bgcolor: 'rgba(6, 182, 212, 0.08)'
                  }
                })}
              >
                <ListItemIcon sx={{ minWidth: 42, color: 'inherit', '& svg': { fontSize: 22 } }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{ fontWeight: active ? 800 : 600, fontSize: 16 }}
                />
              </ListItemButton>
            );
          })}
        </List>
        <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            Mohammed Minhaj Mahmood
          </Typography>
        </Box>
      </Drawer>

      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
    </>
  );
};

export default NavBar;



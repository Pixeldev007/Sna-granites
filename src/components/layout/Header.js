import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, useMediaQuery, Container } from '@mui/material';
import { Menu as MenuIcon, WhatsApp } from '@mui/icons-material';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleMenuOpen = (e) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  // Hard refresh navigation: ensures every click reloads the page and starts from the top.
  const handleHardNavigate = (e, path) => {
    e.preventDefault();
    // Disable browser scroll restoration and force to top before navigation
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (window.location.pathname === path) {
      // Replace to same path to avoid restoring prior scroll position
      window.location.replace(path);
    } else {
      window.location.href = path;
    }
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Products', path: '/products' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Career', path: '/career' },
    { text: 'Contact', path: '/contact' },
  ];

  // Legacy drawer removed; using MUI Menu for mobile navigation

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#03343b', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%' }}>
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component={Link}
              to="/"
              onClick={(e) => handleHardNavigate(e, '/')}
              sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: '#03343b',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                SB STONES
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="start"
                onClick={handleMenuOpen}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{ sx: { minWidth: 395, width: 395, borderRadius: 1, mt: 1, boxShadow: '0 8px 18px rgba(0,0,0,0.12)' } }}
              >
                {navItems.map((item, idx) => (
                  <MenuItem
                    key={item.text}
                    selected={location.pathname === item.path}
                    onClick={(e) => { handleMenuClose(); handleHardNavigate(e, item.path); }}
                    sx={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      letterSpacing: 0.3,
                      color: '#03343b',
                      '&:hover': { backgroundColor: '#a89060', color: '#ffffff' },
                      '&.Mui-selected': { backgroundColor: '#a89060', color: '#ffffff' },
                      '&.Mui-selected:hover': { backgroundColor: '#a89060', color: '#ffffff' },
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={NavLink}
                  to={item.path}
                  onClick={(e) => handleHardNavigate(e, item.path)}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  sx={{
                    color: '#03343b',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontSize: '0.9rem',
                    px: 4,
                    py: 0.5,
                    borderRadius: 0,
                    transition: 'all .2s ease',
                    fontFamily: 'Manrope, sans-serif',
                    '&:hover': { backgroundColor: '#a89060', color: '#ffffff', borderRadius: 0 },
                    '&.active': { backgroundColor: '#a89060', color: '#ffffff', borderRadius: 0 },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {/* Desktop-only WhatsApp Quick Enquiry */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap:3,
                  ml: 2,
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                <Box
                  component="a"
                  href="tel:+919894312345"
                  aria-label="Call or WhatsApp +91 98943 12345"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    textDecoration: 'none',
                    color: '#03343b',
                    fontFamily: 'Manrope, sans-serif',
                    '&:hover': { opacity: 0.9 },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'wa-blink 1s linear infinite',
                      '@keyframes wa-blink': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0 },
                        '100%': { opacity: 1 },
                      },
                      boxShadow: '0 2px 6px rgba(0,0,0,0.18)'
                    }}
                  >
                    <WhatsApp sx={{ color: '#ffffff', fontSize: 28 }} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1, fontFamily: 'Manrope, sans-serif', gap: 0.5 }}>
                    <Box sx={{ fontSize: 11, letterSpacing: 0.5, color: '#0f172a', lineHeight: 1.5, fontWeight: 400, fontFamily: 'Manrope, sans-serif' }}>CALL FOR QUICK ENQUIRY</Box>
                    <Box sx={{ fontSize: 20, fontWeight: 900, color: '#03343b', fontFamily: 'Manrope, sans-serif' }}>+91 98943 12345</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

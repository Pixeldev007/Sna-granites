import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Products', path: '/products' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Career', path: '/career' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        SNA GRANITES
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Button
              component={Link}
              to={item.path}
              sx={{ color: 'inherit', width: '100%', justifyContent: 'center', fontFamily: 'Manrope, sans-serif' }}
            >
              <ListItemText primary={item.text} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#03343b', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%' }}>
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component={Link}
              to="/"
              sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="SNA Granites"
                sx={{ height: { xs: 52, sm: 52, md: 62 }, width: 'auto', display: 'block' }}
              />
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={NavLink}
                  to={item.path}
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
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

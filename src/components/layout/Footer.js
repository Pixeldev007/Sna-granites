import React from 'react';
import { Box, Grid, Typography, Link as MuiLink, IconButton, Divider, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';
import CTAButton from '../common/CTAButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: '#03343b', color: 'white', py: { xs: 4, md: 6 }, mt: 'auto' }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 0 } }}>
        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }} 
          alignItems="flex-start" 
          justifyContent="space-between"
          sx={{ px: 0, width: '100%', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'flex-start', md: 'space-between' }, textAlign: { xs: 'left', md: 'initial' } }}
        >
          {/* Column 1: Brand + Description + Social */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left' }, flexBasis: { xs: '100%', md: 'auto' }, maxWidth: { xs: '100%', md: '25%' } }}>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 1, mb: 2 }}>
              SB Stones
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.9, 
              mb: 2, 
              lineHeight: 1.6,
              maxWidth: { xs: '100%', md: '280px' },
              wordWrap: 'break-word'
            }}>
              SB Stones is your source for quality granite monuments from India. We craft premium monuments and stone products with superior finishing and global delivery.
            </Typography>
            <MuiLink href="/about" underline="none" sx={{ color: '#b38b59', fontWeight: 700, display: 'block', mb: 2 }}>
              Know More
            </MuiLink>
            <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'flex-start' }, alignItems: { xs: 'flex-start' } }}>
              <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Facebook fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Instagram fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><LinkedIn fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Email fontSize="small" /></IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Useful Links */}
          <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'left' }, flexBasis: { xs: '100%', md: 'auto' }, maxWidth: { xs: '100%', md: '16.6667%' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, letterSpacing: 0.5 }}>
              USEFUL LINKS
            </Typography>
            <Stack spacing={1}>
              <MuiLink href="/" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Home</MuiLink>
              <MuiLink href="/about" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>About</MuiLink>
              <MuiLink href="/products" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Products</MuiLink>
              <MuiLink href="/faq" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>FAQ</MuiLink>
              <MuiLink href="/career" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Career</MuiLink>
              <MuiLink href="/contact" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Contact</MuiLink>
            </Stack>
          </Grid>

          {/* Column 3: Contact Information */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left' }, flexBasis: { xs: '100%', md: 'auto' }, maxWidth: { xs: '100%', md: '33.3333%' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: { xs: 1.5, md: 2 }, letterSpacing: 0.5 }}>
              CONTACT INFORMATION
            </Typography>
            <Stack spacing={1.5} sx={{ alignItems: { xs: 'flex-start' } }}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOn sx={{ mt: 0.2, fontSize: '1.1rem' }} />
                <Typography variant="body2" sx={{ fontSize: '0.875rem', textAlign: 'left' }}>
                  Contact Person : N. Arun Kumar<br />
                  858, Uthukuli Road, Kunnathur,<br />
                  Tamilnadu – 638103, India
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems={{ xs: 'flex-start', md: 'center' }}>
                <Phone sx={{ fontSize: '1.1rem' }} />
                <Box>
                  <MuiLink href="tel:+919894312345" color="inherit" underline="hover" sx={{ display: 'block', fontSize: '0.875rem' }}>+91 98943 12345</MuiLink>
                  <MuiLink href="tel:+19048464634" color="inherit" underline="hover" sx={{ display: 'block', fontSize: '0.875rem' }}>+1 904 846 4634</MuiLink>
                  <MuiLink href="tel:+918015755877" color="inherit" underline="hover" sx={{ display: 'block', fontSize: '0.875rem' }}>+91 80157 55877</MuiLink>
                </Box>
              </Stack>
              <Stack direction="row" spacing={1} alignItems={{ xs: 'flex-start', md: 'center' }}>
                <Email sx={{ fontSize: '1.1rem' }} />
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>arun@sbstones.com</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Column 4: Quick Enquiry + CTAs + Associations */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left' }, flexBasis: { xs: '100%', md: 'auto' }, maxWidth: { xs: '100%', md: '25%' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, letterSpacing: 0.5 }}>
              CALL FOR QUICK ENQUIRY
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#b38b59' }}>
              <MuiLink href="tel:+919894312345" underline="none" sx={{ color: 'inherit' }}>+91 98943 12345</MuiLink>
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <CTAButton component="a" href="mailto:arun@sbstones.com" sx={{ width: '100%', py: 1 }}>
                GET A SAMPLE
              </CTAButton>
              <CTAButton 
                component="a" 
                href="https://wa.me/919894312345" 
                sx={{ 
                  width: '100%', 
                  py: 1,
                  backgroundColor: 'transparent', 
                  color: '#b38b59', 
                  border: '1px solid #b38b59',
                  '&:hover': { 
                    backgroundColor: 'rgba(179,139,89,0.1)',
                    borderColor: '#b38b59'
                  } 
                }}
              >
                BOOK A CONSULTATION
              </CTAButton>
            </Stack>
            <Typography variant="subtitle2" sx={{ mb: 1.5, opacity: 0.9, fontSize: '0.75rem' }}>
              ASSOCIATION
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent={{ xs: 'flex-start', md: 'flex-start' }}>
              <Box
                component="img"
                src="/images/association-1.png"
                alt="Association 1"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20%',
                  objectFit: 'contain',
                  bgcolor: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 0 0 rgba(0,0,0,0)',
                  transition: 'box-shadow 200ms ease',
                  '&:hover': {
                    animation: 'footerBounce 700ms ease',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.25)'
                  },
                  '@keyframes footerBounce': {
                    '0%': { transform: 'translateY(0)' },
                    '30%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(0)' },
                    '80%': { transform: 'translateY(-6px)' },
                    '100%': { transform: 'translateY(0)' }
                  }
                }}
              />
              <Box
                component="img"
                src="/images/association-2.png"
                alt="Association 2"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20%',
                  objectFit: 'contain',
                  bgcolor: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 0 0 rgba(0,0,0,0)',
                  transition: 'box-shadow 200ms ease',
                  '&:hover': {
                    animation: 'footerBounce 700ms ease',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.25)'
                  },
                  '@keyframes footerBounce': {
                    '0%': { transform: 'translateY(0)' },
                    '30%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(0)' },
                    '80%': { transform: 'translateY(-6px)' },
                    '100%': { transform: 'translateY(0)' }
                  }
                }}
              />
              <Box
                component="img"
                src="/images/association-3.png"
                alt="Association 3"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20%',
                  objectFit: 'cover',
                  bgcolor: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 0 0 rgba(0,0,0,0)',
                  transition: 'box-shadow 200ms ease',
                  '&:hover': {
                    animation: 'footerBounce 700ms ease',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.25)'
                  },
                  '@keyframes footerBounce': {
                    '0%': { transform: 'translateY(0)' },
                    '30%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(0)' },
                    '80%': { transform: 'translateY(-6px)' },
                    '100%': { transform: 'translateY(0)' }
                  }
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ mt: 5, mb: 3, mx: { xs: 2, md: 4 } }}>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
        </Box>

        <Box sx={{ textAlign: { xs: 'left', md: 'center' }, px: { xs: 2, md: 4 } }}>
          <Typography variant="body2" color="inherit" sx={{ fontSize: '0.875rem' }}>
            Copyright {currentYear} SB Stones. All rights reserved.
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ fontSize: '0.875rem', mt: 0.5 }}>
            Designed by{' '}
            <MuiLink href="https://pixelperfect.co.in/" target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: '#b38b59', fontWeight: 700 }}>
              Pixel Perfect Software Solutions
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

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
            <MuiLink href="#" underline="none" sx={{ color: '#b38b59', fontWeight: 700, display: 'block', mb: 2 }}>
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
              <MuiLink href="/products" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Products</MuiLink>
              <MuiLink href="/gallery" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Gallery</MuiLink>
              <MuiLink href="/about" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>About</MuiLink>
              <MuiLink href="/contact" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>Contact Us</MuiLink>
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
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>+91 98765 43210</Typography>
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
              +91 98765 43210
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <CTAButton component="a" href="#sample" sx={{ width: '100%', py: 1 }}>
                GET A SAMPLE
              </CTAButton>
              <CTAButton 
                component="a" 
                href="#consultation" 
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
              <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
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
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

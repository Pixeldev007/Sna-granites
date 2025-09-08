import React from 'react';
import { Box } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  70% { transform: scale(1.8); opacity: 0; }
  100% { opacity: 0; }
`;

const FloatingWhatsApp = () => {
  const phone = '919894312345'; // +91 98943 12345
  const message = encodeURIComponent('Hello SB Stones!');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: '#25D366',
        boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
        zIndex: 1700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform .2s ease, box-shadow .2s ease, filter .2s ease',
        '&:hover': { transform: 'translateY(-3px) scale(1.05)', boxShadow: '0 10px 22px rgba(0,0,0,0.3)', filter: 'brightness(1.05)' },
        // Pulsing rings (kept outside the button and non-interactive)
        '::before': {
          content: '""',
          position: 'absolute',
          inset: -6,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.7)',
          animation: `${pulse} 2s ease-out infinite`,
          pointerEvents: 'none',
        },
        '::after': {
          content: '""',
          position: 'absolute',
          inset: -12,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.5)',
          animation: `${pulse} 2s ease-out infinite`,
          animationDelay: '.6s',
          pointerEvents: 'none',
        },
      }}
    >
      {/* WhatsApp icon to match header style */}
      <WhatsApp sx={{ color: '#ffffff', fontSize: 28, display: 'block' }} />
    </Box>
  );
};

export default FloatingWhatsApp;

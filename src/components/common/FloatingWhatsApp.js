import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  70% { transform: scale(1.8); opacity: 0; }
  100% { opacity: 0; }
`;

const FloatingWhatsApp = () => {
  const phone = '919876543210'; // +91 98765 43210
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
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
        <path d="M19.11 17.63c-.29-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.91 1.11-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.45-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.03 2.83 1.17 3.02.14.19 2.03 3.1 4.91 4.34 2.88 1.24 2.88.83 3.4.81.52-.02 1.68-.68 1.92-1.33.24-.66.24-1.22.17-1.33-.07-.12-.26-.19-.55-.33z" fill="#fff"/>
        <path d="M26.76 5.24C23.9 2.38 20.12 1 16.17 1 8.34 1 1.98 7.36 1.98 15.19c0 2.48.65 4.86 1.88 6.98L1 31l8.05-2.12c2.05 1.12 4.36 1.71 6.73 1.71h.01c7.83 0 14.19-6.36 14.19-14.19 0-3.95-1.38-7.73-4.22-10.59zM16.79 28.4h-.01c-2.17 0-4.29-.58-6.14-1.67l-.44-.26-4.77 1.26 1.28-4.65-.29-.48c-1.17-1.92-1.79-4.13-1.79-6.4 0-6.87 5.59-12.46 12.47-12.46 3.33 0 6.47 1.3 8.83 3.66 2.36 2.36 3.66 5.5 3.66 8.84 0 6.87-5.59 12.46-12.46 12.46z" fill="#fff"/>
      </svg>
    </Box>
  );
};

export default FloatingWhatsApp;

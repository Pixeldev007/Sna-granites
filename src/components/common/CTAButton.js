import React from 'react';
import { Button } from '@mui/material';

const CTAButton = ({ children, sx = {}, ...props }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: '#b38b59',
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        px: 3,
        py: 1.2,
        borderRadius: 1,
        border: 'none',
        boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
        transition: 'all .25s ease',
        '&:hover': {
          backgroundColor: '#9c7a4d',
          boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
          transform: 'translateY(-2px)'
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;

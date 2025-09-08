import React from 'react';
import { Box, Container, Link as MuiLink } from '@mui/material';

const TopBar = () => {
  return (
    <Box sx={{ backgroundColor: '#03343b', color: '#e7f0f3', fontSize: 13, fontWeight: 400 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1350, mx: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
        <Box>
        858, HUTHUKULI ROAD, KUNNATHUR, TAMILNADU,  INDIA.
        </Box>
        <Box>
          CALL FOR QUICK ENQUIRY&nbsp;
          <MuiLink href="tel:+919894312345" underline="none" sx={{ color: '#a89060', fontWeight: 700 }}>
            +91 98943 12345
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;

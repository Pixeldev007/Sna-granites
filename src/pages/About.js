import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#1a365d',
          color: 'white',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            About SNA Granites
          </Typography>
          <Typography variant="h6" component="p">
            Crafting excellence in stone since 2005
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2005, SNA Granites has grown to become one of the leading granite suppliers in South India. 
                What started as a small family business has evolved into a trusted name in the industry, serving 
                thousands of customers with premium quality granite products.
              </Typography>
              <Typography variant="body1" paragraph>
                Our journey began with a passion for natural stone and a commitment to quality craftsmanship. 
                Over the years, we've built strong relationships with quarries around the world, ensuring access 
                to the finest granite varieties.
              </Typography>
              <Typography variant="body1" paragraph>
                Today, our state-of-the-art facility houses cutting-edge machinery and a team of skilled artisans 
                who transform raw granite into stunning countertops, flooring, and architectural elements.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  height: '100%',
                  minHeight: 300,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" sx={{ p: 4, textAlign: 'center', color: '#666' }}>
                  [Company Image Placeholder]
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1a365d', mb: 6 }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
                    Quality
                  </Typography>
                  <Typography variant="body2">
                    We never compromise on quality. Every piece of granite undergoes rigorous inspection 
                    to ensure it meets our exacting standards.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
                    Integrity
                  </Typography>
                  <Typography variant="body2">
                    We conduct business with honesty and transparency, building trust with our customers 
                    through fair dealings and ethical practices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
                    Innovation
                  </Typography>
                  <Typography variant="body2">
                    We continuously invest in new technologies and techniques to improve our processes 
                    and offer cutting-edge solutions to our customers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  height: '100%',
                  minHeight: 300,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" sx={{ p: 4, textAlign: 'center', color: '#666' }}>
                  [Mission Image Placeholder]
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to transform spaces with the timeless beauty of natural granite while providing 
                exceptional value to our customers. We strive to:
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                <li>Source the finest quality granite from around the world</li>
                <li>Deliver innovative design solutions tailored to each client</li>
                <li>Maintain the highest standards of craftsmanship</li>
                <li>Build lasting relationships based on trust and reliability</li>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;

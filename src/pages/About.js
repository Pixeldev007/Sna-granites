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
                For over 60 years, SB Stones has been a proud, family-owned business in the Jet Black Granite industry. Our Chamrajnagar quarry, located in the heart of South India, is the source of some of the finest, most sought-after Jet Black Granite available globally. With a state-of-the-art manufacturing facility specializing in memorials and monuments, we are fully vertically integrated, managing every stage of production—from quarry extraction to global delivery.
              </Typography>
              <Typography variant="body1" paragraph>
                As a third-generation, family-owned business, we are committed to maintaining the legacy of excellence passed down through the years. Our long-standing reputation, paired with our modern manufacturing machinery and techniques, ensures that we continue to meet and exceed our clients’ expectations worldwide.
              </Typography>
              <Typography variant="body1" paragraph>
                Located in the heart of Chamrajnagar, our quarry is renowned for its rich, deep, and consistent color of Jet Black Granite. This mineral-rich region has supplied the world with premium granite for decades, and our quarry stands at the forefront of that legacy. Our quarry produces granite known for its density, flawless texture, and vibrant black hue. We are committed to providing a steady supply of high‑quality granite for a variety of applications.
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2, mb: 0 }}>
                <li>
                  <strong>For Custom Memorials &amp; Headstones:</strong> Our quarry’s granite is ideal for producing stunning and durable memorials, headstones, and commemorative items.
                </li>
                <li>
                  <strong>For Paving &amp; Flooring:</strong> We also provide smaller blocks and tiles, offering unmatched durability and elegance for outdoor and indoor paving projects.
                </li>
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

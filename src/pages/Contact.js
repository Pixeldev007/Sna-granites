import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message text
    const toNumber = '919894312345'; // +91 98943 12345
    const text = `ENQUIRY FORM\n\nName: ${formData.name} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCountry: ${formData.country}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const url = `https://wa.me/${toNumber}?text=${encodeURIComponent(text)}`;
    // Open WhatsApp chat with prefilled message
    window.open(url, '_blank');
    // Optional UI feedback
    alert('Opening WhatsApp to send your enquiry.');
    // Reset form
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      company: '',
      message: '',
    });
  };
  
  return (
    <>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#e9f1f4',
          color: '#1a365d',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'Rubik, sans-serif', fontSize: '44px', color: '#03343b' }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ color: '#334155', maxWidth: 720, mx: 'auto', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
            Our commitment stands strong to help our clients be more successful by offering a line of functional memorial products to better serve our clients.
          </Typography>
        </Container>
      </Box>
      
      {/* Contact Information and Form */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
          <Grid
            container
            columnSpacing={6}
            rowSpacing={6}
            alignItems="flex-start"
            sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' }, flexDirection: { xs: 'column', md: 'row' } }}
          >
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase', mb: 1 }}>
                GET IN TOUCH WITH US
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#475569', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                Book your appointment with us
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' }}>
                  CALL US NOW
                </Typography>
                <Typography variant="body1" sx={{ color: '#334155', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                  Talk to us and see how we can work together<br />
                  <strong>+91 98943 12345 </strong>
                  <br />
                  <strong>+91 80157 55877 </strong>
                  <br />
                  <strong>+1 904 846 4634</strong>
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' }}>
                  ENQUIRY FORM
                </Typography>
                <Typography variant="body1" sx={{ color: '#334155', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                  For any of your requirments of granites, you can reach us online. Kindly fill out the details below. SB STONES is in Kunnathur near to textile city coimbatore situated in the Southern state of Tamilnadu.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' }}>
                  OUR LOCATION
                </Typography>
                <Typography variant="body1" sx={{ color: '#334155', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                  Contact Person : N. Arun Kumar<br />
                  858, Uthukuli Road, Kunnathur,<br />
                  Tamilnadu – 638103, India<br />
                  Phone : +91 98943 12345<br />
                  e mail : arun@sbstones.com
                </Typography>
              </Box>
            </Grid>
            
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Box className="contact-form" sx={{ border: '2px dashed #e2e8f0', borderRadius: 2, p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' }}>
                  SEND A MESSAGE
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: '#b38b59',
                          color: 'white',
                          fontWeight: 'bold',
                          py: 1.5,
                          px: 4,
                          '&:hover': {
                            backgroundColor: '#9a7549',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Map Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
          <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <iframe
              title="SB Stones Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0413641392956!2d77.40789369678957!3d11.258367500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907c850ca3605%3A0xeb05b5f7bd087f7c!2sSNA%20Granites%20(Unit-1)!5e0!3m2!1sen!2sus!4v1757067254095!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

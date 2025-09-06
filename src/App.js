import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import './App.css';
import {
  ShoppingCartOutlined,
  AllInboxOutlined,
  MailOutline,
  RequestQuoteOutlined,
  ArchitectureOutlined,
  PrecisionManufacturingOutlined,
  FactCheckOutlined,
  PhotoCameraOutlined,
  LocalShippingOutlined,
  DoorFrontOutlined,
  ExpandMore,
  HelpOutlineOutlined,
  Star,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

// Inline FAQ page (styled per reference)
const FAQ = () => {
  const items = [
    { q: 'CAN I ORDER SMALL QUANTITIES?', a: 'Yes. We accept small quantity orders. Reach out with your requirements and we will provide options and pricing accordingly.' },
    { q: 'CAN YOU DELIVER THE CONSIGNMENT TO MY ADDRESS?', a: 'Yes. Depending on your location, we can arrange door delivery using an appropriate vehicle such as a flatbed truck or a box truck with liftgate.' },
    { q: 'IS THE PRICE QUOTED THE TOTAL COST OR IS THERE ANY EXTRA CHARGE?', a: 'Our quotes clearly mention inclusions. Any additional costs (like special handling, local taxes, or specific delivery requirements) will be communicated upfront before order confirmation.' },
    { q: 'WHAT IS THE MODE OF PAYMENT?', a: 'We support bank transfers as the standard mode of payment. Flexible terms may be discussed based on order size and relationship.' },
    { q: 'WHAT HAPPENS IF THERE IS DAMAGE DURING TRANSIT?', a: 'All shipments are fully insured. In the unlikely event of damage, please notify us immediately with photos. We will coordinate with the insurer and arrange a replacement or credit as applicable.' },
    { q: 'HOW ARE THE STONES PACKED?', a: 'Products are export-packed in sturdy, fumigated wooden crates with protective padding and clear labeling to ensure safe handling.' },
    { q: 'CAN YOU SUPPLY DESIGNS OTHER THAN THE DESIGNS IN YOUR BROCHURE?', a: 'Yes. We can produce custom designs as per drawings or references you provide, including bespoke sizes and finishes.' },
    { q: 'CAN YOU PROVIDE DRAWINGS/SKETCHES ALONG WITH PRICE QUOTE OR FOR THE MONUMENTS ORDERED?', a: 'Certainly. CAD drawings are provided for approval prior to production and can accompany price quotations upon request.' },
  ];

  // const cardStyles = { border: '1px solid #E5EAF0', borderRadius: 1, backgroundColor: '#ffffff' };

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {/* Banner */}
      <Box sx={{ backgroundColor: '#e8f1f5', py: 6, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 600, letterSpacing: 1, color: '#03343b', fontFamily: 'Rubik, sans-serif', fontSize: '44px' }}>
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Typography sx={{ color: '#5b6b7b', mt: 1, fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
            To help answer some of your questions, here are our most Frequently Asked Questions.
          </Typography>
        </Container>
      </Box>

      {/* FAQ list */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box sx={{ maxWidth: 1100, width: '100%', mx: 'auto', border: '1px solid #E5EAF0', borderRadius: 1, overflow: 'hidden', backgroundColor: '#ffffff' }}>
          {items.map((it, idx) => (
            <Accordion
              key={idx}
              disableGutters
              square
              sx={{
                '&:before': { display: 'none' },
                borderBottom: idx < items.length - 1 ? '1px solid #E5EAF0' : 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#03343b' }} />}
                sx={{
                  px: 3,
                  py: 1.75,
                  minHeight: 72,
                  '& .MuiAccordionSummary-content': {
                    my: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  },
                  '&.Mui-expanded': {
                    backgroundColor: '#e8f1f5',
                    minHeight: 72,
                  },
                  '&:hover': { backgroundColor: '#e8f1f5' },
                }}
              >
                <Box sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#03343b',
                  flex: '0 0 auto',
                }}>
                  <HelpOutlineOutlined sx={{ fontSize: 18 }} />
                </Box>
                <Typography sx={{ fontWeight: 800, letterSpacing: 0.8, color: '#03343b', fontFamily: 'Manrope, sans-serif', textTransform: 'uppercase', lineHeight: 1.5 }}>
                  {it.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2 }}>
                <Typography sx={{ color: '#334155', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>{it.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Order Process Flow */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}>
              ORDER PROCESS FLOW
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              If you need further assistance or have any specific details to include, don’t hesitate to ask!
            </Typography>
          </Box>

          {(() => {
            const teal = '#0C8A86';
            const light = '#E7EDF2';
            const dark = '#16324F';
            const hoverTeal = '#246f6b';
            const steps = [
              { id: 1, num: '01', title: 'SEND', subtitle: 'ENQUIRY', Icon: MailOutline },
              { id: 2, num: '02', title: 'GET', subtitle: 'QUOTE', Icon: RequestQuoteOutlined },
              { id: 3, num: '03', title: 'ORDER', subtitle: 'PLACEMENT', Icon: ShoppingCartOutlined },
              { id: 4, num: '04', title: 'CAD', subtitle: 'DRAWING', Icon: ArchitectureOutlined },
              { id: 5, num: '05', title: 'START', subtitle: 'PRODUCTION', Icon: PrecisionManufacturingOutlined },
              { id: 6, num: '06', title: 'QUALITY', subtitle: 'CHECKING', Icon: FactCheckOutlined },
              { id: 7, num: '07', title: 'COMPLETED', subtitle: 'PHOTOS', Icon: PhotoCameraOutlined },
              { id: 8, num: '08', title: 'PACKING', subtitle: '', Icon: AllInboxOutlined },
              { id: 9, num: '09', title: 'SHIPPING', subtitle: '', Icon: LocalShippingOutlined },
              { id: 10, num: '10', title: 'DOOR', subtitle: 'DELIVERY', Icon: DoorFrontOutlined },
            ];

            return (
              <Box sx={{ maxWidth: 1450, width: '100%', mx: 'auto', px: 0 }}>
                <Box sx={{
                  mt: { xs: 1, md: 4 },
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                  gap: 0,
                  border: '1px solid #D9E1E8',
                  borderRadius: 0,
                  overflow: 'hidden',
                }}>
                  {steps.map((step) => {
                    const isTeal = step.id % 2 === 1;
                    return (
                      <Box key={step.id} sx={{
                        height: 150,
                        backgroundColor: isTeal ? teal : light,
                        color: isTeal ? '#fff' : dark,
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
                        px: 3, gap: 1.2,
                        borderRight: { md: (step.id % 5 !== 0) ? '1px solid #D9E1E8' : 'none' },
                        borderTop: { md: step.id > 5 ? '1px solid #D9E1E8' : 'none' },
                        transition: 'background-color 0.2s ease, color 0.2s ease',
                        '&:hover': { backgroundColor: isTeal ? teal : hoverTeal, color: '#fff', cursor: !isTeal ? 'pointer' : 'default' },
                      }}>
                        <Typography sx={{ fontWeight: 800, opacity: 0.9 }}>{step.num}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <step.Icon sx={{ fontSize: 34 }} />
                          <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>{step.title}</Typography>
                            {step.subtitle && (
                              <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>{step.subtitle}</Typography>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                {/* Shipping paragraph below grid */}
                <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
                  <Typography sx={{ color: '#334155', textAlign: 'center', fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                    We handle <strong>shipping of your order</strong>, whether full container loads or part loads. We will arrange to deliver the crates directly to your address as per your requirements, using either a flatbed truck, a box truck with a liftgate, or directly in containers.
                  </Typography>
                </Box>
              </Box>
            );
          })()}
        </Container>
      </Box>
    </Box>
  );
};

// Inline Career page
const Career = () => {
  // Simple form state
  const [careerForm, setCareerForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const handleCareerChange = (e) => setCareerForm({ ...careerForm, [e.target.name]: e.target.value });
  // Submit via WhatsApp chat (opens WhatsApp with prefilled message)
  const handleCareerSubmit = (e) => {
    e.preventDefault();
    // Set your WhatsApp number here in international format without '+'
    const whatsappNumber = '919840299626'; // edit if needed
    const text = `CAREER APPLICATION\n\nName: ${careerForm.name}\nEmail: ${careerForm.email}\nPhone: ${careerForm.phone}\nCity: ${careerForm.city}\n\nMessage:\n${careerForm.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Small uppercase label above inputs like the reference
  const FieldLabel = ({ children, required }) => (
    <Typography sx={{
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.3,
      color: '#0f172a',
      textTransform: 'uppercase',
      mb: 0.8,
      fontFamily: 'Manrope, sans-serif'
    }}>
      {children}{required ? ' *' : ''}
    </Typography>
  );

  // Testimonials like Home page
  const testimonialsRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w < 600) return setItemsPerView(1);
      if (w < 900) return setItemsPerView(2);
      if (w < 1200) return setItemsPerView(3);
      return setItemsPerView(4);
    };
    setByWidth();
    window.addEventListener('resize', setByWidth);
    return () => window.removeEventListener('resize', setByWidth);
  }, []);
  const slideTestimonials = (dir = 1) => {
    const el = testimonialsRef.current;
    if (!el) return;
    const card = el.querySelector('.testimonial-card');
    const gapPx = 24;
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth / itemsPerView;
    el.scrollBy({ left: dir * (cardWidth + gapPx) * itemsPerView, behavior: 'smooth' });
  };
  const reviews = [
    { id: 1, country: 'Ireland', flag: '🇮🇪', text: 'Receiving my second order from SB Stones was a breeze. Everything from quality to door delivery was exactly what we needed.' },
    { id: 2, country: 'United Kingdom', flag: '🇬🇧', text: 'Made ordering stress-free! Prompt responses, clear CAD drawings, and photos before dispatch made the whole process smooth.' },
    { id: 3, country: 'Germany', flag: '🇩🇪', text: 'Very impressed with the first order. Secure packing and excellent quality. Looking forward to many more orders.' },
    { id: 4, country: 'Australia', flag: '🇦🇺', text: 'Top-quality granite and craftsmanship. We are very happy with the service and confident in their ability to meet our needs.' },
    { id: 5, country: 'United States', flag: '🇺🇸', text: 'Great communication throughout and on-time shipping. The monuments arrived in perfect condition.' },
  ];

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {/* Banner */}
      <Box sx={{ backgroundColor: '#e8f1f5', py: 6, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 600, letterSpacing: 1, color: '#03343b', fontFamily: 'Rubik, sans-serif', fontSize: '44px' }}>
            CAREERS
          </Typography>
          <Typography sx={{ color: '#5b6b7b', mt: 1, fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
            SB Stones offers opportunities to passionate people who want to contribute to our growth.
          </Typography>
        </Container>
      </Box>

      {/* Resume Form */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box sx={{ maxWidth: 1100, mx: 'auto', border: '2px dashed #e2e8f0', borderRadius: 2, p: { xs: 2, md: 4 }, backgroundColor: '#fff' }}>
          <Typography sx={{ fontWeight: 700, color: '#03343b', mb: 2, textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif' }}>
            Send Your Resume
          </Typography>
          <Box component="form" onSubmit={handleCareerSubmit}>
            {/* Top section: 4 fields in 2 columns x 2 rows on desktop, 1 column on mobile */}
            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, alignItems: 'end' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FieldLabel required>YOUR NAME</FieldLabel>
                <TextField fullWidth label="Your Name" name="name" value={careerForm.name} onChange={handleCareerChange} required placeholder="Enter Your Name"
                  size="small" InputLabelProps={{ shrink: false }} sx={{
                    '& .MuiOutlinedInput-root': { backgroundColor: '#e5edf2', borderRadius: 0 },
                    '& .MuiInputBase-root': { height: 40 }
                  }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FieldLabel required>EMAIL ID</FieldLabel>
                <TextField fullWidth label="Email ID" name="email" type="email" value={careerForm.email} onChange={handleCareerChange} required placeholder="Enter Your Email"
                  size="small" InputLabelProps={{ shrink: false }} sx={{
                    '& .MuiOutlinedInput-root': { backgroundColor: '#e5edf2', borderRadius: 0 },
                    '& .MuiInputBase-root': { height: 40 }
                  }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FieldLabel required>PHONE NO.</FieldLabel>
                <TextField fullWidth label="Phone No." name="phone" value={careerForm.phone} onChange={handleCareerChange} required placeholder="Enter Phone No."
                  size="small" InputLabelProps={{ shrink: false }} sx={{
                    '& .MuiOutlinedInput-root': { backgroundColor: '#e5edf2', borderRadius: 0 },
                    '& .MuiInputBase-root': { height: 40 }
                  }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FieldLabel required>CHOOSE CITY</FieldLabel>
                <FormControl fullWidth size="small" sx={{ '& .MuiInputBase-root': { height: 40 }, '& .MuiOutlinedInput-root': { backgroundColor: '#e5edf2', borderRadius: 0 } }}>
                  <InputLabel id="city-label" shrink={false}></InputLabel>
                  <Select labelId="city-label" name="city" value={careerForm.city} onChange={handleCareerChange} required displayEmpty>
                    <MenuItem value="" disabled>Choose...</MenuItem>
                    <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Upload (full width), Message and Submit */}
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
              <FieldLabel required>UPLOAD RESUME</FieldLabel>
              <Button variant="outlined" component="label" sx={{ width: '100%', height: 40, justifyContent: 'flex-start', backgroundColor: '#e5edf2', borderColor: '#cbd5e1', color: '#334155', textTransform: 'none', borderRadius: 0 }}>
                Choose file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <FieldLabel>WRITE MESSAGE</FieldLabel>
              <TextField fullWidth multiline minRows={4} label="Write Message" name="message" value={careerForm.message} onChange={handleCareerChange} placeholder="Write Message"
                InputLabelProps={{ shrink: false }} sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#e5edf2', borderRadius: 0 } }} />
              <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#a89060', color: '#fff', fontFamily: 'Manrope, sans-serif', fontWeight: 700, textTransform: 'uppercase', borderRadius: 0, px: 3, '&:hover': { backgroundColor: '#967f53' } }}>
                Send Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Testimonials Section (reuse Home style) */}
      <Box id="careers-testimonials" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e8f1f5' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}>
              WHAT OUR CLIENTS SAY
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              We serve customers in various countries around the world.
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', maxWidth: 1450, mx: 'auto' }}>
            <Box
              ref={testimonialsRef}
              sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                px: 1,
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {reviews.map((review) => (
                <Box
                  key={review.id}
                  className="testimonial-card"
                  sx={{
                    scrollSnapAlign: 'start',
                    flex: {
                      xs: '0 0 100%',
                      sm: '0 0 calc((100% - 24px) / 2)',
                      md: '0 0 calc((100% - 72px) / 4)',
                    },
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    p: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    border: '1px solid #E5EAF0',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.5, color: '#a89060', mb: 2 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} sx={{ fontSize: 18 }} />
                    ))}
                  </Box>
                  <Typography sx={{ color: '#334155', mb: 3, lineHeight: 1.8 }}>
                    {review.text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                      {review.flag}
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: '#16324F' }}>{review.country}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Button onClick={() => slideTestimonials(-1)} className="testimonial-arrow left" sx={{ position: 'absolute', top: '50%', left: -8, transform: 'translateY(-50%)', minWidth: 40, minHeight: 40, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.35)', color: '#fff', '&:hover': { backgroundColor: 'rgba(0,0,0,0.55)' }, display: { xs: 'none', sm: 'flex' } }}>
              <ChevronLeft />
            </Button>
            <Button onClick={() => slideTestimonials(1)} className="testimonial-arrow right" sx={{ position: 'absolute', top: '50%', right: -8, transform: 'translateY(-50%)', minWidth: 40, minHeight: 40, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.35)', color: '#fff', '&:hover': { backgroundColor: 'rgba(0,0,0,0.55)' }, display: { xs: 'none', sm: 'flex' } }}>
              <ChevronRight />
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBar />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}

export default App;

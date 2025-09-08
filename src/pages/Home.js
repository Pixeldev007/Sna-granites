import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/hooks/useScrollAnimation';
import HeroSlider from '../components/HeroSlider';
import {
  ShoppingCartOutlined,
  AllInboxOutlined,
  ShieldOutlined,
  CreditCardOutlined,
  DesignServicesOutlined,
  FactoryOutlined,
  MailOutline,
  RequestQuoteOutlined,
  ArchitectureOutlined,
  PrecisionManufacturingOutlined,
  FactCheckOutlined,
  PhotoCameraOutlined,
  LocalShippingOutlined,
  DoorFrontOutlined,
  Star,
  ZoomIn,
  Close,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';

const Home = () => {
  // Hero slides (place images in public/images as slide-1.png, slide-2.png)
  const heroSlides = [
    { id: 1, image: '/images/slide-1.png', title: 'QUALITY', subtitle: 'GRANITE MONUMENTS FROM INDIA' },
    { id: 2, image: '/images/slide-2.png', title: 'DELIVERY', subtitle: 'PROMPT DELIVERY TO YOUR PLACE' },
  ];

  // Product categories
  const products = [
    {
      id: 1,
      title: 'Monuments',
      description: 'Headstones, markers, and custom memorials',
      image: '/images/premium-1.jpg',
    },
    {
      id: 2,
      title: 'Slabs',
      description: 'Polished slabs for fabrication and projects',
      image: '/images/premium-2.png',
    },
    {
      id: 3,
      title: 'Rough Blocks',
      description: 'Premium quarry blocks for processing',
      image: '/images/premium-3.png',
    },
  ];

  const [imageErrors, setImageErrors] = useState({});
  const animatedElements = useScrollAnimation(0.1);

  // Lightbox state for designs
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const totalDesigns = 15;
  const getSrcByIndex = useCallback((idx) => `/images/products/${idx + 1}.png`, []);
  const getModelByIndex = useCallback((idx) => `AG-11${String(idx + 1).padStart(2, '0')}`, []);
  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxSrc(getSrcByIndex(idx));
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => {
      const nextIdx = (i - 1 + totalDesigns) % totalDesigns;
      setLightboxSrc(getSrcByIndex(nextIdx));
      return nextIdx;
    });
  }, [getSrcByIndex, totalDesigns]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => {
      const nextIdx = (i + 1) % totalDesigns;
      setLightboxSrc(getSrcByIndex(nextIdx));
      return nextIdx;
    });
  }, [getSrcByIndex, totalDesigns]);
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, lightboxIndex, showPrev, showNext]);

  // About section simple slider images
  const aboutSlides = ['/images/about-1.png', '/images/about-3.png', '/images/about-4.png'];
  const [aboutIdx, setAboutIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAboutIdx(i => (i + 1) % aboutSlides.length), 3000);
    return () => clearInterval(t);
  }, [aboutSlides.length]);

  // Testimonials slider
  const testimonialsRef = useRef(null);
  const [testimonialItemsPerView, setTestimonialItemsPerView] = useState(4);
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w < 600) return setTestimonialItemsPerView(1);
      if (w < 900) return setTestimonialItemsPerView(2);
      if (w < 1200) return setTestimonialItemsPerView(3);
      return setTestimonialItemsPerView(4);
    };
    setByWidth();
    window.addEventListener('resize', setByWidth);
    return () => window.removeEventListener('resize', setByWidth);
  }, []);
  const slideTestimonials = (dir = 1) => {
    const el = testimonialsRef.current;
    if (!el) return;
    const card = el.querySelector('.testimonial-card');
    const gapPx = 24; // gap=3 in MUI spacing (8*3)
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth / testimonialItemsPerView;
    el.scrollBy({ left: dir * (cardWidth + gapPx) * testimonialItemsPerView, behavior: 'smooth' });
  };

  // Popular Designs slider (below Order Process Flow)
  const designsSliderRef = useRef(null);
  const [designsItemsPerView, setDesignsItemsPerView] = useState(5);
  const [designsPage, setDesignsPage] = useState(0);
  const designsPagesCount = Math.ceil(totalDesigns / designsItemsPerView);
  const [autoPlayDesigns, setAutoPlayDesigns] = useState(true);
  const designsGapPx = 24; // keep in sync with sx gap=3
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w < 600) return setDesignsItemsPerView(2);
      if (w < 900) return setDesignsItemsPerView(3);
      if (w < 1200) return setDesignsItemsPerView(4);
      return setDesignsItemsPerView(5);
    };
    setByWidth();
    window.addEventListener('resize', setByWidth);
    return () => window.removeEventListener('resize', setByWidth);
  }, []);
  const slidePopularDesignsOne = useCallback((dir = 1) => {
    const el = designsSliderRef.current;
    if (!el) return;
    const card = el.querySelector('.popular-design-card');
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth / designsItemsPerView;
    const distance = dir * (cardWidth + designsGapPx);
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2; // near end
    if (dir > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    const atStart = el.scrollLeft <= 2;
    if (dir < 0 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
      return;
    }
    el.scrollBy({ left: distance, behavior: 'smooth' });
  }, [designsItemsPerView, designsGapPx]);
  const updateDesignsPageFromScroll = () => {
    const el = designsSliderRef.current;
    if (!el) return;
    const card = el.querySelector('.popular-design-card');
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth / designsItemsPerView;
    const pageWidth = (cardWidth + designsGapPx) * designsItemsPerView;
    const page = Math.round(el.scrollLeft / Math.max(pageWidth, 1));
    const clamped = Math.min(Math.max(page, 0), designsPagesCount - 1);
    setDesignsPage(clamped);
  };
  useEffect(() => {
    if (!autoPlayDesigns) return;
    const id = setInterval(() => slidePopularDesignsOne(1), 2000); // faster auto-slide, one card at a time
    return () => clearInterval(id);
  }, [autoPlayDesigns, designsItemsPerView, slidePopularDesignsOne]);

  // removed unused slidePopularDesigns to satisfy eslint (no-unused-vars)

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} interval={6000} height="77vh" />

      {/* About Section */}
      <Box 
        id="about-section" 
        className={`animation-trigger ${animatedElements['about-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 8, backgroundColor: '#ffffff' }}
      >
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 2, md: 6 }} alignItems="flex-start">
            {/* Left Column - Granite Monument Images */}
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative' }}>
                {/* Main Monument Image */}
                <Box
                  sx={{
                    width: { xs: 395, sm: 420, md: 700 },
                    maxWidth: '100%',
                    height: { xs: 300, sm: 340, md: 400 },
                    backgroundColor: '#f5f5f5',
                    overflow: 'hidden',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    position: 'relative',
                    mx: 'auto'
                  }}
                >
                  {aboutSlides.map((src, i) => (
                    <Box
                      key={src}
                      component="img"
                      src={src}
                      alt="SB Stones Monument Samples"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: i === aboutIdx ? 1 : 0,
                        transition: 'opacity .35s ease'
                      }}
                    />
                  ))}
                </Box>
                {/* Decorative underline like reference */}
                <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, ml: { md: 6 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Box sx={{ width: 40, height: 4, bgcolor: '#0C8A86', borderRadius: 2 }} />
                  <Box sx={{ width: 18, height: 4, bgcolor: '#0C8A86', borderRadius: 2 }} />
                </Box>
                
                {/* Secondary Equipment/Process Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: -30,
                    width: 160,
                    height: 120,
                    backgroundColor: '#f5f5f5',
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/images/about-2.png"
                    alt="Granite Processing Equipment"
                    style={{ 
                      width: '500px', 
                      height: '100px',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<Typography sx={{ color: "#666", fontSize: "0.8rem", textAlign: "center" }}>Processing</Typography>';
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Column - Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ pl: { md: 4 }, maxWidth: 600, width: '100%' }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1a365d',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    letterSpacing: '0.5px'
                  }}
                >
                  ABOUT SB Stones
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#b38b59',
                    mb: 3,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    letterSpacing: '0.3px'
                  }}
                >
                  50+ YEARS IN GRANITE BUSINESS
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 2.5, md: 1.25 },
                    lineHeight: 1.6,
                    color: '#555',
                    fontSize: '1rem',
                    maxWidth: { md: 500 }
                  }}
                >
                  For over 60 years, SB Stones has been a proud, family-owned business in the Jet Black Granite industry. Our Chamrajnagar quarry, located in the heart of South India, is the source of some of the finest, most sought-after Jet Black Granite available globally. With a state-of-the-art manufacturing facility specializing in memorials and monuments, we are fully vertically integrated, managing every stage of production—from quarry extraction to global delivery.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 2.5,
                    lineHeight: 1.8,
                    color: '#555',
                    fontSize: '1rem',
                    maxWidth: { md: 500 }
                  }}
                >
                  As a third-generation, family-owned business, we are committed to maintaining the legacy of excellence passed down through the years. Our long-standing reputation, paired with our modern manufacturing machinery and techniques, ensures that we continue to meet and exceed our clients’ expectations worldwide.
                </Typography>
              </Box>
            </Grid>

            {/* Full-width About paragraphs */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  color: '#555',
                  fontSize: '1rem'
                }}
              >
                Located in the heart of Chamrajnagar, our quarry is renowned for its rich, deep, and consistent color of Jet Black Granite. This mineral-rich region has supplied the world with premium granite for decades, and our quarry stands at the forefront of that legacy. Our quarry produces granite known for its density, flawless texture, and vibrant black hue. We are committed to providing a steady supply of high‑quality granite for a variety of applications.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="ul" sx={{ pl: 2, color: '#555', fontSize: '1rem', lineHeight: 1.8, mb: 3 }}>
                <li>
                  <strong>For Custom Memorials &amp; Headstones:</strong> Our quarry’s granite is ideal for producing stunning and durable memorials, headstones, and commemorative items.
                </li>
                <li>
                  <strong>For Paving &amp; Flooring:</strong> We also provide smaller blocks and tiles, offering unmatched durability and elegance for outdoor and indoor paving projects.
                </li>
              </Typography>
            </Grid>
            {/* Buttons moved below full-width text */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/about"
                  sx={{
                    backgroundColor: '#b38b59',
                    color: 'white',
                    fontWeight: 'bold',
                    py: 1.5,
                    px: 4,
                    borderRadius: 0,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: '#9a7549',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(179, 139, 89, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  KNOW MORE
                </Button>
                
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#1a365d',
                    color: '#1a365d',
                    fontWeight: 'bold',
                    py: 1.5,
                    px: 4,
                    borderRadius: 0,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    borderWidth: '2px',
                    '&:hover': {
                      backgroundColor: '#1a365d',
                      color: 'white',
                      borderWidth: '2px',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(26, 54, 93, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  component={Link}
                  to="/contact"
                >
                  CONTACT US
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        id="features-section"
        className={`animation-trigger ${animatedElements['features-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: '700',
                letterSpacing: 2,
                color: '#16324F',
              }}
            >
              FEATURES
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              We offer a comprehensive range of memorials in various colors.
            </Typography>
            <Typography sx={{ color: '#5b6b7b' }}>
              We also produce custom designs as per specifications given by the customer.
            </Typography>
          </Box>

          {(() => {
            const items = [
              { id: 1, titleTop: 'ORDER', titleBottom: 'SMALL QUANTITY', Icon: ShoppingCartOutlined, highlight: true },
              { id: 2, titleTop: 'EXPORT', titleBottom: 'PACKING', Icon: AllInboxOutlined, highlight: false },
              { id: 3, titleTop: 'FULLY', titleBottom: 'INSURED', Icon: ShieldOutlined, highlight: true },
              { id: 4, titleTop: 'EASY', titleBottom: 'PAYMENT TERMS', Icon: CreditCardOutlined, highlight: false },
              { id: 5, titleTop: 'CUSTOM', titleBottom: 'DESIGN', Icon: DesignServicesOutlined, highlight: true },
              { id: 6, titleTop: 'DIRECT', titleBottom: 'FROM FACTORY', Icon: FactoryOutlined, highlight: false },
            ];

            const teal = '#0C8A86';
            const light = '#E7EDF2';
            const dark = '#16324F';
            const hoverTeal = '#246f6b';

            return (
              <Box sx={{ maxWidth: 1350, width: '100%', mx: 'auto', px: 0 }}>
                <Box
                  sx={{
                    mt: { xs: 1, md: 4 },
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(6, 1fr)',
                    },
                    columnGap: { xs: '0px', md: 0 },
                    rowGap: 0.5,
                    border: '1px solid #D9E1E8',
                    borderRadius: 0,
                    overflow: 'hidden',
                  }}
                >
                  {items.map((f, idx) => (
                    <Box
                      key={f.id}
                      id={`feature-${f.id}`}
                      className={`animation-trigger ${animatedElements[`feature-${f.id}`] ? 'fade-in-up' : ''}`}
                      sx={{
                        height: 140,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        px: 3,
                        backgroundColor: f.highlight ? teal : light,
                        color: f.highlight ? '#fff' : dark,
                        minWidth: 0,
                        borderRight: { xs: 'none', md: idx < items.length - 1 ? '1px solid #D9E1E8' : 'none' },
                        boxShadow: 'none',
                        transition: 'background-color 0.2s ease, color 0.2s ease, opacity 0.6s ease-out, transform 0.6s ease-out',
                        '&:hover': {
                          // All boxes (1 to 6) change to hoverTeal and white text on hover
                          backgroundColor: hoverTeal,
                          color: '#fff',
                          cursor: 'pointer',
                          '& .feature-icon': {
                            // Reduce motion on mobile, full motion on desktop
                            transform: { xs: 'translateX(100px)', sm: 'translateX(80px)', md: 'translateX(150px)' }
                          }
                        },
                        '&:active .feature-icon': {
                          transform: { xs: 'translateX(100px)', sm: 'translateX(80px)', md: 'translateX(150px)' }
                        },
                        opacity: animatedElements[`feature-${f.id}`] ? 1 : 0,
                        transform: animatedElements[`feature-${f.id}`] ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <f.Icon className="feature-icon" sx={{ fontSize: 34, transition: { xs: 'transform 160ms ease', md: 'transform 220ms ease' }, transformOrigin: 'center', willChange: 'transform' }} />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>
                          {f.titleTop}
                        </Typography>
                        <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>
                          {f.titleBottom}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })()}
        </Container>
      </Box>

      {/* Wide Range of Designs */}
      <Box
        id="designs-section"
        className={`animation-trigger ${animatedElements['designs-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e9f1f4' }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1600, mx: 'auto', width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 700, letterSpacing: 2, color: '#16324F' }}
            >
              WIDE RANGE OF DESIGNS
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              We offer a comprehensive range of memorials in various colors.
            </Typography>
            <Typography sx={{ color: '#5b6b7b' }}>
              We also produce custom designs as per specifications given by the customer.
            </Typography>
          </Box>

          {(() => {
            const items = Array.from({ length: 15 }).map((_, i) => ({
              id: i + 1,
              model: `AG-11${String(i + 1).padStart(2, '0')}`,
              image: `/images/products/${i + 1}.png`,
            }));

            return (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, gap: 3 }}>
                {items.map((d, idx) => (
                  <Box
                    key={d.id}
                    id={`design-${d.id}`}
                    className={`animation-trigger ${animatedElements[`design-${d.id}`] ? 'fade-in-up' : ''}`}
                    sx={{
                      opacity: animatedElements[`design-${d.id}`] ? 1 : 0,
                      transform: animatedElements[`design-${d.id}`] ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #E5EAF0',
                        borderRadius: 1,
                        p: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        '&:hover': { boxShadow: '0 8px 18px rgba(0,0,0,0.12)' },
                      }}
                    >
                      <Box sx={{ position: 'relative', height: 200, backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer',
                                 '&:hover img': { transform: 'scale(0.95)' },
                                 '&:hover .zoom-overlay': { opacity: 1 } }}>
                        <img
                          src={d.image}
                          alt={d.model}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                          onError={(e) => { e.currentTarget.src = '/images/about-1.png'; }}
                          onClick={() => openLightbox(idx)}
                        />
                        {/* Zoom overlay */}
                        <Box
                          className="zoom-overlay"
                          onClick={() => openLightbox(idx)}
                          sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
                          aria-label={`Zoom ${d.model}`}
                        >
                          <ZoomIn style={{ fontSize: 22 }} />
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#16324F' }}>
                        <Box>
                          <Typography sx={{ fontSize: 12, color: '#64748b' }}>MODEL NO.</Typography>
                          <Typography sx={{ fontWeight: 800, fontSize: 14 }}>{d.model}</Typography>
                        </Box>
                        {/* Mailto CTA matching snippet */}
                        {(() => {
                          const imgUrl = typeof window !== 'undefined' ? `${window.location.origin}${d.image}` : d.image;
                          const subject = `Request a Quote for ${d.model}`;
                          const body = `I am interested to get a quote on this model ${d.model}, Modal Image - ${imgUrl}`;
                          const mailHref = `mailto:info@sbstones.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=`;
                          return (
                            <a href={mailHref} target="_blank" rel="noopener noreferrer" className="quote-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#b38b59', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>
                              <MailOutline sx={{ fontSize: 16, color: '#b38b59' }} />
                              <span>Get a Quote</span>
                            </a>
                          );
                        })()}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            );
          })()}
        </Container>
      </Box>

      {/* Premium Section */}
      <Box 
        id="premiums-section" 
        className={`animation-trigger ${animatedElements['products-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 8, backgroundColor: '#f5f5f5' }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 6 }}
          >
            Our Premium Collection
          </Typography>
          <Box sx={{ maxWidth: 1600, width: '100%', mx: 'auto', px: { xs: 2, md: 0 } }}>
            <Grid container spacing={4} justifyContent="center">
              {products.map((product, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={12} 
                  md={12} 
                  key={product.id}
                  id={`product-${product.id}`}
                  className={`animation-trigger ${animatedElements[`product-${product.id}`] ? 'fade-in-up' : ''}`}
                  sx={{
                    opacity: animatedElements[`product-${product.id}`] ? 1 : 0,
                    transform: animatedElements[`product-${product.id}`] ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ maxWidth: 700, width: '100%', mx: 'auto' }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="product-card">
                    <CardMedia
                      component="div"
                      height={200}
                      sx={{
                        height: 300,
                        backgroundColor: imageErrors[product.id] ? '#b38b59' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                    >
                      {imageErrors[product.id] ? (
                        <Typography>Image not available</Typography>
                      ) : (
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          onError={() => handleImageError(product.id)}
                          onLoad={() => setImageErrors(prev => ({ ...prev, [product.id]: false }))}
                        />
                      )}
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1, minHeight: 120 }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {product.title}
                      </Typography>
                      <Typography>{product.description}</Typography>
                    </CardContent>
                  </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#1a365d',
                color: '#1a365d',
                fontWeight: 'bold',
                py: 1.5,
                px: 4,
                '&:hover': {
                  backgroundColor: '#1a365d',
                  color: 'white',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
                },
                transition: 'all 0.3s ease'
              }}
              component={Link}
              to="/products"
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Order Process Flow */}
      <Box
        id="order-process-flow"
        className={`animation-trigger ${animatedElements['order-process-flow'] ? 'fade-in-up' : ''}`}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}
            >
              ORDER PROCESS FLOW
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              If you need further assistance or have any specific details to include, don’t hesitate to ask!
            </Typography>
          </Box>

          {/* 10-step grid: 2 rows x 5 columns, 1450px centered */}
          <Box sx={{ maxWidth: 1100, width: '100%', mx: 'auto' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                columnGap: { xs: '0px', md: 0 },
                rowGap: 1,
                border: '1px solid #D9E1E8',
                overflow: 'hidden',
              }}
            >
              {[
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
              ].map((step, idx, arr) => {
                const teal = '#0C8A86';
                const light = '#E7EDF2';
                const dark = '#16324F';
                const hoverTeal = '#246f6b';
                const isTeal = step.id % 2 === 1; // 1,3,5,7,9 teal like screenshot
                return (
                  <Box
                    key={step.id}
                    sx={{
                      height: 150,
                      backgroundColor: isTeal ? teal : light,
                      color: isTeal ? '#fff' : dark,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: 1.2,
                      px: 3,
                      borderRight: { md: step.id % 5 !== 0 ? '1px solid #D9E1E8' : 'none' },
                      borderTop: { md: step.id > 5 ? '1px solid #D9E1E8' : 'none' },
                      '&:hover': { backgroundColor: hoverTeal, color: '#fff', cursor: 'pointer' },
                      '&:hover .opf-icon': { transform: 'rotate(360deg) scale(1.06)' },
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, opacity: 0.9 }}>
                      {step.num}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <step.Icon className="opf-icon" sx={{ fontSize: 34, transition: 'transform 220ms ease' }} />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>
                          {step.title}
                        </Typography>
                        {step.subtitle && (
                          <Typography sx={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, lineHeight: 1.1 }}>
                            {step.subtitle}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
            <Typography sx={{ color: '#334155', textAlign: 'center' }}>
              We handle shipping of your order, whether full container loads or part loads. We will arrange to deliver the crates
              directly to your address as per your requirements, using either a flatbed truck, a box truck with a liftgate, or directly in containers.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Popular Designs (Slider) */}
      <Box
        id="popular-designs"
        className={`animation-trigger ${animatedElements['popular-designs'] ? 'fade-in-up' : ''}`}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}>
              POPULAR DESIGNS
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              If you need further assistance or have any specific details to include, don’t hesitate to ask!
            </Typography>
          </Box>

          {(() => {
            const items = Array.from({ length: totalDesigns }).map((_, i) => ({
              id: i + 1,
              model: `AG-11${String(i + 1).padStart(2, '0')}`,
              image: `/images/products/${i + 1}.png`,
            }));
            const teal = '#0C8A86';

            return (
              <Box sx={{ position: 'relative', maxWidth: 1450, mx: 'auto' }}>
                {/* Track */}
                <Box
                  ref={designsSliderRef}
                  sx={{
                    display: 'flex',
                    gap: 3,
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    scrollSnapType: 'x mandatory',
                    px: 1,
                    '&::-webkit-scrollbar': { display: 'none' },
                  }}
                  onMouseEnter={() => setAutoPlayDesigns(false)}
                  onMouseLeave={() => setAutoPlayDesigns(true)}
                  onScroll={updateDesignsPageFromScroll}
                >
                  {items.map((d, idx) => (
                    <Box
                      key={d.id}
                      className="popular-design-card"
                      sx={{
                        scrollSnapAlign: 'start',
                        flex: {
                          xs: '0 0 calc((100% - 24px) / 2)',
                          sm: '0 0 calc((100% - 48px) / 3)',
                          md: '0 0 calc((100% - 96px) / 5)',
                        },
                        backgroundColor: '#ffffff',
                        borderRadius: 1,
                        p: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        border: '1px solid #E5EAF0',
                      }}
                    >
                      <Box sx={{ position: 'relative', height: 220, backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer',
                                 '&:hover img': { transform: 'scale(0.95)' },
                                 '&:hover .zoom-overlay': { opacity: 1 } }}>
                        <img
                          src={d.image}
                          alt={d.model}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                          onError={(e) => { e.currentTarget.src = '/images/about-1.png'; }}
                          onClick={() => openLightbox(idx)}
                        />
                        <Box className="zoom-overlay" onClick={() => openLightbox(idx)} sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s ease' }}>
                          <ZoomIn style={{ fontSize: 22 }} />
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#16324F', mt: 1.5 }}>
                        <Box>
                          <Typography sx={{ fontSize: 12, color: '#64748b' }}>MODEL NO.</Typography>
                          <Typography sx={{ fontWeight: 800, fontSize: 14 }}>{d.model}</Typography>
                        </Box>
                        {(() => {
                          const imgUrl = typeof window !== 'undefined' ? `${window.location.origin}${d.image}` : d.image;
                          const subject = `Request a Quote for ${d.model}`;
                          const body = `I am interested to get a quote on this model ${d.model}, Modal Image - ${imgUrl}`;
                          const mailHref = `mailto:info@sbstones.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=`;
                          return (
                            <a href={mailHref} target="_blank" rel="noopener noreferrer" className="quote-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#b38b59', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>
                              <MailOutline sx={{ fontSize: 16, color: '#b38b59' }} />
                              <span>Get a Quote</span>
                            </a>
                          );
                        })()}
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Dots */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
                  {Array.from({ length: designsPagesCount }).map((_, i) => (
                    <Box key={i} onClick={() => slidePopularDesignsOne(i - designsPage)} sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: i === designsPage ? teal : '#CBD5E1', cursor: 'pointer' }} />
                  ))}
                </Box>
              </Box>
            );
          })()}
        </Container>
      </Box>

      {/* Testimonials Section (Slider) */}
      <Box
        id="testimonials-section"
        className={`animation-trigger ${animatedElements['testimonials-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e8f1f5' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}
            >
              WHAT OUR CLIENTS SAY
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              We serve customers in various countries around the world.
            </Typography>
            <Typography sx={{ color: '#5b6b7b' }}>
              If you have any specific questions or need assistance related to a particular country, feel free to ask!
            </Typography>
          </Box>

          {(() => {
            const reviews = [
              { id: 1, name: 'Ramesh K.', initials: 'RK', text: 'Receiving my second order from SB Stones was a breeze. Everything from quality to door delivery was exactly what we needed.' },
              { id: 2, name: 'Lakshmi S.', initials: 'LS', text: 'Made ordering stress-free! Prompt responses, clear CAD drawings, and photos before dispatch made the whole process smooth.' },
              { id: 3, name: 'Arjun P.', initials: 'AP', text: 'Very impressed with the first order. Secure packing and excellent quality. Looking forward to many more orders.' },
              { id: 4, name: 'Kavya N.', initials: 'KN', text: 'Top-quality granite and craftsmanship. We are very happy with the service and confident in their ability to meet our needs.' },
              { id: 5, name: 'Pradeep V.', initials: 'PV', text: 'Great communication throughout and on-time shipping. The monuments arrived in perfect condition.' },
              { id: 6, name: 'Meera R.', initials: 'MR', text: 'Reliable partner for our memorials. Custom designs and finishes were exactly as requested.' },
              { id: 7, name: 'Santhosh M.', initials: 'SM', text: 'Professional team and excellent quality. Export packing was sturdy and safe.' },
              { id: 8, name: 'Anitha D.', initials: 'AD', text: 'Smooth experience from quotation to delivery. Highly recommend for consistent quality.' },
            ];

            return (
              <Box sx={{ position: 'relative', maxWidth: 1450, mx: 'auto' }}>
                {/* Slider track */}
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
                      <Box sx={{ display: 'flex', gap: 0.5, color: '#b38b59', mb: 2 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} sx={{ fontSize: 18 }} />
                        ))}
                      </Box>
                      <Typography sx={{ color: '#334155', mb: 3, lineHeight: 1.8 }}>
                        {review.text}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 28, height: 28, bgcolor: '#E0E7FF', color: '#1E293B', fontSize: 14, fontWeight: 700 }}>
                          {review.initials}
                        </Avatar>
                        <Typography sx={{ fontWeight: 700, color: '#16324F' }}>{review.name}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Arrows */}
                <Button
                  onClick={() => slideTestimonials(-1)}
                  className="testimonial-arrow left"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: -8,
                    transform: 'translateY(-50%)',
                    minWidth: 40,
                    minHeight: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.55)' },
                    display: { xs: 'none', sm: 'flex' },
                  }}
                >
                  ‹
                </Button>
                <Button
                  onClick={() => slideTestimonials(1)}
                  className="testimonial-arrow right"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: -8,
                    transform: 'translateY(-50%)',
                    minWidth: 40,
                    minHeight: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.55)' },
                    display: { xs: 'none', sm: 'flex' },
                  }}
                >
                  ›
                </Button>
              </Box>
            );
          })()}
        </Container>
      </Box>

      {/* Lightbox Dialog for Designs */}
      <Dialog open={lightboxOpen} onClose={closeLightbox} maxWidth="md" fullWidth
              PaperProps={{ sx: { background: 'transparent', boxShadow: 'none' } }}
              BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(2px)' } }}>
        <DialogContent sx={{ p: 0, position: 'relative', backgroundColor: 'transparent' }}>
          {/* Counter at top center */}
          <Box sx={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontWeight: 700, letterSpacing: 1, fontSize: 16 }}>
            {lightboxIndex + 1} / {totalDesigns}
          </Box>

          {/* Close button */}
          <IconButton onClick={closeLightbox} sx={{ position: 'absolute', right: 10, top: 10, zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Close">
            <Close />
          </IconButton>

          {/* Prev/Next arrows */}
          <IconButton onClick={showPrev} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Previous">
            <ChevronLeft sx={{ fontSize: 44 }} />
          </IconButton>
          <IconButton onClick={showNext} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Next">
            <ChevronRight sx={{ fontSize: 44 }} />
          </IconButton>

          {/* Image with smooth zoom-in animation */}
          {lightboxSrc && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 300, md: 480 }, py: { xs: 2, md: 4 } }}>
              <Box
                key={lightboxSrc}
                component="img"
                src={lightboxSrc}
                alt={getModelByIndex(lightboxIndex)}
                sx={{ width: '100%', height: 'auto', display: 'block', maxHeight: '80vh', objectFit: 'contain',
                     animation: 'zoomInLightbox 220ms ease-out',
                     '@keyframes zoomInLightbox': {
                       '0%': { transform: 'scale(0.94)', opacity: 0 },
                       '100%': { transform: 'scale(1)', opacity: 1 },
                     },
                }}
              />
            </Box>
          )}

          {/* Caption at bottom center */}
          <Box sx={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontWeight: 800, letterSpacing: 1, bgcolor: 'rgba(0,0,0,0.45)', px: 2, py: 0.5, borderRadius: 1 }}>
            {getModelByIndex(lightboxIndex)}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Home;

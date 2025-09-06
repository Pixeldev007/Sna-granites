import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
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
} from '@mui/icons-material';

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
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Slabs',
      description: 'Polished slabs for fabrication and projects',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Rough Blocks',
      description: 'Premium quarry blocks for processing',
      image: '/placeholder.jpg',
    },
  ];

  const [imageErrors, setImageErrors] = useState({});
  const animatedElements = useScrollAnimation(0.1);

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
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: '100px', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={6} alignItems="flex-start">
            {/* Left Column - Granite Monument Images */}
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative' }}>
                {/* Main Monument Image */}
                <Box
                  sx={{
                    width: '700px',
                    height: 400,
                    backgroundColor: '#f5f5f5',
                    overflow: 'hidden',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    position: 'relative'
                  }}
                >
                  {aboutSlides.map((src, i) => (
                    <Box
                      key={src}
                      component="img"
                      src={src}
                      alt="SNA Granites Monument Samples"
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
                <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, ml: 6 }}>
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
                  ABOUT SNA GRANITES
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
                  25+ YEARS IN GRANITE BUSINESS
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
                  SNA Granites is your source for quality granite monuments from India. Founded in 
                  2001 by <strong>Ravi Shetty</strong> and <strong>Saravanan</strong>. We now serve a wide and loyal customer 
                  network across the <strong>USA, Canada, UK, Ireland, Germany, Australia</strong> and <strong>New 
                  Zealand</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    color: '#555',
                    fontSize: '1rem',
                    maxWidth: { md: 500 }
                  }}
                >
                  The founders have more than three decades of experience in the <strong>granite industry</strong>. 
                  SNA Granites leverages their expertise in all aspects of the business, from 
                  operating quarries to manufacturing and marketing monuments, to provide 
                  customers with a simplified and <strong>stress-free buying experience</strong>.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
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
              <Box sx={{ maxWidth: 1450, width: '100%', mx: 'auto', px: 0 }}>
                <Box
                  sx={{
                    mt: { xs: 1, md: 4 },
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(6, 1fr)',
                    },
                    gap: 0, // continuous strip; separators via item borders
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
                          backgroundColor: (f.id === 2 || f.id === 4 || f.id === 6) ? hoverTeal : (f.highlight ? teal : light),
                          color: (f.id === 2 || f.id === 4 || f.id === 6) ? '#fff' : (f.highlight ? '#fff' : dark),
                          cursor: (f.id === 2 || f.id === 4 || f.id === 6) ? 'pointer' : 'default',
                        },
                        opacity: animatedElements[`feature-${f.id}`] ? 1 : 0,
                        transform: animatedElements[`feature-${f.id}`] ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <f.Icon sx={{ fontSize: 34 }} />
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
              image: `/images/design-${i + 1}.png`,
            }));

            return (
              <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                {items.map((d) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
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
                      <Box sx={{ position: 'relative', height: 200, backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img
                          src={d.image}
                          alt={d.model}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          onError={(e) => { e.currentTarget.src = '/images/about-1.png'; }}
                        />
                        {/* Zoom link */}
                        <a href={d.image}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{ position: 'absolute', right: 8, top: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 4, border: '1px solid #E5EAF0', background: '#fff', color: '#16324F', textDecoration: 'none' }}
                           aria-label={`Zoom ${d.model}`}>
                          <ZoomIn style={{ fontSize: 20 }} />
                        </a>
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
                          const mailHref = `mailto:info@astronglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=`;
                          return (
                            <a href={mailHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#b38b59', textDecoration: 'none', fontWeight: 700, fontSize: 12 }}>
                              <MailOutline sx={{ fontSize: 16, color: '#b38b59' }} />
                              <span>Get a Quote</span>
                            </a>
                          );
                        })()}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            );
          })()}
        </Container>
      </Box>

      {/* Products Section */}
      <Box 
        id="products-section" 
        className={`animation-trigger ${animatedElements['products-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 8, backgroundColor: '#f5f5f5' }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 6 }}
          >
            Our Premium Collection
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={product.id}
                id={`product-${product.id}`}
                className={`animation-trigger ${animatedElements[`product-${product.id}`] ? 'fade-in-up' : ''}`}
                sx={{
                  opacity: animatedElements[`product-${product.id}`] ? 1 : 0,
                  transform: animatedElements[`product-${product.id}`] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="product-card">
                  <CardMedia
                    component="div"
                    height="200"
                    sx={{
                      height: 200,
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
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={() => handleImageError(product.id)}
                      />
                    )}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                      {product.title}
                    </Typography>
                    <Typography>{product.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
          <Box sx={{ maxWidth: 1450, width: '100%', mx: 'auto' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                gap: 0,
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
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, opacity: 0.9 }}>
                      {step.num}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <step.Icon sx={{ fontSize: 34 }} />
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
              { id: 1, country: 'Ireland', flag: '🇮🇪', text: 'Receiving my second order from SNA Granites was a breeze. Everything from quality to door delivery was exactly what we needed.' },
              { id: 2, country: 'United Kingdom', flag: '🇬🇧', text: 'Made ordering stress-free! Prompt responses, clear CAD drawings, and photos before dispatch made the whole process smooth.' },
              { id: 3, country: 'Germany', flag: '🇩🇪', text: 'Very impressed with the first order. Secure packing and excellent quality. Looking forward to many more orders.' },
              { id: 4, country: 'Australia', flag: '🇦🇺', text: 'Top-quality granite and craftsmanship. We are very happy with the service and confident in their ability to meet our needs.' },
              { id: 5, country: 'United States', flag: '🇺🇸', text: 'Great communication throughout and on-time shipping. The monuments arrived in perfect condition.' },
              { id: 6, country: 'Canada', flag: '🇨🇦', text: 'Reliable partner for our memorials. Custom designs and finishes were exactly as requested.' },
              { id: 7, country: 'France', flag: '🇫🇷', text: 'Professional team and excellent quality. Export packing was sturdy and safe.' },
              { id: 8, country: 'Netherlands', flag: '🇳🇱', text: 'Smooth experience from quotation to delivery. Highly recommend for consistent quality.' },
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
                        <Box sx={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                          {review.flag}
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#16324F' }}>{review.country}</Typography>
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

      {/* Removed duplicate Products Section below testimonials */}
     </>
   );
 };

export default Home;

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/*
  HeroSlider component
  - slides: Array<{ id: string|number, image: string, title: string, subtitle?: string }>
  - interval: autoplay interval in ms (default 5000)
  - height: CSS height (default '70vh')
*/
const HeroSlider = ({ slides = [], interval = 5000, height = '55vh' }) => {
  const validSlides = useMemo(() => (slides && slides.length ? slides : [
    { id: 1, image: '/images/slide-1.png', title: 'QUALITY', subtitle: 'GRANITE MONUMENTS FROM INDIA' },
    { id: 2, image: '/images/slide-2.png', title: 'DELIVERY', subtitle: 'PROMPT DELIVERY TO YOUR PLACE' },
  ]), [slides]);

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((i) => setIndex((i + validSlides.length) % validSlides.length), [validSlides.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % validSlides.length), [validSlides.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + validSlides.length) % validSlides.length), [validSlides.length]);

  // autoplay
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => next(), interval);
    return () => clearInterval(timerRef.current);
  }, [interval, next]);

  // keyboard accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <Box className="hero-slider" sx={{ position: 'relative', height, overflow: 'hidden' }}>
      {/* Slides */}
      <Box className="hero-slider-track" sx={{ height: '100%', width: '100%', position: 'relative' }}>
        {validSlides.map((s, i) => (
          <Box
            key={s.id}
            className={`hero-slide ${i === index ? 'active' : ''}`}
            sx={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.45)), url(${s.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'absolute',
              inset: 0,
              opacity: i === index ? 1 : 0,
              transform: `scale(${i === index ? 1 : 1.05})`,
              transition: 'opacity .8s ease, transform 1.6s ease',
            }}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (dx > 50) prev();
              if (dx < -50) next();
            }}
          >
            <Box className="hero-overlay" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Container maxWidth="lg">
                <Box sx={{ color: 'white', textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 600,
                      fontSize: '80px',
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      mb: 1,
                    }}
                    className="fade-in"
                  >
                    {s.title}
                  </Typography>
                  {s.subtitle && (
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 400,
                        fontSize: '26px',
                        letterSpacing: 1,
                        mb: 3,
                        textShadow: '0 3px 10px rgba(0,0,0,0.45)'
                      }}
                      className="fade-in-up"
                    >
                      {s.subtitle}
                    </Typography>
                  )}
                  <Box sx={{ display: 'inline-flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      to="/products"
                      sx={{
                        backgroundColor: '#a89060',
                        fontWeight: 'bold',
                        px: 3,
                        fontFamily: 'Manrope, sans-serif',
                        '&:hover': { backgroundColor: '#967f53', transform: 'translateY(-2px)' },
                        transition: 'all .3s ease'
                      }}
                    >
                      Explore
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      to="/contact"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'Manrope, sans-serif',
                        px: 3,
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)', borderColor: 'white' },
                        transition: 'all .3s ease'
                      }}
                    >
                      Contact Us
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Arrows */}
      <Button aria-label="Previous" className="hero-arrow left" onClick={prev}>
        ‹
      </Button>
      <Button aria-label="Next" className="hero-arrow right" onClick={next}>
        ›
      </Button>

      {/* Dots */}
      <Box className="hero-dots">
        {validSlides.map((s, i) => (
          <button
            key={s.id}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSlider;

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import useScrollAnimation from '../components/hooks/useScrollAnimation';
import { MailOutline, ZoomIn, Close, ChevronLeft, ChevronRight } from '@mui/icons-material';

const Products = () => {
  const animatedElements = useScrollAnimation(0.1);
  const totalDesigns = 15;
  const items = Array.from({ length: totalDesigns }).map((_, i) => ({
    id: i + 1,
    model: `AG-11${String(i + 1).padStart(2, '0')}`,
    image: `/images/products/${i + 1}.png`,
  }));

  // Lightbox (same behavior/style as Home)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const getSrcByIndex = (idx) => `/images/products/${idx + 1}.png`;
  const getModelByIndex = (idx) => `AG-11${String(idx + 1).padStart(2, '0')}`;
  const openLightbox = (idx) => { setLightboxIndex(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + totalDesigns) % totalDesigns);
  const showNext = () => setLightboxIndex((i) => (i + 1) % totalDesigns);
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <>
      {/* New Arrivals - same style as Wide Range of Designs */}
      <Box id="products-new-arrivals" className={`animation-trigger ${animatedElements['products-new-arrivals'] ? 'fade-in-up' : ''}`} sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e9f1f4' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1600, mx: 'auto', width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}>
              NEW ARRIVALS
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              We offer a comprehensive range of memorials in various colors.
            </Typography>
            <Typography sx={{ color: '#5b6b7b' }}>
              We also produce custom designs as per specifications given by the customer.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, gap: 3 }}>
            {items.map((d, idx) => (
              <Box key={d.id} sx={{ opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
                <Box sx={{ backgroundColor: '#ffffff', border: '1px solid #E5EAF0', borderRadius: 1, p: 2, height: '100%', display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', '&:hover': { boxShadow: '0 8px 18px rgba(0,0,0,0.12)' } }}>
                  <Box sx={{ position: 'relative', height: 220, backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer', '&:hover img': { transform: 'scale(0.95)' }, '&:hover .zoom-overlay': { opacity: 1 } }}>
                    <img src={d.image} alt={d.model} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.3s ease', cursor: 'pointer' }} onClick={() => openLightbox(idx)} />
                    <Box className="zoom-overlay" onClick={() => openLightbox(idx)} sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
                      <ZoomIn style={{ fontSize: 22 }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#16324F' }}>
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
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Lightbox Dialog for products */}
      <Dialog open={lightboxOpen} onClose={closeLightbox} maxWidth="md" fullWidth
              PaperProps={{ sx: { background: 'transparent', boxShadow: 'none' } }}
              BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(2px)' } }}>
        <DialogContent sx={{ p: 0, position: 'relative', backgroundColor: 'transparent' }}>
          <Box sx={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontWeight: 700, letterSpacing: 1, fontSize: 16 }}>
            {lightboxIndex + 1} / {totalDesigns}
          </Box>
          <IconButton onClick={closeLightbox} sx={{ position: 'absolute', right: 10, top: 10, zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Close">
            <Close />
          </IconButton>
          <IconButton onClick={showPrev} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Previous">
            <ChevronLeft sx={{ fontSize: 44 }} />
          </IconButton>
          <IconButton onClick={showNext} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#fff', '&:hover': { opacity: 0.9 } }} aria-label="Next">
            <ChevronRight sx={{ fontSize: 44 }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 300, md: 480 }, py: { xs: 2, md: 4 } }}>
            <Box key={lightboxIndex} component="img" src={getSrcByIndex(lightboxIndex)} alt={getModelByIndex(lightboxIndex)} sx={{ width: '100%', height: 'auto', display: 'block', maxHeight: '80vh', objectFit: 'contain', animation: 'zoomInLightbox 220ms ease-out', '@keyframes zoomInLightbox': { '0%': { transform: 'scale(0.94)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } } }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontWeight: 800, letterSpacing: 1, bgcolor: 'rgba(0,0,0,0.45)', px: 2, py: 0.5, borderRadius: 1 }}>
            {getModelByIndex(lightboxIndex)}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Products;

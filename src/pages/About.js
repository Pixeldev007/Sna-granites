import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  // Reuse the same About section style from Home.js
  const aboutSlides = ['/images/about-1.png', '/images/about-3.png', '/images/about-4.png'];
  const [aboutIdx, setAboutIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAboutIdx(i => (i + 1) % aboutSlides.length), 3000);
    return () => clearInterval(t);
  }, [aboutSlides.length]);

  // Titles/subtitles for the Infrastructure gallery (AboutPage-5 .. AboutPage-16)
  const infraTitles = [
    'Turning',
    'Edge Cutting',
    'Polishing',
    'Auto Polishing – Part 1',
    'Auto Polishing – Part 2',
    'Container Stuffing',
    'Daewoo Forklifts',
    'Block Sawing unit',
    'Factory Unit - I',
    'Factory Unit - II',
    'Special Wirecut Machine',
    'Cutting Overview'
  ];
  const infraSubtitles = [
    'Shaping and refinement',
    'Precision cutting and sizing',
    'Surface finishing',
    'High-throughput polishing',
    'Mirror-finish sequencing',
    'Thickness calibration',
    'Custom fabrication',
    'Crating and protection',
    'Dispatch and logistics',
    'Storage and staging',
    'Site overview',
    'Close-up process'
  ];

  return (
    <>
      {/* Our Legacy - same style as Products New Arrivals header */}
      <Box id="our-legacy" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e9f1f4' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1600, mx: 'auto', width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, color: '#16324F' }}>
              OUR LEGACY
            </Typography>
            <Typography sx={{ color: '#5b6b7b', mt: 2 }}>
              Decades of craftsmanship in granite memorials and monuments.
            </Typography>
            <Typography sx={{ color: '#5b6b7b' }}>
              Three generations upholding quality, integrity, and innovation from quarry to delivery.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* About Section (Standalone Page) */}
      <Box 
        id="about-section"
        sx={{ py: 8, backgroundColor: '#ffffff' }}
      >
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 2, md: 6 }} alignItems="flex-start">
            {/* Left Column - Granite Monument Images */}
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative' }}>
                {/* Main Monument Image crossfade */}
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

                {/* Decorative underline */}
                <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, ml: { md: 6 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Box sx={{ width: 40, height: 4, bgcolor: '#0C8A86', borderRadius: 2 }} />
                  <Box sx={{ width: 18, height: 4, bgcolor: '#0C8A86', borderRadius: 2 }} />
                </Box>

                {/* Secondary image */}
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
                    style={{ width: '500px', height: '100px' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Column - Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ pl: { md: 4 }, maxWidth: 600, width: '100%' }}>
                <Typography
                  variant="h3"
                  component="h1"
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

            {/* Full-width paragraphs and list */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ mb: 1, lineHeight: 1.8, color: '#555', fontSize: '1rem' }}
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

            {/* CTA Buttons */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Manufacturing Facility Section (below CTA) */}
      <Box id="manufacturing-facility" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#e9f1f4' }}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* Left: Text */}
            <Grid item xs={12} md={12}>
              <Box sx={{ maxWidth: 560 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                  Our State-of-Art Manufacturing Facility
                </Typography>
                <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                  Our manufacturing facility situated in the South of India about 150 miles away from our quarry is where raw material is transformed into custom, high-quality products. Equipped with the latest in cutting-edge technology, we ensure every piece is crafted to perfection – from start to finish.
                </Typography>
                <Box component="ul" sx={{ color: '#16324F', pl: 3, m: 0, display: 'grid', gap: 1 }}>
                  <li>Block Cutting Unit</li>
                  <li>Edge Cutting Unit</li>
                  <li>Polishing Unit</li>
                  <li>Special Works Unit</li>
                  <li>Packing Unit</li>
                </Box>
              </Box>
            </Grid>

            {/* Right: Images */}
            <Grid item xs={12} md={12}>
              <Box sx={{ position: 'relative', width: '100%', maxWidth: 700, mx: { xs: 'auto', md: 'auto' } }}>
                {/* Main image placeholder - replace src after upload */}
                <Box sx={{
                  height: { xs: 260, sm: 340, md: 400 },
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                  overflow: 'hidden',
                  border: '1px solid #E5EAF0'
                }}>
                  <Box
                    component="img"
                    src="/images/AboutPage-3.png"
                    alt="Manufacturing Facility"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.src = '/images/about-1.png'; }}
                  />
                </Box>

                {/* Overlay small image - replace src after upload */}
                <Box sx={{
                  position: 'absolute',
                  left: { xs: 12, md: 12 },
                  bottom: { xs: -20, md: -20 },
                  width: { xs: 220, sm: 260, md: 300 },
                  height: { xs: 130, sm: 150, md: 170 },
                  backgroundColor: '#f5f5f5',
                  border: '4px solid #fff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                  overflow: 'hidden'
                }}>
                  <Box
                    component="img"
                    src="/images/AboutPage-4.png"
                    alt="Facility Equipment"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.src = '/images/about-2.png'; }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Company Journey / Overview (appended) */}
      <Box id="about-history" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-start">
            <Grid item xs={12} md={10} lg={9}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2 }}>
                MORE ABOUT US 
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                SB Stones started as granite processing equipment manufacturer, we had then invented our own simplistic granite quarry machine which was mounted on to an air compressor. Domain knowledge and proximity to the quarries urged us into the newer areas of granite exports.
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                Our access to its contract quarries and its integrated processing facility has helped it to grow from strength to strength. Our product range is enhanced periodically based on the changes of the trends of its target markets. The products include:
              </Typography>
              <Box component="ul" sx={{ color: '#16324F', pl: 3, m: 0, display: 'grid', gap: 1.2 }}>
                <li>Standard and custom made monuments</li>
                <li>Cemeteries</li>
                <li>Fire places</li>
                <li>Garden furniture</li>
                <li>Vases</li>
                <li>Slabs: from rough gang saw cut slabs to table tops, vanity tops, counter tops</li>
              </Box>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mt: 3 }}>
                We adhere to the best of international management practices and quality norms. Today SB Stones is one of the leading exporters of monuments and slabs to the major countries around the world.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Two centered cards (no table) for Quality Assurance and Quarry */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Box sx={{ maxWidth: 1600, mx: 'auto', backgroundColor: '#e9f1f4', border: '1px solid #E5EAF0', borderRadius: 1, p: { xs: 2, md: 3 } }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
              <Box sx={{ backgroundColor: '#ffffff', border: '1px solid #E5EAF0', borderRadius: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2 }}>
                    Quality Assurance
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                    We assure of you of quality through our multi stage inspection right from raw material procurement, storing, sawing, polishing and final full- product inspection.
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                    We have an envious track record for our time schedules. The packaging is done adhering to International packaging norms. Quality wood is used for packaging and fumigation is done both to the wood and the containers. The wooden crates are done in such a way that they can be lifted easily.
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8 }}>
                    All procedures and norms of the business processes are compliant to ISO 9001:2000 standards.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ backgroundColor: '#ffffff', border: '1px solid #E5EAF0', borderRadius: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2 }}>
                    QUARRY
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8 }}>
                    We have a long lasting resource of quality granites; we have about 5 contracted quarries with resource that is expected to last for decades. These quarries offer us the choicest of colours. They are well proximate and are located well within the easy reach of our facility.
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mt: 2 }}>
                    Our quarrying operations follow stringent environmental and safety standards. From selective extraction to responsible land reclamation, we ensure minimal impact while maintaining consistent supply and quality.
                  </Typography>
                  <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mt: 2 }}>
                    With efficient logistics planning and on‑site quality checks, blocks are transported promptly to our manufacturing facility, enabling shorter lead times and reliable delivery schedules.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Infrastructure (moved below Quarry; hidden placeholder) */}
      <Box id="infrastructure-hidden" sx={{ display: 'none' }}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-start">
            <Grid item xs={12} md={10} lg={9}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2 }}>
                Infrastructure
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                Our success story has always been etched through one factor – Integration. Our knowledge about the industry is immense which we have gained from manufacturing process equipments. This led us to set up an integrated manufacturing setup that would compliment in offering the finest in quality through a comprehensive process.
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8 }}>
                The state of the art facility has the best of machineries from the best brands of the world like Gaspari , & Pelligrini from Italy & Vandeer from Holland along with our own manufactured machines. The facility is capable of delivering about 25 containers of monuments and slabs per month.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Infrastructure (visible, placed below Quarry) */}
      <Box id="infrastructure" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 1350, mx: 'auto', width: '100%', px: { xs: 2, md: 0 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-start">
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#16324F', mb: 2 }}>
                Infrastructure
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8, mb: 2 }}>
                Our success story has always been etched through one factor – Integration. Our knowledge about the industry is immense which we have gained from manufacturing process equipments. This led us to set up an integrated manufacturing setup that would compliment in offering the finest in quality through a comprehensive process.
              </Typography>
              <Typography sx={{ color: '#5b6b7b', lineHeight: 1.8 }}>
                The state of the art facility has the best of machineries from the best brands of the world like Gaspari , & Pelligrini from Italy & Vandeer from Holland along with our own manufactured machines. The facility is capable of delivering about 25 containers of monuments and slabs per month.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={8} alignItems="center">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const idx = i + 5; // 5..16
                    const src = `/images/AboutPage-${idx}.png`;
                    return (
                      <Grid key={idx} item xs={12} sm={12} md={6} sx={{ display: 'flex' }}>
                        <Box sx={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5EAF0',
                          borderRadius: 1,
                          overflow: 'hidden',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%'
                        }}>
                          {/* Responsive 4:5 image wrapper for equal sizes across breakpoints */}
                          <Box sx={{
                            width: { xs: 400, sm: 400, md: 400 },
                            height: { xs: 400, sm: 400, md: 250 },
                            mx: 'auto',
                            backgroundColor: '#F8FAFC',
                            position: 'relative'
                          }}>
                            <Box component="img" src={src} alt={`Infrastructure ${idx}`} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                 onError={(e) => { e.currentTarget.src = '/images/about-1.png'; }} />
                          </Box>
                          {/* Fixed-height content area with title + subtitle */}
                          <Box sx={{ p: 2, textAlign: 'center', height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, borderTop: '1px solid #E5EAF0' }}>
                            <Typography noWrap sx={{ fontWeight: 800, color: '#16324F', maxWidth: '100%' }}>{infraTitles[i] || `Facility View ${idx - 4}`}</Typography>
                            <Typography noWrap sx={{ color: '#5b6b7b', fontSize: '0.9rem', maxWidth: '100%' }}>{infraSubtitles[i] || 'Infrastructure'}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              {/* Centered banner image below the 12-card grid */}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Box
                  component="img"
                  src="/images/AboutPage-17.png"
                  alt="Slab Factory"
                  sx={{ width: { xs: '100%', md: 900 }, maxWidth: '100%', height: { xs: '200px', md: 300 }, display: 'block', mx: 'auto', borderRadius: 0, boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 800, color: '#16324F' }}>Slab Factory</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;

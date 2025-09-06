import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, Button, ButtonGroup } from '@mui/material';
import useScrollAnimation from '../components/hooks/useScrollAnimation';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState({});
  const animatedElements = useScrollAnimation(0.1);
  
  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      title: 'Kitchen Countertop',
      category: 'kitchen',
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Bathroom Vanity',
      category: 'bathroom',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Living Room Flooring',
      category: 'flooring',
      image: '/placeholder.jpg',
    },
    {
      id: 4,
      title: 'Exterior Wall Cladding',
      category: 'exterior',
      image: '/placeholder.jpg',
    },
    {
      id: 5,
      title: 'Island Countertop',
      category: 'kitchen',
      image: '/placeholder.jpg',
    },
    {
      id: 6,
      title: 'Staircase Railing',
      category: 'interior',
      image: '/placeholder.jpg',
    },
    {
      id: 7,
      title: 'Fireplace Surround',
      category: 'interior',
      image: '/placeholder.jpg',
    },
    {
      id: 8,
      title: 'Pool Decking',
      category: 'exterior',
      image: '/placeholder.jpg',
    },
  ];
  
  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'flooring', label: 'Flooring' },
    { value: 'exterior', label: 'Exterior' },
    { value: 'interior', label: 'Interior' },
  ];
  
  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };
  
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
        className="fade-in"
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Gallery
          </Typography>
          <Typography variant="h6" component="p">
            Explore our premium granite installations
          </Typography>
        </Container>
      </Box>
      
      {/* Filter Options */}
      <Box 
        id="filter-section" 
        className={`animation-trigger ${animatedElements['filter-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 4, backgroundColor: '#f5f5f5' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
            <ButtonGroup variant="outlined" aria-label="gallery filter">
              {filterOptions.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  sx={{
                    borderColor: filter === option.value ? '#1a365d' : 'rgba(0, 0, 0, 0.23)',
                    color: filter === option.value ? '#1a365d' : 'inherit',
                    fontWeight: filter === option.value ? 'bold' : 'normal',
                    '&:hover': {
                      borderColor: '#1a365d',
                      backgroundColor: filter === option.value ? 'rgba(26, 54, 93, 0.08)' : 'inherit',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Container>
      </Box>
      
      {/* Gallery Grid */}
      <Box 
        id="gallery-section" 
        className={`animation-trigger ${animatedElements['gallery-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {filteredImages.map((image, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3} 
                key={image.id}
                id={`gallery-image-${image.id}`}
                className={`animation-trigger ${animatedElements[`gallery-image-${image.id}`] ? 'fade-in' : ''}`}
                sx={{
                  opacity: animatedElements[`gallery-image-${image.id}`] ? 1 : 0,
                  transform: animatedElements[`gallery-image-${image.id}`] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                <Card 
                  sx={{ height: '100%' }} 
                  className="gallery-image"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <CardMedia
                    component="div"
                    height="250"
                    sx={{
                      height: 250,
                      backgroundColor: imageErrors[image.id] ? '#b38b59' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    {imageErrors[image.id] ? (
                      <Typography>Image not available</Typography>
                    ) : (
                      <img
                        src={image.image}
                        alt={image.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={() => handleImageError(image.id)}
                      />
                    )}
                  </CardMedia>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                      {image.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {filteredImages.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }} className="fade-in-up">
              <Typography variant="h5" sx={{ color: '#666' }}>
                No projects found in this category.
              </Typography>
              <Button
                onClick={() => setFilter('all')}
                sx={{ mt: 2 }}
                variant="outlined"
              >
                View All Projects
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Gallery;

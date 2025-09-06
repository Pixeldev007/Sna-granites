import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/hooks/useScrollAnimation';

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: 'Black Galaxy',
      description: 'Premium black granite with golden specks. Perfect for kitchen countertops and flooring.',
      category: 'Kitchen',
      price: '₹250/sq.ft',
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'White Pearl',
      description: 'Elegant white granite with pearl finish. Ideal for bathroom vanities and wall cladding.',
      category: 'Bathroom',
      price: '₹300/sq.ft',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Rosewood',
      description: 'Beautiful pink granite with natural patterns. Great for interior design accents.',
      category: 'Interior',
      price: '₹200/sq.ft',
      image: '/placeholder.jpg',
    },
    {
      id: 4,
      title: 'Imperial Red',
      description: 'Rich red granite with dark veins. Excellent for exterior applications and monuments.',
      category: 'Exterior',
      price: '₹275/sq.ft',
      image: '/placeholder.jpg',
    },
    {
      id: 5,
      title: 'Blue Pearl',
      description: 'Striking blue granite with pearl-like shimmer. Perfect for feature walls and countertops.',
      category: 'Interior',
      price: '₹350/sq.ft',
      image: '/placeholder.jpg',
    },
    {
      id: 6,
      title: 'Rainforest Green',
      description: 'Lush green granite with natural forest patterns. Ideal for kitchen islands and flooring.',
      category: 'Kitchen',
      price: '₹280/sq.ft',
      image: '/placeholder.jpg',
    },
  ];

  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
  ];

  const [imageErrors, setImageErrors] = useState({});
  const animatedElements = useScrollAnimation(0.1);

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
            Our Products
          </Typography>
          <Typography variant="h6" component="p">
            Premium granite solutions for every space
          </Typography>
        </Container>
      </Box>

      {/* Products Section */}
      <Box 
        id="products-section" 
        className={`animation-trigger ${animatedElements['products-section'] ? 'fade-in-up' : ''}`}
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                        {product.price}
                      </Typography>
                      <Button 
                        variant="contained" 
                        size="small" 
                        sx={{ 
                          backgroundColor: '#b38b59', 
                          color: 'white',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: '#9c7a4d',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                        component={Link}
                        to="/contact"
                      >
                        Enquire Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Products;

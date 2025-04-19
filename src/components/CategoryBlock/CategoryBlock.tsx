import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Category {
  title: string;
  image: string;
  itemCount: string;
  link: string;
}

const categories: Category[] = [
  {
    title: 'Mobile phones',
    image: '/img/category-phones.png',
    itemCount: '95',
    link: '/phones'
  },
  {
    title: 'Tablets',
    image: '/img/category-tablets.png',
    itemCount: '24',
    link: '/tablets'
  },
  {
    title: 'Accessories',
    image: '/img/category-accessories.png',
    itemCount: '100',
    link: '/accessories'
  }
];

export const CategoryBlock: React.FC = () => {
  return (
    <Box 
      component="section" 
      sx={{
        backgroundColor: '#FAFBFC',
        py: '80px',
      }}
    >
      <Box 
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          px: '32px',
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: '41px',
            color: '#313237',
            mb: 3,
          }}
        >
          Shop by category
        </Typography>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: '24px',
          }}
        >
          {categories.map(category => (
            <Link 
              key={category.title}
              to={category.link}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  backgroundColor: '#FFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: '368px',
                    width: '100%',
                    '& img': {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }
                  }}
                >
                  <img src={category.image} alt={category.title} />
                </Box>

                <Box sx={{ padding: '24px' }}>
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: '26px',
                      color: '#313237',
                      marginBottom: '4px',
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '21px',
                      color: '#89939A',
                    }}
                  >
                    {category.itemCount} models
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}; 
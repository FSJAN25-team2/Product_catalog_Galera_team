import { Container, Typography, Grid, Box } from '@mui/material';
import { ProductCard } from '../ProductCard/ProductCard';
import SwiperPhone from '../SwiperPhone/SwiperPhone';
import './HomePage.scss';

const testProducts = [
  {
    name: 'Apple iPhone 14 Pro',
    fullPrice: 1199,
    price: 1099,
    screen: "6.1' OLED",
    capacity: '256GB',
    ram: '6GB',
    image: 'https://example.com/iphone.jpg',
    itemId: '1',
    category: 'phones',
  },
  {
    name: 'Apple iPhone 13',
    fullPrice: 999,
    price: 899,
    screen: "6.1' OLED",
    capacity: '128GB',
    ram: '4GB',
    image: 'https://example.com/iphone13.jpg',
    itemId: '2',
    category: 'phones',
  },
  {
    name: 'Apple iPhone 12',
    fullPrice: 799,
    price: 699,
    screen: "6.1' OLED",
    capacity: '64GB',
    ram: '4GB',
    image: 'https://example.com/iphone12.jpg',
    itemId: '3',
    category: 'phones',
  },
  {
    name: 'Apple iPhone 11',
    fullPrice: 599,
    price: 499,
    screen: "6.1' LCD",
    capacity: '64GB',
    ram: '4GB',
    image: 'https://example.com/iphone11.jpg',
    itemId: '4',
    category: 'phones',
  }
];

export const HomePage = () => {
  return (
    <Container>
      <Box sx={{ mb: 6 }}>
        <SwiperPhone />
      </Box>
      
      <Typography 
        variant="h2" 
        sx={{ 
          mb: 3,
          fontSize: '22px',
          fontWeight: 800,
          lineHeight: '31px',
        }}
      >
        Hot prices
      </Typography>
      
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {testProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.itemId}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Typography 
        variant="h2" 
        sx={{ 
          mb: 3,
          fontSize: '22px',
          fontWeight: 800,
          lineHeight: '31px',
        }}
      >
        Brand new models
      </Typography>
      
      <Grid container spacing={2}>
        {testProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.itemId}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

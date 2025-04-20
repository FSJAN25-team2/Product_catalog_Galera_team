import { Card, CardContent, Typography, Button, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledCard = styled(Card)(() => ({
  width: '272px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  backgroundColor: '#fff',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: '1px solid #E2E6E9',
  borderRadius: '8px',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 3px 13px rgba(23, 32, 49, 0.1)',
    borderColor: 'transparent',
  },
}));

const ImageContainer = styled(Box)({
  width: '208px',
  height: '196px',
  margin: '0 auto',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const PriceBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '8px',
  marginBottom: '16px',
});

const SpecsBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '16px',
});

const SpecItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #E2E6E9',
  paddingBottom: '8px',
  '&:last-child': {
    borderBottom: 'none',
  }
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
});

const AddToCartButton = styled(Button)({
  height: '40px',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '21px',
  textTransform: 'none',
  backgroundColor: '#0F0F11',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: '#313237',
  },
});

const FavoriteButton = styled(Button)({
  minWidth: '40px',
  width: '40px',
  height: '40px',
  padding: '0',
  border: '1px solid #B4BDC4',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    borderColor: '#0F0F11',
    backgroundColor: 'transparent',
  },
});

const ProductTitle = styled(Typography)({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: 500,
  color: '#0F0F11',
});

const ProductPrice = styled(Typography)({
  fontSize: '16px',
  lineHeight: '21px',
  fontWeight: 700,
});

const SpecText = styled(Typography)({
  fontSize: '12px',
  lineHeight: '15px',
  fontWeight: 500,
});

interface ProductCardProps {
  product: {
    name: string;
    fullPrice: number;
    price: number;
    screen: string;
    capacity: string;
    ram: string;
    image: string;
    itemId: string;
    category: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledCard>
      <Link 
        to={`/${product.category}/${product.itemId}`} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ImageContainer>
          <StyledImage
            src={product.image}
            alt={product.name}
          />
        </ImageContainer>
        
        <CardContent sx={{ p: 0 }}>
          <ProductTitle
            sx={{ 
              height: '42px', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden',
            }}
          >
            {product.name}
          </ProductTitle>
          
          <PriceBlock>
            <ProductPrice sx={{ color: '#0F0F11' }}>
              ${product.price}
            </ProductPrice>
            {product.fullPrice > product.price && (
              <ProductPrice 
                sx={{ 
                  color: '#89939A',
                  textDecoration: 'line-through',
                }}
              >
                ${product.fullPrice}
              </ProductPrice>
            )}
          </PriceBlock>
          
          <Divider />
          
          <SpecsBlock>
            <SpecItem>
              <SpecText sx={{ color: '#89939A' }}>
                Screen
              </SpecText>
              <SpecText sx={{ color: '#0F0F11' }}>
                {product.screen}
              </SpecText>
            </SpecItem>
            <SpecItem>
              <SpecText sx={{ color: '#89939A' }}>
                Capacity
              </SpecText>
              <SpecText sx={{ color: '#0F0F11' }}>
                {product.capacity}
              </SpecText>
            </SpecItem>
            <SpecItem>
              <SpecText sx={{ color: '#89939A' }}>
                RAM
              </SpecText>
              <SpecText sx={{ color: '#0F0F11' }}>
                {product.ram}
              </SpecText>
            </SpecItem>
          </SpecsBlock>
        </CardContent>
      </Link>
      
      <ButtonsContainer>
        <AddToCartButton 
          variant="contained" 
          fullWidth
        >
          Add to cart
        </AddToCartButton>
        <FavoriteButton variant="outlined">
          <FavoriteBorderIcon sx={{ fontSize: 20, color: '#0F0F11' }} />
        </FavoriteButton>
      </ButtonsContainer>
    </StyledCard>
  );
}; 
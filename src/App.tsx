import React from 'react';
import { Container, Grid, Paper, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  margin: '0 auto',
  
  // Mobile (320-639px)
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: '0 16px',
    maxWidth: '639px',
  },
  
  // Tablet (640-1199px)
  [theme.breakpoints.between('sm', 'lg')]: {
    padding: '0 24px',
    maxWidth: '1199px',
  },
  
  // Desktop (1200px+)
  [theme.breakpoints.up('lg')]: {
    padding: '0',
    maxWidth: '1200px',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gap: '16px',
  
  // Mobile (320-639px) - 4 columns
  [theme.breakpoints.between('xs', 'sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  
  // Tablet (640-1199px) - 12 columns
  [theme.breakpoints.between('sm', 'lg')]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  
  // Desktop (1200px+) - 24 columns, fixed 32px
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(24, 32px)',
    justifyContent: 'center',
  },
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const getColumnCount = () => {
    if (isDesktop) return 24;
    if (isTablet) return 12;
    return 4;
  };

  const renderGridItems = () => {
    const columnCount = getColumnCount();
    return Array.from({ length: columnCount }, (_, index) => (
      <Item key={index}>
        {index + 1}
      </Item>
    ));
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <StyledContainer>
        <Typography variant="subtitle2" align="center" gutterBottom sx={{ mb: 4 }}>
          {isMobile && 'Mobile grid (320-639px) - 4 columns, 16px gap'}
          {isTablet && 'Tablet grid (640-1199px) - 12 columns, 16px gap'}
          {isDesktop && 'Desktop grid (1200px+) - 24 columns, 32px width, 16px gap'}
        </Typography>

        <StyledGrid>
          {renderGridItems()}
        </StyledGrid>
      </StyledContainer>
    </Box>
  );
}

export default App; 
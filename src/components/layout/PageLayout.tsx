import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  height: '100vh', // Фіксована висота на весь екран
  margin: '0 auto',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  
  // Мобільна версія (320-639px)
  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '639px',
    padding: '0 16px',
    '& .MuiGrid-container': {
      margin: '0 -8px',
      width: 'calc(100% + 16px)',
      height: '100%',
      gap: '16px',
      '& .MuiGrid-item': {
        padding: '0 8px',
      }
    }
  },

  // Планшетна версія (640-1199px)
  [theme.breakpoints.between('sm', 'lg')]: {
    maxWidth: '1199px',
    padding: '0 24px',
    '& .MuiGrid-container': {
      margin: '0 -8px',
      width: 'calc(100% + 16px)',
      height: '100%',
      gap: '16px',
      '& .MuiGrid-item': {
        padding: '0 8px',
      }
    }
  },

  // Десктопна версія (1200px+)
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1200px',
    padding: '0 16px',
    '& .MuiGrid-container': {
      margin: '0 -8px',
      width: 'calc(100% + 16px)',
      height: '100%',
      gap: '16px',
      '& .MuiGrid-item': {
        padding: '0 8px',
        width: '32px',
      }
    }
  }
}));

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <StyledContainer disableGutters>
      <Grid 
        container 
        sx={{ 
          height: '100%', // Додаємо висоту для grid
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </Grid>
    </StyledContainer>
  );
};

export default PageLayout; 
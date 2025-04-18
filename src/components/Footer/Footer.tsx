import { Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '32px 0',
  marginTop: 'auto',
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '1199px',
    padding: '0 24px',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '639px',
    padding: '0 16px',
    flexDirection: 'column',
    gap: '16px',
  },
}));

const BackToTopButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledFooter>
      <FooterContainer>
        <Typography variant="body2" color="text.secondary">
          © 2025 Galera team
        </Typography>
        <BackToTopButton onClick={handleScrollToTop}>
          <KeyboardArrowUpIcon />
        </BackToTopButton>
      </FooterContainer>
    </StyledFooter>
  );
};
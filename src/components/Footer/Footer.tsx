import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '1199px',
    padding: '0 24px',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '639px',
    padding: '0 16px',
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Typography variant="body2" color="text.secondary">
          © 2025 Galera team
        </Typography>
      </FooterContainer>
    </StyledFooter>
  );
};
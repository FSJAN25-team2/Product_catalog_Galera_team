import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import PageLayout from './PageLayout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const GridExample = () => {
  return (
    <PageLayout>
      {/* Рядок 1: Повна ширина */}
      <Grid item xs={4} sm={12} lg={24}>
        <Item>Повна ширина (4/4 - 12/12 - 24/24)</Item>
      </Grid>

      {/* Рядок 2: Дві колонки */}
      <Grid item xs={2} sm={6} lg={12}>
        <Item>1/2 ширини (2/4 - 6/12 - 12/24)</Item>
      </Grid>
      <Grid item xs={2} sm={6} lg={12}>
        <Item>1/2 ширини (2/4 - 6/12 - 12/24)</Item>
      </Grid>

      {/* Рядок 3: Три колонки */}
      <Grid item xs={2} sm={4} lg={8}>
        <Item>1/3 ширини (2/4 - 4/12 - 8/24)</Item>
      </Grid>
      <Grid item xs={1} sm={4} lg={8}>
        <Item>1/3 ширини (1/4 - 4/12 - 8/24)</Item>
      </Grid>
      <Grid item xs={1} sm={4} lg={8}>
        <Item>1/3 ширини (1/4 - 4/12 - 8/24)</Item>
      </Grid>

      {/* Рядок 4: Чотири колонки */}
      <Grid item xs={1} sm={3} lg={6}>
        <Item>1/4 (1/4 - 3/12 - 6/24)</Item>
      </Grid>
      <Grid item xs={1} sm={3} lg={6}>
        <Item>1/4 (1/4 - 3/12 - 6/24)</Item>
      </Grid>
      <Grid item xs={1} sm={3} lg={6}>
        <Item>1/4 (1/4 - 3/12 - 6/24)</Item>
      </Grid>
      <Grid item xs={1} sm={3} lg={6}>
        <Item>1/4 (1/4 - 3/12 - 6/24)</Item>
      </Grid>
    </PageLayout>
  );
};

export default GridExample; 
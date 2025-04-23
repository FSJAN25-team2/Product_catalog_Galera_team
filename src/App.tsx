import { Outlet } from 'react-router-dom';
import { Header } from './design/organisms/Header/Header';
import { Footer } from './design/organisms/Footer/Footer';
import { GridTemplate } from './design/templates/GridTemplate';
import { GridRows } from './design/templates/GridRows';

function App() {
  return (
    <GridRows>
      <Header />

      <GridTemplate>
        <Outlet />
      </GridTemplate>

      <Footer />
    </GridRows>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { Header } from './design/organisms/Header/Header';
import { Footer } from './design/organisms/Footer/Footer';
import { BackToTop } from './design/molecules/BackToTop/BackToTop';
import { GridTemplate } from './design/templates/GridTemplate';

function App() {
  return (
    <>
      <Header />

      <GridTemplate> 
        <Outlet />
        <Footer />
        <BackToTop />
      </GridTemplate>
    </>
  );
}

export default App;

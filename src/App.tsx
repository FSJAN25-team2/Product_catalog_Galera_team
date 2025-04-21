import { Outlet } from 'react-router-dom';
import { NavBar } from './design/organisms/NavBar/NavBar';
import { Footer } from './design/organisms/Footer/Footer';
import { BackToTop } from './design/molecules/BackToTop/BackToTop';
import { GridTemplate } from './design/templates/GridTemplate';

function App() {
  return (
    <>
      <NavBar />

      <GridTemplate> 
        <Outlet />
        <Footer />
        <BackToTop />
      </GridTemplate>
    </>
  );
}

export default App;

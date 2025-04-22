import { Outlet } from 'react-router-dom';
import { Header } from './design/organisms/Header/Header';
import { Footer } from './design/organisms/Footer/Footer';
import { GridTemplate } from './design/templates/GridTemplate';

function App() {
  return (
    <>
      <Header />

      <GridTemplate>
        <Outlet />
        <Footer />
      </GridTemplate>
    </>
  );
}

export default App;

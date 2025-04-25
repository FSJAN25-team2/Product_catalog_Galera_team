import { Outlet } from 'react-router-dom';
import { Header } from './design/organisms/Header/Header';
import { Footer } from './design/organisms/Footer/Footer';
import { GridTemplate } from './design/templates/GridTemplate';
import { GridRows } from './design/templates/GridRows';
import { WelcomeAnimation } from './design/organisms/WelcomeAnimation/WelcomeAnimation';
import { useAppSelector } from './store/hooks';
import { useEffect } from 'react';

export const App = () => {
  const {theme} = useAppSelector(state => state.theme);

  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <WelcomeAnimation />
      <GridRows>
        <Header />
        <GridTemplate>
          <Outlet />
        </GridTemplate>
        <Footer />
      </GridRows>
    </>
  );
};

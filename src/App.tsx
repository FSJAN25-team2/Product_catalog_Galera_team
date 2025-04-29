import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './design/organisms/Header/Header';
import { Footer } from './design/organisms/Footer/Footer';
import { GridTemplate } from './design/templates/GridTemplate';
import { GridRows } from './design/templates/GridRows';
import { WelcomeAnimation } from './design/organisms/WelcomeAnimation/WelcomeAnimation';
import { useAppSelector } from './store/hooks';
import { useEffect } from 'react';

export const App = () => {
  const {theme} = useAppSelector(state => state.theme);
  const { pathname, search } = useLocation();

  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname, search]);

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

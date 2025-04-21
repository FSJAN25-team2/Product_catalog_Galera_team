import './design/organisms/NavBar/NavBar.scss';

import App from './App.tsx';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { PhonesPage } from './pages/PhonesPage/PhonesPage.tsx';
import { TabletsPage } from './pages/TabletsPage/TabletsPage.tsx';
import { ItemCard } from './pages/ProductPage/ProductPage.tsx';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

export const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />}></Route>
            <Route path="homepage" element={<Navigate to="/" />}></Route>
            <Route path="phones">
              <Route index element={<PhonesPage />} />
              <Route path=":tabId" element={<ItemCard />} />
            </Route>
            <Route path="tablets">
              <Route index element={<TabletsPage />} />
              <Route path=":tabId" element={<ItemCard />} />
            </Route>
            <Route path="accessories">
              <Route index element={<AccessoriesPage />} />
              <Route path=":tabId" element={<ItemCard />} />
            </Route>
            <Route path="favourites" element={<FavouritesPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
};

import App from './App.tsx';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { ItemCard } from './pages/ProductPage/ProductPage.tsx';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { PhonesCatalog } from './pages/Catalogs/PhonesCatalog/PhonesCatalog.tsx';
import { TabletsCatalog } from './pages/Catalogs/TabletsCatalog/TabletsCatalog.tsx';
import { AccessoriesCatalog } from './pages/Catalogs/AccessoriesCatalog/AccessoriesCatalog.tsx';

export const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />}></Route>
            <Route path="homepage" element={<Navigate to="/" />}></Route>
            <Route path="phones">
              <Route index element={<PhonesCatalog />} />
              <Route path=":tabId" element={<ItemCard />} />
            </Route>
            <Route path="tablets">
              <Route index element={<TabletsCatalog />} />
              <Route path=":tabId" element={<ItemCard />} />
            </Route>
            <Route path="accessories">
              <Route index element={<AccessoriesCatalog />} />
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

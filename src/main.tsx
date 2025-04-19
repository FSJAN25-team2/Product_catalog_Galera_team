import './styles/NavBar.scss';

import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage.tsx';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog.tsx';
import { TabletsCatalog } from './components/TabletsCatalog/TabletsCatalog.tsx';
import { ItemCard } from './components/ItemCard/ItemCard.tsx';
import { Favourites } from './components/Favourites/Favourites.tsx';
import { Accessories } from './components/Accessories/Accessories.tsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="homepage" element={<Navigate to="/" />}></Route>
          <Route path="phones" element={<PhonesCatalog />}>
            <Route path=":itemId" element={<ItemCard />}></Route>
          </Route>
          <Route path="tablets" element={<TabletsCatalog />}>
            <Route path=":itemId" element={<ItemCard />}></Route>
          </Route>
          <Route path="accessories" element={<Accessories />}>
            <Route path=":itemId" element={<ItemCard />}></Route>
          </Route>
          <Route path="favourites" element={<Favourites />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </Provider>,
);

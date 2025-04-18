import './styles/NavBar.scss'

import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage.tsx'
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog.tsx'
import { TabletsCatalog } from './components/TabletsCatalog/TabletsCatalog.tsx'
import { ItemCard } from './components/ItemCard/ItemCard.tsx'
import { Favourites } from './components/Favourites/Favourites.tsx'
import { Accessories } from './components/Accessories/Accessories.tsx'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<HomePage />}></Route>
                <Route path='homepage' element={<Navigate to="/" />}></Route>
                <Route path='phones' element={<PhonesCatalog />}>
                    <Route path='?itemId' element={<ItemCard />}></Route>
                </Route>
                <Route path='tablets' element={<TabletsCatalog />}>
                    <Route path='?itemId' element={<ItemCard />}></Route>
                </Route>
                <Route path='accessories' element={<Accessories />}></Route>
                <Route path='favourites' element={<Favourites />}></Route>
            </Route>
        </Routes>
    </HashRouter>
)

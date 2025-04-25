import { ProductCard } from "../../design/organisms/ProductCard/ProductCard";
import { useAppSelector } from "../../store/hooks"
import { H1 } from "../../design/atoms/Typography/H1/H1";
import { P } from "../../design/atoms/Typography/P/P";
import "./FavouritesPage.scss";

export const FavouritesPage = () => {
  const favourites = useAppSelector(state => state.favouriteProducts);
  
  return (
    <div className="favourites-page container-margin">
      <H1 className="favourites-page__title">Favourites</H1>
      <P className="favourites-page__count">{favourites.length} items</P>
      <div className="global-container">
        {favourites.map(fav => {
          return (
            <ProductCard key={fav.itemId} product={fav} />
          )
        })}
      </div>
    </div>
  )
}
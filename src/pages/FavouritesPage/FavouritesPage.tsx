import { ProductCard } from "../../design/organisms/ProductCard/ProductCard";
import { useAppSelector } from "../../store/hooks"

export const FavouritesPage = () => {
  const favourites = useAppSelector(state => state.favouriteProducts);
  console.log(favourites);
    return (
      <>
      {favourites.map(fav => {
        return (
          <ProductCard product={fav} />
        )
      })}
      </>
        // <h1>Favourites content</h1>
    )
}
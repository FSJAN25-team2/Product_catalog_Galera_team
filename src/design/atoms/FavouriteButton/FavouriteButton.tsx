import cn from 'classnames';
import { FC } from 'react';
import { useAppSelector } from '../../../store/hooks';

interface FavouriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isInFavourites?: boolean;
}

export const FavouriteButton: FC<FavouriteButtonProps> = ({
  isInFavourites = false,
  ...rest
}) => {
  const theme = useAppSelector(state => state.theme.theme === 'dark')

  return (
    <button
      // style={{backgroundImage: 'url(/public/icons/favourites-icon.svg)'}}
      className={cn('favourite', { 'favourite--active': isInFavourites, 'favourite--dark': theme })}
      {...rest}
    />
  );
};

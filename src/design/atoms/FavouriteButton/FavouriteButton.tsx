import cn from 'classnames';
import { FC } from 'react';

interface FavouriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isInFavourites?: boolean;
}

export const FavouriteButton: FC<FavouriteButtonProps> = ({
  isInFavourites = false,
  ...rest
}) => {
  return (
    <button
      className={cn('favourite', { 'favourite--active': isInFavourites })}
      {...rest}
    />
  );
};

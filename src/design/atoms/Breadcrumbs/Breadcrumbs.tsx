import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import { Home as HomeIcon, NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { BreadcrumbsProps } from './types';
import styles from './Breadcrumbs.module.scss';
import { Capitalize } from '../../../utils/helpers';

const DEFAULT_LABELS: Record<string, string> = {
  phones: 'Phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
  favourites: 'Favourites',
  cart: 'Cart',
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  routeLabels = DEFAULT_LABELS,
  className,
  ...muiProps
}) => {
  const location = useLocation();
  
  const breadcrumbItems = useMemo(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = routeLabels[segment.toLowerCase()] || segment;
      const isLast = index === pathSegments.length - 1;
      
      return { path, label, isLast };
    });
  }, [location.pathname, routeLabels]);

  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <MUIBreadcrumbs
      separator={<NavigateNextIcon className={styles.separator} fontSize="small" />}
      className={className}
      {...muiProps}
    >
      <Link to="/" className={styles.link}>
        <HomeIcon className={styles.icon} fontSize="small" />
      </Link>

      {breadcrumbItems.map(({ path, label, isLast }) => (
        isLast ? (
          <Typography
            key={path}
            variant="body2"
            className={styles.current}
          >
            {label.split('-').map(part => Capitalize(part)).join(' ')} 
          </Typography>
        ) : (
          <Link
            key={path}
            to={path}
            className={styles.link}
          >
            {label}
          </Link>
        )
      ))}
    </MUIBreadcrumbs>
  );
}; 
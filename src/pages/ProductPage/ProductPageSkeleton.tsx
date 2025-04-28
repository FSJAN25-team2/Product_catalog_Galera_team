import { Skeleton, Stack } from '@mui/material';

export const ProductPageSkeleton = () => {
  return (
    <Stack spacing={3} alignItems={'center'} bgcolor={'var(--surface-card)'} className='product'>
      <Skeleton //title
        variant="rectangular"
        className='product__title'
      />

      <Skeleton //big photo
        variant="rectangular"
        className='slider__outer-container'
      />
      <Skeleton //thumbnails
        variant="rectangular"
        height={49}
        width={288}
        sx={{ backgroundColor: 'var(--checkout)' }}
      />
      <Skeleton //availablecolors
        variant="rectangular"
        height={55}
        width={152}
        sx={{ alignSelf: 'flex-start', backgroundColor: 'var(--checkout)' }}
      />
      <Skeleton //capacity
        variant="rectangular"
        height={55}
        width={195}
        sx={{ alignSelf: 'flex-start', backgroundColor: 'var(--checkout)' }}
      />
      <Skeleton //price
        variant="rectangular"
        height={41}
        width={132}
        sx={{ alignSelf: 'flex-start', backgroundColor: 'var(--checkout)' }}
      />
      <Skeleton //buttons
        variant="rectangular"
        height={48}
        width={'100%'}
        sx={{ backgroundColor: 'var(--checkout)' }}
      />
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>

      <Skeleton //description
        variant="rectangular"
        height={875}
        width={'100%'}
        sx={{ backgroundColor: 'var(--checkout)' }}
      />

      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
    </Stack>
  );
};

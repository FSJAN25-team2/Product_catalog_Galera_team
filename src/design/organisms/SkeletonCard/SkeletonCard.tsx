import { Skeleton, Stack } from '@mui/material'
export const SkeletonCard = () => {
  return (
    <Stack spacing={1} alignItems={'center'} bgcolor={'var(--surface-card)'}>
      <Skeleton variant='rectangular' height={275} width={200} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='rectangular' height={40} width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='rectangular' height={40} width={'50%'} sx={{alignSelf: 'flex-start', backgroundColor: "var(--checkout)"}}/>

      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='text' width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
      <Skeleton variant='rectangular' height={40} width={'100%'} sx={{backgroundColor: "var(--checkout)"}}/>
    </Stack>
  );
};

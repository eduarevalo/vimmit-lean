import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PinDrop from '@mui/icons-material/PinDropOutlined';
import { Button } from '@mui/material';
import { Store as StoreType } from '@/hooks/data/useStores';

export type StoreProps = StoreType & {
    
}

export default function Store(props: StoreProps) {
  const { name, address } = props;
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {address.city}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="Get directions" color="primary">
            <PinDrop />
          </IconButton>
          <Button variant='contained' color='secondary'>Order</Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
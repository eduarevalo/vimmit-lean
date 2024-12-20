import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PinDrop from '@mui/icons-material/PinDropOutlined';
import { Button, Chip } from '@mui/material';
import { Store as StoreType } from '@/hooks/data/useStores';
import { useTranslations } from 'next-intl';

export type StoreProps = StoreType & {
    
}

export default function Store(props: StoreProps) {
  const t = useTranslations('COMPONENT_STORE');
  const { name, address, picture, services } = props;
  return (
    <Card sx={{ display: 'flex' }}>
      
      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {[address.city, address.postalCode].filter(v => !!v).join(', ')}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="Get directions" color="primary">
            <PinDrop />
          </IconButton>
          <Button variant='contained' color='secondary'>{t('ORDER')}</Button>
          {t('SERVICES')}
          { services.map(service => <Chip key={service} color="secondary" variant="outlined" label={t(service)}/>) }
        </Box>
      </Box>
      
      { 
        picture && 
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={picture}
        />
      }

      { !picture && 
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: 1,
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
          }}
        />
      }
    </Card>
  );
}
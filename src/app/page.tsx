'use client'
import { Container, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import StoreTab from "@/components/front-store/StoreTab";
import DeliveryTab from "@/components/front-store/DeliveryTab";
import { useTranslations } from "next-intl";
import MenuTab from "@/components/front-store/MenuTab";

export default function Home() {
  const [value, setValue] = useState('1');
  const t = useTranslations('FRONT_STORE')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: '108px'}}>
      <TabContext value={value}>
        <Stack style={{ height: '100%', width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant='fullWidth' indicatorColor="secondary">
              <Tab label={t('MENU')} value="1"  />
              <Tab label={t('STORES')} value="2" />
              <Tab label={t('DELIVERY')} value="3" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="1">
              <MenuTab />
            </TabPanel>
            <TabPanel value="2">
              <StoreTab />
            </TabPanel>
            <TabPanel value="3">
              <DeliveryTab />
            </TabPanel>
          </Box>
        </Stack>
      </TabContext>
      <div style={{ paddingTop: '130px', paddingBottom: '130px' }}>
        <Container maxWidth="md">
          <Stack
            direction="row"
            style={{ width: '100%'}}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <div style={{ flexGrow: 1 }}>
              <Typography>Les Aliments Masa Inc.</Typography>
            </div>
            
            <div>
              <Typography variant="h5">Menu</Typography>
              <List>
                <ListItem>Menu</ListItem>
                <ListItem>Recipes</ListItem>
              </List>
            </div>
            <div>
              <Typography variant="h5">Social</Typography>
              <List>
                <ListItem>Facebook</ListItem>
                <ListItem>Instagram</ListItem>
                <ListItem>Google</ListItem>
                <ListItem>TikTok</ListItem>
              </List>
            </div>
            <div>
              <Typography variant="h5">Corporative</Typography>
              <List>
                <ListItem>About us</ListItem>
                <ListItem>Franchises</ListItem>
                <ListItem>Trademark</ListItem>
              </List>
            </div>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

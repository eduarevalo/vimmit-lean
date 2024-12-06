'use client'
import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import Store from "@/components/store/Store";
import { useStores } from "@/hooks/data/useStores";

export default function Home() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { all } = useStores();

  return (
    <div>
    <TabContext value={value}>
      <Stack style={{ height: '100%', width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth' indicatorColor="secondary">
            <Tab label="Pickup" value="1"  />
            <Tab label="Stores" value="2" />
            <Tab label="Delivery" value="3" />
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1">Pickup</TabPanel>
          <TabPanel value="2">
            <Stack spacing={1}>
              { all.map(store => <Store key={store.id} {...store} />) } 
            </Stack>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Box>
        </Stack>
      </TabContext>
    </div>
  );
}

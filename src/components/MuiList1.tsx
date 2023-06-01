import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { mdiFacebook, mdiLinkedin, mdiWhatsapp } from '@mdi/js';

interface Item {
  icon: string;
  platformName: string;
  status: string;
  name: string;
}

const data: Item[] = [
  {
    icon: mdiFacebook,
    platformName: "Facebook",
    status: "connected",
    name: "Kiriti",
  },
  {
    icon: mdiLinkedin,
    platformName: "LinkedIn",
    status: "connecting",
    name: "Mamun",
  },
  {
    icon: mdiWhatsapp,
    platformName: "WhatsApp",
    status: "connected",
    name: "Jahid",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ backgroundColor: '#e0e0e0', padding: '8px' }}>
          <Typography variant="h6">Icon</Typography>
        </Grid>
        <Grid item xs={3} sx={{ backgroundColor: '#e0e0e0', padding: '8px' }}>
          <Typography variant="h6">Platform Name</Typography>
        </Grid>
        <Grid item xs={3} sx={{ backgroundColor: '#e0e0e0', padding: '8px' }}>
          <Typography variant="h6">Status</Typography>
        </Grid>
        <Grid item xs={3} sx={{ backgroundColor: '#e0e0e0', padding: '8px' }}>
          <Typography variant="h6">name</Typography>
        </Grid>

        <Divider />

        {data.map((item: Item, index: number) => (
          <React.Fragment key={index}>
            <Grid item xs={3}>
              <SvgIcon component={props => <svg {...props}><path d={item.icon} /></svg>} viewBox="0 0 24 24" fontSize="large"  />
            </Grid>
            <Grid item xs={3}>
              <Typography>{item.platformName}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{item.status}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{item.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default App;

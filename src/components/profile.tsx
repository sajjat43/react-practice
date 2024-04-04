import React from 'react';
import { Paper, Grid, Avatar, Box, Typography, AppBar, Tabs, Tab, Switch, Divider } from '@mui/material';

const ProfileComponent = () => {
  return (
    <Paper elevation={1}  sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item>
          <Avatar alt="profile-image" src="/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg" />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h5">Richard Davis</Typography>
            <Typography variant="button">CEO / Co-Founder</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Tabs value={0} variant="fullWidth" indicatorColor="primary">
              <Tab label={<span className="material-icons-round">home</span>} />
              <Tab label={<span className="material-icons-round">email</span>} />
              <Tab label={<span className="material-icons-round">settings</span>} />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4}>
            <Paper elevation={1}  sx={{ p: 2 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h6">Platform Settings</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="caption">Account</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Switch size="medium" checked />
                  <Typography variant="button">Email me when someone follows me</Typography>
                </Box>
              </Box>
              {/* Repeat the remaining settings */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Paper elevation={1}  sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6">Profile Information</Typography>
                <a href="#/profile" className="MuiTypography-body2">
                  <span className="material-icons-round" aria-hidden="true" aria-label="Edit Profile">edit</span>
                </a>
              </Box>
              {/* Display profile information */}
            </Paper>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          </Grid>
          <Grid item xs={12} xl={4}>
            <Paper elevation={1}  sx={{ p: 2 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h6">Conversations</Typography>
              </Box>
              <Box>
                {/* Display conversations */}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProfileComponent;

import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const UserProfile = () => {
  return (
    <section style={{ backgroundColor: '#eee',paddingBottom: '20px' }}>
      <Container>
        <Grid container spacing={4}>
        <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Breadcrumbs>
                <Link color="inherit" href="#">Home</Link>
                <Typography color="textPrimary">User Profile</Typography>
              </Breadcrumbs>
              <Button variant="contained" color="primary">
                Edit Profile
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card elevation={3} style={{ marginBottom: '20px' }}>
              <CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  style={{ width: 100, height: 100, borderRadius: '50%' }}
                />
                <Typography variant="h5" gutterBottom>John Smith</Typography>
                <Typography variant="body2" color="textSecondary">Full Stack Developer</Typography>
                <ListItemText primary={
                  <Box display="flex" alignItems="center">
                  <LinkedInIcon style={{ marginRight: '8px' }} />
                  <Typography variant="body2" color="textSecondary">
                    150 Connection
                  </Typography>
                </Box>
                }
          />
              
              </CardContent>

            </Card>
            <CardContent style={{ padding: '0' }}>
      <Card elevation={3}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Typography variant="body2">Company: </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">ProspectEngine</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Typography variant="body2">Profaction: </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">Marketing</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Typography variant="body2">Location: </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">Dhaka</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Typography variant="body2">Campaign: </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">Test</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Card>
    </CardContent>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card elevation={3} style={{ marginBottom: '16px' }}>
              <CardContent>
              
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default UserProfile;

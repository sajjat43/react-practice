import React, { useState } from 'react';
import { Box, Button, Grid, Input, Typography, Card, CardActionArea, CardMedia, CardContent, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export const MuiPage2 = () => {
  const tooltipText = "Pick this template to start getting more leads for your business";
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardSelect = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };

  return (
    <Grid container className="camp-create__view" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container component="nav" justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button variant="contained" className="camp-templates__tab-text camp-templates__tab-text--active">
                  Pre-built Templates
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button variant="contained" className="camp-templates__tab-text">Saved Templates</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr />
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <Box>
                    <label htmlFor="searcher"></label>
                    <Box>
                      <Box>
                        <Input id="searcher" name="searcher" type="search" autoComplete="off"
                          inputProps={{ inputMode: "search", enterKeyHint: "search" }} />
                        <label htmlFor="searcher">Search</label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardSelect(0)}>
                    <CardMedia component="img" height="180" image={'/images/a.svg'} alt="green iguana"
                      sx={{ backgroundColor:  '#e3e8ef', justifyContent: 'center', alignItems: 'center', padding: '16%', width: '69%' }} />
                    <CardContent sx={{ borderTop: '1px solid', borderColor: 'grey.300', backgroundColor: selectedCard === 0 ? 'primary.main' : 'white', color: selectedCard === 0 ? 'white' : 'initial' }}>
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div">
                            <span>Lizard</span>
                          </Typography>
                          <Tooltip title={tooltipText} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
  variant="outlined"
  sx={{
    visibility: selectedCard !== null ? 'visible' : 'hidden',
   
    borderColor: selectedCard !== null ? 'white' : 'initial',
    backgroundColor: selectedCard !== null ? 'white' : 'initial',
    '&:hover': {
      color: selectedCard === null ? 'primary.main' : 'initial',
      backgroundColor: selectedCard === null ? 'white' : 'initial'
    }
  }}
>
  Preview
</Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardSelect(1)}>
                    <CardMedia component="img" height="180" image={'/images/a.svg'} alt="green iguana"
                      sx={{ backgroundColor:  '#e3e8ef', justifyContent: 'center', alignItems: 'center', padding: '16%', width: '69%' }} />
                    <CardContent sx={{ borderTop: '1px solid', borderColor: 'grey.300', backgroundColor: selectedCard === 1 ? 'primary.main' : 'white', color: selectedCard === 1 ? 'white' : 'initial' }}>
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div">
                            <span>Lizard</span>
                          </Typography>
                          <Tooltip title={tooltipText} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
  variant="outlined"
  sx={{
    visibility: selectedCard !== null ? 'visible' : 'hidden',
   
    borderColor: selectedCard !== null ? 'white' : 'initial',
    backgroundColor: selectedCard !== null ? 'white' : 'initial',
    '&:hover': {
      color: selectedCard === null ? 'primary.main' : 'initial',
      backgroundColor: selectedCard === null ? 'white' : 'initial'
    }
  }}
>
  Preview
</Button>

                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardSelect(2)}>
                    <CardMedia component="img" height="180" image={'/images/a.svg'} alt="green iguana"
                      sx={{ backgroundColor:  '#e3e8ef', justifyContent: 'center', alignItems: 'center', padding: '16%', width: '69%' }} />
                    <CardContent sx={{ borderTop: '1px solid', borderColor: 'grey.300', backgroundColor: selectedCard === 2 ? 'primary.main' : 'white', color: selectedCard === 2 ? 'white' : 'initial' }}>
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div">
                            <span>Lizard</span>
                          </Typography>
                          <Tooltip title={tooltipText} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
  variant="outlined"
  sx={{
    visibility: selectedCard !== null ? 'visible' : 'hidden',
   
    borderColor: selectedCard !== null ? 'white' : 'initial',
    backgroundColor: selectedCard !== null ? 'white' : 'initial',
    '&:hover': {
      color: selectedCard === null ? 'primary.main' : 'initial',
      backgroundColor: selectedCard === null ? 'white' : 'initial'
    }
  }}
>
  Preview
</Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardSelect(3)}>
                    <CardMedia component="img" height="180" image={'/images/a.svg'} alt="green iguana"
                      sx={{ backgroundColor:  '#e3e8ef', justifyContent: 'center', alignItems: 'center', padding: '16%', width: '69%' }} />
                    <CardContent sx={{ borderTop: '1px solid', borderColor: 'grey.300', backgroundColor: selectedCard === 3 ? 'primary.main' : 'white', color: selectedCard === 3 ? 'white' : 'initial' }}>
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div">
                            <span>Lizard</span>
                          </Typography>
                          <Tooltip title={tooltipText} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
  variant="outlined"
  sx={{
    visibility: selectedCard !== null ? 'visible' : 'hidden',
   
    borderColor: selectedCard !== null ? 'white' : 'initial',
    backgroundColor: selectedCard !== null ? 'white' : 'initial',
    '&:hover': {
      color: selectedCard === null ? 'primary.main' : 'initial',
      Color: selectedCard === null ? 'white' : 'initial'
    }
  }}
>
  Preview
</Button>

                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <hr />
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Button variant="contained" color="primary" id="selectTemplate">
                  Select template
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

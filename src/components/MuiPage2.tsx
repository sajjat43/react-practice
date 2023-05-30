
import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


const MuiPage2 = () => {
  const tooltipText = "Pick this template to start getting more leads for your business";
  const tooltipText1 = "Pick this template to get endorsements and boost your profile credibility";
  const tooltipText2 = "Pick this template to grab some extra attention and increase your profile views";
  const tooltipText3 = "Pick this template to create your custom campaign from scratch";
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showSavedTemplates, setShowSavedTemplates] = useState(false);

  const handleCardSelect = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };

  const handleSelectTemplate = () => {
    if (selectedCard !== null) {
      if (selectedCard === 0) {
        alert("Lead Generation Template");
      } else if (selectedCard === 1) {
        alert("Endorse my skill Template");
      } else if (selectedCard === 2) {
        alert("Extra Profile View Template");
      } else if (selectedCard === 3) {
        alert("Custom Campaign Template");
      }
    }
  };

  const handleSavedTemplatesClick = () => {
    setShowSavedTemplates(true);
  };

  const handlePrebuiltTemplatesClick = () => {
    setShowSavedTemplates(false);
  };

  return (
    <Grid container  spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container component="nav" justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button variant="contained" onClick={handlePrebuiltTemplatesClick}>
                  Pre-built Templates
                </Button>
                
              </Grid>
              <Button variant="contained" onClick={handleSavedTemplatesClick}>
                  Saved Templates
                </Button>
              
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr />
            {showSavedTemplates ? (
             <Box
             display="flex"
             justifyContent="center"
             alignItems="center"
             height="100%"
             width="100%"
           >
             <Typography variant="body1">
               You do not have any Saved Templates as for now.
             </Typography>
           </Box>
            ) : (
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardSelect(0)}>
                    <CardMedia component="img" height="180" image={'/images/a.svg'} alt="green iguana"
                      sx={{ backgroundColor:  '#e3e8ef', justifyContent: 'center', alignItems: 'center', padding: '16%', width: '69%' }} />
                    <CardContent sx={{
                      borderTop: '1px solid',
                      borderColor: 'grey.300',
                      backgroundColor: selectedCard === 0 ? 'primary.main' : 'white',
                      color: selectedCard === 0 ? 'white' : 'initial'
                    }}>
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div"  sx={{
                             fontSize: '16px'
                            }}    >
                            <span>Lead Generation</span>
                          </Typography>
                          <Tooltip title={tooltipText} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
                        variant="outlined"
                        sx={{
                             backgroundColor: selectedCard !== null ? 'white' : 'initial',
                             '&:hover': {
                                 color: selectedCard === null ? 'white' : 'initial',
                                 backgroundColor: selectedCard === null ? 'primary.main' : 'white'
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
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/a.svg"
                      alt="green iguana"
                      sx={{
                        backgroundColor: '#e3e8ef',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16%',
                        width: '69%',
                      }}
                    />
                    <CardContent
                      sx={{
                        borderTop: '1px solid',
                        borderColor: 'grey.300',
                        backgroundColor: selectedCard === 1 ? 'primary.main' : 'white',
                        color: selectedCard === 1 ? 'white' : 'initial',
                      }}
                    >
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div" sx={{
                             fontSize: '16px'
                            }}   >
                            <span>Endorse My Skill</span>
                          </Typography>
                          <Tooltip title={tooltipText1} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
                        variant="outlined"
                        sx={{
                            
                             backgroundColor: selectedCard !== null ? 'white' : 'initial',
                            
                             '&:hover': {
                                 color: selectedCard === null ? 'white' : 'initial',
                                 backgroundColor: selectedCard === null ? 'primary.main' : 'white'
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
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/a.svg"
                      alt="green iguana"
                      sx={{
                        backgroundColor: '#e3e8ef',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16%',
                        width: '69%',
                      }}
                    />
                    <CardContent
                      sx={{
                        borderTop: '1px solid',
                        borderColor: 'grey.300',
                        backgroundColor: selectedCard === 2 ? 'primary.main' : 'white',
                        color: selectedCard === 2 ? 'white' : 'initial',
                      }}
                    >
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div" sx={{
                             fontSize: '16px'
                            }}   >
                            <span>Extra Profile Views</span>
                          </Typography>
                          <Tooltip title={tooltipText2} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
                        variant="outlined"
                        sx={{
                             backgroundColor: selectedCard !== null ? 'white' : 'initial',
                           
                             '&:hover': {
                                 color: selectedCard === null ? 'white' : 'initial',
                                 backgroundColor: selectedCard === null ? 'primary.main' : 'white'
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
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/a.svg"
                      alt="green iguana"
                      sx={{
                        backgroundColor: '#e3e8ef',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16%',
                        width: '69%',
                      }}
                    />
                    <CardContent
                      sx={{
                        borderTop: '1px solid',
                        borderColor: 'grey.300',
                        backgroundColor: selectedCard === 3 ? 'primary.main' : 'white',
                        color: selectedCard === 3 ? 'white' : 'initial',
                      }}
                    >
                      <Box textAlign="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography
                           gutterBottom variant="h5"
                           component="div" 
                          sx={{
                             fontSize: '16px'
                            }}>
                            <span>Custom Campaign</span>
                          </Typography>
                          <Tooltip title={tooltipText3} placement="bottom">
                            <InfoIcon />
                          </Tooltip>
                        </Box>
                        <Button
                        variant="outlined"
                        sx={{
                             backgroundColor: selectedCard !== null ? 'white' : 'initial',
                             '&:hover': {
                                 color: selectedCard === null ? 'white' : 'initial',
                                 backgroundColor: selectedCard === null ? 'primary.main' : 'white'
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
            )}
            <hr />
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  id="selectTemplate"
                  disabled={selectedCard === null}
                  onClick={handleSelectTemplate}
                >
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

export default MuiPage2;

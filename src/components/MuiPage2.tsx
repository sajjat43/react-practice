import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
interface TemplateOptionProps {
  index: number;
  image: string;
  title: string;
  tooltipText: string;
  selectedCard: number | null;
  handleCardSelect: (index: number) => void;
}

const TemplateOption: React.FC<TemplateOptionProps> = ({ index, image, title, tooltipText, selectedCard, handleCardSelect }) =>  {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => handleCardSelect(index)}>
          <CardMedia
            component="img"
            height="200"
            image={image}
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
              backgroundColor: selectedCard === index ? 'primary.main' : 'white',
              color: selectedCard === index ? 'white' : 'initial',
            }}
          >
            <Box textAlign="center">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px' }}>
                  <span>{title}</span>
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
                    backgroundColor: selectedCard === null ? 'primary.main' : 'white',
                  },
                }}
              >
                Preview
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const MuiPage2 = () => {
  const templateOptions = [
    {
      index: 0,
      image: '/images/a.svg',
      title: 'Lead Generation',
      tooltipText: 'Pick this template to start getting more leads for your business',
    },
    {
      index: 1,
      image: '/images/b.svg',
      title: 'Endorse My Skill',
      tooltipText: 'Pick this template to get endorsements and boost your profile credibility',
    },
    {
      index: 2,
      image: '/images/c.svg',
      title: 'Extra Profile Views',
      tooltipText: 'Pick this template to grab some extra attention and increase your profile views',
    },
    {
      index: 3,
      image: '/images/d.svg',
      title: 'Custom Campaign',
      tooltipText: 'Pick this template to create your custom campaign from scratch',
    },
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardSelect = (cardIndex: number) => {
    if (selectedCard === cardIndex) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardIndex);
    }
  };

  const handleSelectTemplate = () => {
    if (selectedCard !== null) {
      alert(templateOptions[selectedCard].title + ' Template');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container component="nav" justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button variant="contained">Pre-built Templates</Button>
              </Grid>
              <Button variant="contained">Saved Templates</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr />
            <Grid container spacing={2}>
              {templateOptions.map((option) => (
                <TemplateOption
                  key={option.index}
                  index={option.index}
                  image={option.image}
                  title={option.title}
                  tooltipText={option.tooltipText}
                  selectedCard={selectedCard}
                  handleCardSelect={handleCardSelect}
                />
              ))}
            </Grid>
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

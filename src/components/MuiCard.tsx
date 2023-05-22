import { Box,Card,CardContent,Typography,CardActions,Button, CardMedia} from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
            alt='unsplash image'
            />
            <CardContent>
                <Typography variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.primary'>In the second import statement, 
                you are trying to import the FavoriteBorderIcon from the @mui/icons-material package. 
                However, you are missing the specific icon name in the import statement. To fix this,
                 you need to provide the correct icon name after / in the import path. In this case,
                  I assume you intended to import the FavoriteBorderIcon. Adjust the import statement 
                  as shown above.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'  variant="contained">Share</Button>
                <Button size='small' variant='outlined'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

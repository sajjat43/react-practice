import { Stack,ImageList,ImageListItem } from "@mui/material"

export const MuiImagelist = () => {
  return (
    <Stack spacing={4}>
      
      <ImageList 
      sx={{width:500, height:450}}
      cols={3}
      rowHeight={164}
      >
        {
          itemData.map(item =>( <ImageListItem key={item.image}>
            <img src={`{$item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
          </ImageListItem>))
        }
      </ImageList>
    </Stack>
  )
}


const itemData=[
  {
    image:'https://pixabay.com/photos/flag-sea-turkey-foca-kusadasi-1244648/',
    title:'Flower'

  },
  {
    image:'https://pixabay.com/photos/sea-sunset-boat-dusk-ocean-water-164989/',
    title:'sea-sunset'

  },
  {
    image:'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/',
    title:'tree-sunset'

  },
  {
    image:'https://pixabay.com/photos/mountains-birds-silhouette-sunset-100367/',
    title:'mountains-birds'

  },
  {
    image:'https://pixabay.com/photos/mountains-sun-clouds-peak-summit-190055/',
    title:'mountains-sun'

  },
  {
    image:'https://pixabay.com/photos/forest-trees-sun-rays-sunlight-fog-1072828/',
    title:'forest-trees'

  },
  {
    image:'https://pixabay.com/photos/river-autumn-trees-leaves-foliage-219972/',
    title:'river-autumn'

  },
  {
    image:'https://pixabay.com/photos/avenue-trees-path-sunbeams-sunrays-815297/',
    title:'avenue-trees'

  }

]
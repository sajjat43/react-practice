import { Stack, Button , IconButton , ButtonGroup, ToggleButtonGroup, ToggleButton , } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlineIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'




export const MuiButton = () => {
  const [formats,setFormats]= useState<string | null >(null)
  console.log({
    formats,
  })
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormates: string | null)=>{

    setFormats(updatedFormates)
  }
  return (
    <Stack spacing={4}>
   <Stack spacing={2} direction='row'>
    <Button variant='text' >Text</Button>
    <Button variant='contained'>Text</Button>
    <Button variant='outlined'>Text</Button>
   </Stack>
   <Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>secondary</Button>
    <Button variant='contained' color='info'>info</Button>
    <Button variant='contained' color='warning'>Warning</Button>
    <Button variant='contained' color='success'>Success</Button>
    <Button variant='contained' color='error'>Error</Button>
   </Stack>
   <Stack display='block' spacing={2} direction='row'>
    <Button variant='contained' size="small">Small</Button>
    <Button variant='contained' size="medium">Mediem</Button>
    <Button variant='contained' size="large">Large</Button>
   </Stack>
   <Stack spacing={2} direction='row'>
    <Button variant="contained" startIcon={<SendIcon />} color="warning" disableRipple onClick={()=>alert('Clicked')}>send</Button>
    <Button variant="contained" endIcon={<SendIcon/>} disableElevation>send</Button>
    <Button variant="contained" endIcon={<SendIcon/>} disableElevation disableRipple >Test</Button>

    <IconButton aria-label='send'  color='success' size="small">
      <SendIcon/>
    </IconButton>

   </Stack>

  <Stack direction="row"  >
  <ButtonGroup variant="contained" orientation='vertical' aria-label="alignment button group">
  <Button>left</Button>
  <Button>center</Button>
  <Button>right</Button>
  </ButtonGroup>
  </Stack>

  <Stack direction="row" >
  <ButtonGroup variant="outlined">
  <Button onClick={()=> alert('left button click')}>left</Button>
  <Button>center</Button>
  <Button>right</Button>
  </ButtonGroup>
  </Stack>


  <Stack direction='row'>
    <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small' color='success' orientation='vertical' exclusive>
   <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
   <ToggleButton value="italic" aria-label='italic'><FormatItalicIcon/></ToggleButton>
   <ToggleButton value="underline" aria-label='underlined'><FormatUnderlineIcon/></ToggleButton>

    </ToggleButtonGroup>

  </Stack>

   </Stack>
  )
}


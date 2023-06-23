import { Button, Checkbox, FormControlLabel, TextField, Select, MenuItem, Box,Tooltip,FormControl,InputLabel,Grid} from
'@mui/material';
import InfoIcon from '@mui/icons-material/Info';
const MyComponent = () => {
const tooltipText = "Pick this template to start getting more leads for your business";
return (
<Box>
  <Box>
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box id="one">
        <div>
          <Box>
            <Box sx={{ display: 'flex', gap: '16px' }} justifyContent="space-between">
              <label htmlFor="Name">Campaign name <span>*</span></label>
              <TextField id="Name" name="Name" type="text" sx={{ width: '350px' }} autoComplete="off"
                placeholder="Give your campaign a name here… " />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginTop: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="Webhook">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Webhooks integration
                  <Tooltip title={tooltipText} placement="bottom" arrow>
                    <InfoIcon sx={{ color: 'primary.main', marginLeft: '0.5rem' }} />
                  </Tooltip>
                </span>
                <span>(optional)</span>
              </label>
            </Box>
            <Box sx={{ marginLeft: '16px' }}>
              <FormControl sx={{ width: '350px' }}>
                <InputLabel id="webhook-label" htmlFor="Webhook">
                  Choose when to push data
                </InputLabel>
                <Select id="Webhook" name="Webhook" variant="outlined" labelId="webhook-label"
                  label="Choose when to push data" value="">
                  <MenuItem value="">No integration</MenuItem>
                  <MenuItem value="connection-request-sent">After a connection request is sent</MenuItem>
                  <MenuItem value="connection-request-email">After a connection request by email is sent</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </div>
      </Box>
      <Box id="two">
  <p>Do not add a lead to the campaign if:</p>
  <br />
  <Box>
    <Box>
      <FormControlLabel
        control={<Checkbox id="reason-DUPLICATE" name="reason-DUPLICATE" />}
        label={
          <span>
            Same leads found in other campaigns <span>(default)</span>
          </span>
        }
      />
    </Box>
  </Box>
  <Box>
    <Box>
      <FormControlLabel
        control={<Checkbox id="reason-IS_NOT_OPEN_PROFILE" name="reason-IS_NOT_OPEN_PROFILE" />}
        label={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Does not have an open profile
            <Tooltip title={tooltipText} placement="bottom" arrow>
              <InfoIcon sx={{ color: 'primary.main', marginLeft: '0.5rem' }} />
            </Tooltip>
          </span>
        }
      />
    </Box>
  </Box>
  <Box>
    <FormControlLabel control={<Checkbox id="reason-NO_PHOTO" name="reason-NO_PHOTO" />} label={<span>No photo on lead’s profile</span>} />
  </Box>
  <Box>
    <FormControlLabel control={<Checkbox id="reason-LESS_THAN_500_CONNECTIONS" name="reason-LESS_THAN_500_CONNECTIONS" />} label={<span>Less than 500 connections</span>} />
  </Box>
  <Box>
    <FormControlLabel control={<Checkbox id="reason-FREE_ACCOUNT" name="reason-FREE_ACCOUNT" />} label={<span>Having a free LinkedIn account</span>} />
    <p>Selecting these options will cause slower lead upload time.</p>
  </Box>
</Box>

    </Box>
    <Box>
      <hr />
      <Grid container justifyContent="center" spacing={4}>
  <Grid item>
    <Button id="step3Prev" variant="outlined">
      Back
    </Button>
  </Grid>
  <Grid item>
    <Button id="saveCampaignBtn" variant="contained" color="primary">
      Save & Launch
    </Button>
  </Grid>
</Grid>
    </Box>
  </Box>

</Box>


);
};

export default MyComponent;
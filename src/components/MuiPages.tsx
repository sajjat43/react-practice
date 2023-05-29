import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Tabs, Tab, Divider } from '@mui/material';

import MuiUploader from './MuiUploader';

const LeadListForm = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [leadsPackName, setLeadsPackName] = useState('');
  const [linkedInSearchUrl, setLinkedInSearchUrl] = useState('');
  const [linkedInProfileURL, setLinkedInProfileURL] = useState('');
  const [leads, setLeads] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLeadsPackNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeadsPackName(event.target.value);
  };

  const handleLinkedInSearchUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedInSearchUrl(event.target.value);
  };
  const handleLinkedInProfileURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedInProfileURL(event.target.value);
  };

  const handleSubmit = () => {
    // submit logic here
    handleClose();
  };

  return (
    <div>
      {leads.length ? (
        <>Leads List</>
      ) : (
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={'/images/leads.png'} alt="No Campaign" style={{ width: '350px' }} />
          <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span>You currently have no leads</span>
          </Box>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create a list of leads
          </Button>
        </Box>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
        <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Create a list of leads</DialogTitle>
        <Divider sx={{ m: '0 !important' }} />
        <DialogContent>
          <TextField
            id="leadsPackName"
            name="leadsPackName"
            label="Give your list a name"
            value={leadsPackName}
            onChange={handleLeadsPackNameChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
            <span>How would you like to add leads?</span>
          </Box>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="LinkedIn Search" />
            <Tab label="Paste profile URLs" />
            <Tab label="Upload CSV file" />
          </Tabs>
          {activeTab === 0 && (
            <TextField
              id="LinkedInSearch"
              name="LinkedInSearch"
              label="Filter profiles in the LinkedIn search and paste the URL below"
              value={linkedInSearchUrl}
              onChange={handleLinkedInSearchUrlChange}
              fullWidth
              margin="normal"
            />
          )}
          {activeTab === 1 && (
            <TextField
              id="LinkedInURL"
              name="LinkedInURL"
              label="Insert the LinkedIn profile URLs into this field"
              value={linkedInProfileURL}
              onChange={handleLinkedInProfileURLChange}
              fullWidth
              margin="normal"
            />
          )}
          {activeTab === 2 && (
            <Box sx={{ marginTop: '10px' }}>
              <MuiUploader />
            </Box>
          )}
        </DialogContent>
        <Divider  />
        <DialogActions>
          <Button disabled={!leadsPackName} onClick={handleSubmit} color="primary">
            Create a list
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeadListForm;

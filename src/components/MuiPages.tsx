import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Tabs, Tab } from '@mui/material';

const LeadListForm = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [leadsPackName, setLeadsPackName] = useState('');
  const [linkedInSearchUrl, setLinkedInSearchUrl] = useState('');

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

  const handleSubmit = () => {
    // Add your submit logic here
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create a list of leads
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a list of leads</DialogTitle>
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
          {/* Add the other tab content here */}
        </DialogContent>
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

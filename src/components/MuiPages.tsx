import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Tabs,
  Tab,
  Divider,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import MuiUploader from './MuiUploader';

interface Lead {
  id: number;
  name: string;
  date: string;
  tabValue: number;
  searchUrl: string;
  profileURL: string;
}

const LeadListForm = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [leadsPackName, setLeadsPackName] = useState('');
  const [linkedInSearchUrl, setLinkedInSearchUrl] = useState('');
  const [linkedInProfileURL, setLinkedInProfileURL] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchUrlError, setSearchUrlError] = useState('');
  const [profileUrlError, setProfileUrlError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLeadsPackNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLeadsPackName(event.target.value);
  };

  const handleLinkedInSearchUrlChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setLinkedInSearchUrl(event.target.value);
    setSearchUrlError('');
  };

  const handleLinkedInProfileURLChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setLinkedInProfileURL(event.target.value);
    setProfileUrlError('');
  };

  const validateURL = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSubmit = () => {
    let isValid = true;

    if (activeTab === 0 && !validateURL(linkedInSearchUrl)) {
      setSearchUrlError('Invalid URL');
      isValid = false;
    }

    if (activeTab === 1 && !validateURL(linkedInProfileURL)) {
      setProfileUrlError('Invalid URL');
      isValid = false;
    }

    if (isValid) {
      const newList: Lead = {
        id: Date.now(),
        name: leadsPackName,
        date: formatDate(new Date()),
        tabValue: activeTab,
        searchUrl: linkedInSearchUrl,
        profileURL: linkedInProfileURL,
      };

      setLeads((prevLeads) => [...prevLeads, newList]);
      handleClose();
      setLeadsPackName('');
      setLinkedInSearchUrl('');
      setLinkedInProfileURL('');
      setSearchUrlError('');
      setProfileUrlError('');
    }
  };

  const handleRemoveList = (id: number) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
  };

  return (
    <div>
      {leads.length ? (
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <DialogTitle>List of leads</DialogTitle>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              style={{ marginBottom: '16px' }}
            >
              Create a list of leads
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>LinkedIn  URL</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>{lead.name}</TableCell>

                    {lead.tabValue === 0 && (
                      <TableCell>{lead.searchUrl}</TableCell>
                    )}
                    {lead.tabValue === 1 && (
                      <TableCell>{lead.profileURL}</TableCell>
                    )}
                    {lead.tabValue === 3 && (
                      <TableCell>{lead.profileURL}</TableCell>
                    )}
                    <TableCell>{lead.date}</TableCell>
                    <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleRemoveList(lead.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/leads.png"
            alt="No Campaign"
            style={{ width: '350px' }}
          />
          <Box
            sx={{
              m: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>You currently have no leads</span>
          </Box>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create a list of leads
          </Button>
        </Box>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Create a list of leads
        </DialogTitle>
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
              error={Boolean(searchUrlError)}
              helperText={searchUrlError}
            />
          )}
          {activeTab === 1 && (
            <TextField
              id="LinkedInURL"
              name="LinkedInURL"
              label="Insert the LinkedIn profile URLs into this field"
              minRows={3}
              multiline
              value={linkedInProfileURL}
              onChange={handleLinkedInProfileURLChange}
              fullWidth
              margin="normal"
              error={Boolean(profileUrlError)}
              helperText={profileUrlError}
            />
          )}
          {activeTab === 2 && (
            <Box sx={{ marginTop: '10px' }}>
              <MuiUploader />
            </Box>
          )}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            disabled={!leadsPackName}
            onClick={handleSubmit}
            color="primary"
          >
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

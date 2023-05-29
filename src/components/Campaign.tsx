import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // API call to fetch campaigns
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (text.trim() === "") {
      setError(true);
      return;
    }

    
    const newCampaigns = [...campaigns, text];
    setCampaigns(newCampaigns);
    setText("");
    setError(false);
    handleClose();
  };

  const handleDelete = (index: number) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
  };

  return (
    <Card sx={{ width: "100%", backgroundColor: "#F5F5F5" }}>
      <Divider sx={{ m: "0 !important" }} />
      <CardContent sx={{ pt: 5 }}>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {campaigns.length ? (
            campaigns.map((campaign, index) => (
              <Card
                key={index}
                sx={{
                  mt: 2,
                  position: "relative",
                  width: "100%", 
                  backgroundColor: "white", 
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{campaign}</span>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(index)}
                    sx={{
                      p: 0,
                      minWidth: 0,
                      width: "24px",
                      height: "24px",
                      minHeight: "unset",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "error",
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "16px" }} />
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Box sx={{ mt: 2 }}>
              {/* src={NoCampaignImage} */}
              <img
                src={'/images/campaign.png'}
                alt="No Campaign"
                style={{ width: "350px" }}
              />
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>You currently have no campaigns</span>
              </Box>
            </Box>
          )}
          <Button variant="contained" onClick={handleOpen} sx={{ m: 2 }}>
            Add Campaign
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Campaign</DialogTitle>
            <DialogContent>
              <TextField
                label="Campaign Name"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                error={error}
                helperText={error ? "Please enter a campaign name" : ""}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </CardContent>
      <Divider sx={{ m: "0 !important" }} />
    </Card>
  );
};

export default Campaign;

import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Looks3Icon from '@mui/icons-material/Looks3';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

const NewCampaign = () => {
  return (
    <Card sx={{ width: "100%", backgroundColor: "#F5F5F5" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px", 
        }}
      >
        <Button
          variant="text"
          sx={{
            color: "#000000", 
            display: "flex",
            alignItems: "center",
            textTransform: "none",
          }}
          startIcon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1976d2",
                borderRadius: "50%", 
                width: "32px",
                height: "32px",
              }}
            >
              <LooksOneIcon sx={{ color: "#FFFFFF" }} /> 
            </Box>
          }
        >
          Add leads
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#000000", 
            display: "flex",
            alignItems: "center",
            textTransform: "none", 
          }}
          startIcon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1976d2", 
                borderRadius: "50%", 
                width: "32px",
                height: "32px",
              }}
            >
              <LooksTwoIcon sx={{ color: "#FFFFFF" }} />
            </Box>
          }
        >
          Create a sequence
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#000000",
            display: "flex",
            alignItems: "center",
            textTransform: "none", 
          }}
          startIcon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1976d2", 
                borderRadius: "50%", 
                width: "32px",
                height: "32px",
              }}
            >
              <Looks3Icon sx={{ color: "#FFFFFF" }} /> 
            </Box>
          }
        >
          Summarize and launch
        </Button>
      </Box>

      <Divider sx={{ m: "0 !important" }} />

      <CardContent
        sx={{
          pt: 5,
          borderRadius: "10px", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={"/images/campaign.png"}
            alt="No Campaign"
            style={{ width: "350px", borderRadius: "10px" }} 
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "10px", 
            }}
          >
            <span>Add leads to this campaign</span>
            <Button variant="contained" sx={{ m: 2, alignSelf: "center" }}>
              Add Leads
            </Button>
          </Box>
        </Box>
      </CardContent>

      <Divider sx={{ m: "0 !important" }} />
    </Card>
  );
};

export default NewCampaign;

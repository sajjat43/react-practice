
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string[];
    setCountries(value);
  };

  return (
    <Box width='250px'>
      <TextField
        label='Select Country'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true
        }}
        helperText='Please select your country'
        error
      >
        <MenuItem value='BN'>Bangladesh</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='IN'>India</MenuItem>
      </TextField>
    </Box>
  );
};
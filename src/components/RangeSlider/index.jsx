import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider({ value, setValue}) {
  const valuetext = (value) => `$${value}`;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Slider
        getAriaLabel={() => 'Account Balance Range'}
        value={value}
        min={1000}
        max={4000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

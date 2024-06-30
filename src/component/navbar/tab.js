import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import "./tab.css";

const BasicTabs = ({ value, handleChange }) => {
  return (
    <Box className="tab">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="tabs">
        <Tab label="Find Doctor" component={Link} />
        <Tab label="Hospitals" component={Link} to="/search" value="/search" />
        <Tab label="Medicines" component={Link}  />
        <Tab label="Surgeries" component={Link}  />
        <Tab label="Software for Provider" component={Link}  />
        <Tab label="Facilities" />
      </Tabs>
    </Box>
  );
};

export default BasicTabs;





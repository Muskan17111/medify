import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, MenuItem, Button, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./searchdoctor.css";
import MenuIcon from './iconcard';


const SearchHospital = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
 
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://meddata-backend.onrender.com/states');
        setStates(response.data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
          setCities(response.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      } else {
        setCities([]);
      }
    };

    fetchCities();
  }, [selectedState]);

 

  const handleChangeState = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <Box
      className='searchcard'
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
    <div className='selector'>
      <Select
        displayEmpty
        id="state"
        value={selectedState}
        onChange={handleChangeState}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
      
      >
        <MenuItem disabled value="">
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        value={selectedCity}
        onChange={handleChangeCity}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
       
        disabled={!selectedState}
      >
        <MenuItem disabled value="">
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ mt: 2 }}
        id="search"
      >
        Search
      </Button>
    </div>
    <div>
    <MenuIcon/>
    </div>

    </Box>
  );
};

export default SearchHospital;

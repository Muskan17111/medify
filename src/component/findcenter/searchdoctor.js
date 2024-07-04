import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, MenuItem, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '../button/button.js';
import { useNavigate } from 'react-router-dom';

const SearchHospital = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

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
    if (selectedState && selectedCity) {
      navigate(`/search?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <Box
      className='searchcard'
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
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
          sx={{ minWidth: 200, width: "100%" }}
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
          sx={{ minWidth: 200, width: "100%" }}
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

        <CustomButton type="submit" text="Search" sx={{ py: "15px", px: 8, flexShrink: 0 }} startIcon={<SearchIcon />} />
      
    </Box>
  );
};

export default SearchHospital;


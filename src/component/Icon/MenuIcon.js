import React from 'react';
import doctors from '../../assests/doctors.svg';
import labs from '../../assests/labs.svg';
import hospitals from '../../assests/hospitals.svg';
import medical from '../../assests/medical.svg';
import ambulance from '../../assests/ambulance.svg';
import { Grid, Box, Typography } from '@mui/material';
import dentistry from '../../assests/specialisation/dentistry.svg';
import primarycare from '../../assests/specialisation/primarycare.svg';
import cardiology from '../../assests/specialisation/cardiology.svg';
import MRI from '../../assests/specialisation/MRI.svg';
import bloodtest from '../../assests/specialisation/bloodtest.svg';
import psychology from '../../assests/specialisation/piscology.svg';
import laboratory from '../../assests/specialisation/laboratory.svg';
import xray from '../../assests/specialisation/xray.svg';
import CustomButton from '../button/button';
import BlogIcon from './blogcard';
import "../findcenter/searchdoctor.css";

function MenuIcon({ type }) {
  const menuIcons = [doctors, labs, hospitals, medical, ambulance];
  const specializationIcons = [dentistry, primarycare, cardiology, MRI, bloodtest, psychology, laboratory, xray];
  const blogs =[BlogIcon, BlogIcon, BlogIcon]

  return (
    <div>
      {type === 'menu' && (
        <>
          <div className='iconheadline'>
            You may be looking for
          </div>
          <Grid container className="wrap" columnSpacing={{ xs: 1, md: 2 }}>
            {menuIcons.map((icon, index) => (
              <Grid item xs={6} md={2.4} key={index}>
                <Box component="img" src={icon} className="offer-image" />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {type === 'specialization' && (
        <>
          <div className='headline'>
            Find by specialization
          </div>
          <Grid container className="wrap" columnSpacing={{ xs: 1, md: 2 }}>
            {specializationIcons.map((icon, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box component="img" src={icon} className="offer-image" />
              </Grid>
            ))}
              <CustomButton text="View All" />
          </Grid>
        </>
      )}

      {type === 'blog' && (
      <Box bgcolor={'white'}>
     <Typography color='primary.main' fontWeight={600} textAlign='center'>
     Blog & News
     </Typography>
    <div className='headline'>
    Read Our Latest News
    </div>
    <Grid container className="wrap" columnSpacing={{ xs: 1, md: 2 }}>
    {blogs.map((_, index) => (
    <Grid item xs={12} md={3} key={index}>
    <BlogIcon />
    </Grid>))}
    </Grid>
    </Box>)}
    </div>
  );
}

export default MenuIcon;

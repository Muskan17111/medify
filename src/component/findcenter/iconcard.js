import React from 'react';
import doctors from '../../assests/doctors.svg';
import labs from '../../assests/labs.svg';
import hospitals from '../../assests/hospitals.svg';
import medical from '../../assests/medical.svg';
import ambulance from '../../assests/ambulance.svg';
import "./searchdoctor.css";
import {Grid}from '@mui/material';


function MenuIcon() {
  return (
    <div>
    <div className='iconheadline'>
   
        You may be looking for
</div>
    <Grid className="wrap"   container
        columnSpacing={{ xs: 1, md: 2 }}>
    <img src={doctors} alt="doctors Logo" />
    <img src={labs} alt="labs Logo" />
    <img src={hospitals} alt="hospitals logo" />
    <img src={medical} alt="medical Logo" />
    <img src={ambulance} alt="ambulance Logo" />
    </Grid>
    <Grid/>
    </div>
  );
}

export default MenuIcon;

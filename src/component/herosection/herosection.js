import React from 'react';
import heroImage from '../../assests/heroimg.png'; 
import { Box,  Typography,useMediaQuery,useTheme} from '@mui/material';
import CustomButton from '../button/button';


const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 return (
    <Box     
     className="hero" 
    display="flex" 
    flexDirection={isMobile ? 'column' : 'row'} 
    justifyContent="space-between" 
    alignItems="center" 
    p={2}>
      <Box className="imgtext" display="flex" flexDirection="column" alignItems="start" textAlign="start" mb={4}>
        <Typography className="herotext" variant="h1" component="h2">
          You don’t have to <br />Fight them Alone.
        </Typography>
        <Typography variant="body1" component="p">
        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor
        </Typography>
        <Box className="input" mt={4} >
        <CustomButton variant='contained' color='primary' text="Find Center" />
        </Box>
      </Box>
      
      <Box className="heroimage" mb={4}>
        <img src={heroImage} alt="Hero" />
      </Box>
    </Box>
  );
};

export default Hero;
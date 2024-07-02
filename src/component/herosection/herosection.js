import React from 'react';
import heroImage from '../../assests/heroimg.png'; 
import { Box,  Typography,useMediaQuery,useTheme} from '@mui/material';
import CustomButton from '../button/button';


const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 return (
    <Box     
    direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}
     className="hero" 
    display="flex" 
    flexDirection={isMobile ? 'column' : 'row'} 
    justifyContent="space-around" >
      <Box className="imgtext" display="flex" flexDirection="column" alignItems="start" textAlign="start" mb={4}>
      <Typography variant='h3' component='h1'>Skip the travel! Find Online</Typography>
       <Typography variant='h1' component='h1' mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
          <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
        <Box className="input" mt={4} >
        <CustomButton variant='contained' color='primary' text="Find Center" />
        </Box>
      </Box>
      
        <Box
                        component={'img'}
                        src={heroImage}
                        width={{ xs: 1, md: "50%" }}
                    />
      
    </Box>
  );
};

export default Hero;
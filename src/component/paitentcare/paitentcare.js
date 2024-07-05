import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../assests/paitentcare.svg';
import patient  from '../../assests/patientcare.png';
import patient1 from '../../assests/patientcare1.png';
import tick from '../../assests/tick.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const features = [
    'Stay Updated About Your Health',
    'Check Your Results Online',
    'Manage Your Appointments'
];

export default function PatientCaring() {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6} alignItems={'center'} alignContent={'center'} marginBottom={10}>
     <Box position="relative">
      <Box
        component='img'
        src={patient}
        alt='Patient Overlay'
        width={isSmallScreen ? '41%' : '36%'}
        height={isSmallScreen ? 111 : 169}
        marginLeft={isSmallScreen ? 17.5 : 30.3}
        sx={{ position: 'relative', zIndex: 1 }}
      />

      <Box 
        component='img'
        src={banner}
        alt='Patient Caring Banner'
        width='100%'
        maxHeight={isSmallScreen ? 200 : 300}
        alignItems={'center'}
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}
      />

      <Box
        component='img'
        src={patient1}
        alt='Patient Overlay'
        width={isSmallScreen ? '40.4%' : '35.9%'}
        height={isSmallScreen ? 109 : 163}
        marginRight={isSmallScreen ? 14.5: 40.5}
        marginLeft={isSmallScreen ? 12.3 : 22.35}
        marginTop={isSmallScreen ? 11.1 : 16.65}
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}
      />
    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} color="primary.main" gutterBottom>
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={2}>
                            Patient <Box component='span' color='primary.main'>Caring</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8} mb={4}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>
                        {features.map((feature, index) => (
                            <Box display="flex" alignItems="center" mb={2} key={index}>
                                <Box component='img' src={tick} alt='Tick' height={22} width={22} mr={2} />
                                <Typography fontSize={{ xs: 14, md: 18 }} fontWeight={500} color="#1B3C74">
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

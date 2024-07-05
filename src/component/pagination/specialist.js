import { Box, Typography } from "@mui/material";

export default function SpecialistCard({ img, title, designation }) {
    return (
        <Box textAlign='center'>
   <Box
      component='div'
      sx={{
        boxShadow: '0 15px 55px -10px rgba(0,0,0,0.10)',
        borderRadius: '250px 240px 4px 4px',
        border:'10px solid white',
        width: 1,
        height:"364px",
        alignItems:"baseline",
        background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)'
      }}
    >
      <Box
    
        component='img'
        src={img}
        alt='Gradient Image'
        sx={{
          width: 1,
          mt:4,
          height: 335,
          alignContent:"center",
          alignItems:"baseline",
        
        }}
      />
        </Box>
            <Typography
                fontSize={{ xs: 16, md: 20 , mt:10}}
                color='#1B3C74'
            >
                {title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color='primary.main'
            >
                {designation}
            </Typography>
        </Box>
    )
}
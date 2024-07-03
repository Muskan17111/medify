import { Container, Box, Stack } from "@mui/material";
import SearchHospital from "../component/findcenter/searchdoctor";
import  BlogNews from "../component/blog/blog";
import Offers from "../component/pagination/offer";
import NavBar from "../component/navbar/navbar";
import Hero from "../component/herosection/herosection";


export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <Hero/>
        
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
          
          </Stack>
        </Container>
      </Box>

      <Offers type="offer" />

  

      < BlogNews />
      
      <Offers type="doctor" />

 
    </Box>
  );
}
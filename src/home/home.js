import { Container, Box, Stack } from "@mui/material";
import SearchHospital from "../component/findcenter/searchdoctor";
import Swip from "../component/pagination/swip";
import NavBar from "../component/navbar/navbar";
import Hero from "../component/herosection/herosection";
import MenuIcon from "../component/Icon/MenuIcon";



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
            bgcolor="white"
            borderRadius="15px"
            
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
             <MenuIcon type="menu"/>
          </Stack>
        </Container>
      </Box>
      <Swip type="offer" />

      <MenuIcon type="specialization"/>

      <Swip type="doctor" />

      <MenuIcon type="blog"/>
    </Box>
  );
}
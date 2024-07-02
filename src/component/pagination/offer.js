import React from 'react';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import offer1 from '../../assests/offer.svg';
import offer2 from '../../assests/offer2.svg';
import "./offer.css";



const Offers  = () => {
 
    return (
    
    
      <Box py={6}>
        <Container maxWidth='xl'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              767: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <Box component={'img'} src={offer1} alt="Offer 1" className="offer-image" />
            </SwiperSlide>
            <SwiperSlide>
              <Box component={'img'} src={offer2} alt="Offer 2" className="offer-image" />
            </SwiperSlide>
            <SwiperSlide>
              <Box component={'img'} src={offer1} alt="Offer 3" className="offer-image" />
            </SwiperSlide>
            <SwiperSlide>
              <Box component={'img'} src={offer2} alt="Offer 4" className="offer-image" />
            </SwiperSlide>
            <SwiperSlide>
              <Box component={'img'} src={offer1} alt="Offer 5" className="offer-image" />
            </SwiperSlide>
            <SwiperSlide>
              <Box component={'img'} src={offer2} alt="Offer 6" className="offer-image" />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Box>
  );
};

export default Offers ;













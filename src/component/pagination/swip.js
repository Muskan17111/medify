import React from 'react';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay,} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import offer1 from '../../assests/offer.png';
import offer2 from '../../assests/offer2.png';
import './swip.css';
import doctor1 from '../../assests/Our-Medical-Specialist/neurologist.svg';
import doctor2 from '../../assests/Our-Medical-Specialist/orthopadic.svg';
import doctor3 from '../../assests/Our-Medical-Specialist/medicine.svg';
import doctor4 from '../../assests/Our-Medical-Specialist/neurologist.svg';
import doctor5 from '../../assests/Our-Medical-Specialist/medicine.svg';

const Swip = ({ type }) => {
  const offers = [offer1, offer2, offer1, offer2];
  const doctors = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor1, doctor2, doctor3, doctor4, doctor5];

  if (type === 'offer') {
    return (
      <div className="offer">
        <Box py={6}>
          <Container maxWidth='xl'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              pagination={{ clickable: true }}
              modules={[ Pagination]}
              breakpoints={{767: { slidesPerView: 3 }}}>
              {offers.map((offer, index) => (
                <SwiperSlide key={index}>
                  <Box component={'img'} src={offer} alt={`Offer ${index + 1}`} className="offer-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>
      </div>
    );
  } else if (type === 'doctor') {
    return (
      <div className="doctor">
             <div className='headline'>
            Our Medical Specialist
          </div>
        <Box >          
          <Container maxWidth='xl'>
       <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{delay: 3000, disableOnInteraction: false,}}
        modules={[Autoplay, Pagination]}
        pagination={{clickable: true}}
        breakpoints={{767: {slidesPerView: 4}}}
            >
              {doctors.map((doctor, index) => (
                <SwiperSlide key={index}>
                  <Box component={'img'} src={doctor} alt={`Doctor ${index + 1}`} className="offer-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>
      </div>
    );
  }
};

export default Swip;














import React from 'react';
import { Box, Container  } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import offer1 from '../../assests/offer.png';
import offer2 from '../../assests/offer2.png';
import img1 from '../../assests/Our-Medical-Specialist/image1.png';
import img2 from '../../assests/Our-Medical-Specialist/image2.png';
import img3 from '../../assests/Our-Medical-Specialist/image3.png';
import img4 from '../../assests/Our-Medical-Specialist/image4.png';
import img5 from '../../assests/Our-Medical-Specialist/image5.png';
import SpecialistCard from './specialist.js';
import './swip.css';

const Swip = ({ type }) => {
  const offers = [offer1, offer2, offer1, offer2];
  const doctors = [
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
  ];

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
              modules={[Pagination]}
              breakpoints={{ 767: { slidesPerView: 3 } }}
            >
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
        <div className='headline' mb={"120"}>
          Our Medical Specialist
        </div>
        <Box>
          <Container maxWidth='xl'>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{ 767: { slidesPerView: 4 } }}
            >
              {doctors.map((doctor, index) => (
                <SwiperSlide key={index}>
                  <SpecialistCard
                    img={doctor.img}
                    title={doctor.title}
                    designation={doctor.designation}
                  />
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














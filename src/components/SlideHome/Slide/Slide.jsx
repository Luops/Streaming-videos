import React, {useState} from 'react'

//hooks
import { useFetchDocuments } from '../../../hooks/useFetchDocuments';

//Componentes
import VideoDestaque from '../VideoDestaque/VideoDestaque';
import Texto from '../ComponentTexto/Texto';

//Styled components
import {
} from "./styles"

//Bootstrap
import {  
} from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";



const Slide = () => {
  const { documentsDestaque: destaque, loading } = useFetchDocuments("destaque")

  return (
    <div className='d-flex flex-column w-100 text-align-center align-items-center justify-content-center h-100'>
        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1400}
        autoplay={true}
        pagination
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="w-100 d-flex align-items-center justify-content-center text-align-center mySwiper text-white">
            {destaque && destaque.map((destaque) => (
              <SwiperSlide className='w-100 d-flex align-items-center justify-content-center text-align-center'>
                <VideoDestaque key={destaque.id} destaque={destaque}/>
              </SwiperSlide>
            ))}
            
            <SwiperSlide className='w-100 d-flex align-items-center justify-content-center text-align-center'>
                <Texto />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slide
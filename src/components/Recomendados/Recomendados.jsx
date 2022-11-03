import React, { Component, useState, useEffect, useRef } from 'react'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//Components
import DetalhesConteudo from '../DetalhesConteudo/DetalhesConteudo';

//Styled components
import { 
    Container
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



const Recomendados = ({conteudo, destaque}) => {
    const { documentsInspecao: inspecao } = useFetchDocuments("conteudo")
    const { documentsRegulagem: regulagem } = useFetchDocuments("conteudo")
    const { documentsAjuste: ajuste } = useFetchDocuments("conteudo")
    const { documentsSetup: setup } = useFetchDocuments("conteudo")

  return (
    <Container>
        {(conteudo.tipoVideo || destaque.tipoVideo) === "inspecao" && (
            <div className='w-100 align-items-center justify-content-center d-flex flex-column mb-5'>
                <h3 className='text-white fw-bold w-100'>Recomendados</h3>
                <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                pagination
                navigation
                modules={[Pagination, Navigation]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    1000: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                  }}
                className="w-100 d-flex align-items-center justify-content-center text-align-center mySwiper text-white">
                    {inspecao && inspecao.map((inspecao) => (
                    <SwiperSlide className='d-flex align-items-center justify-content-center'>
                       <DetalhesConteudo key={inspecao.id} conteudo={inspecao}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        )}
        {(conteudo.tipoVideo || destaque.tipoVideo) === "regulagem" && (
            <div className='w-100 d-flex flex-column mb-5'>
            <h3 className='text-white fw-bold w-100'>Recomendados</h3>
            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            pagination
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
              }}
            className="w-100 d-flex align-items-center justify-content-center text-align-center mySwiper text-white">
                {regulagem && regulagem.map((regulagem) => (
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                   <DetalhesConteudo key={regulagem.id} conteudo={regulagem}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        )}
        {(conteudo.tipoVideo || destaque.tipoVideo) === "ajuste" && (
            <div className='w-100 d-flex flex-column mb-5'>
            <h3 className='text-white fw-bold w-100'>Recomendados</h3>
            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            pagination
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
              }}
            className="w-100 d-flex align-items-center justify-content-center text-align-center mySwiper text-white">
                {ajuste && ajuste.map((ajuste) => (
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                   <DetalhesConteudo key={ajuste.id} conteudo={ajuste}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        )}
        {(conteudo.tipoVideo || destaque.tipoVideo) === "setup" && (
            <div className='w-100 d-flex flex-column mb-5'>
            <h3 className='text-white fw-bold w-100'>Recomendados</h3>
            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            pagination
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
              }}
            className="w-100 d-flex align-items-center justify-content-center text-align-center mySwiper text-white">
                {setup && setup.map((setup) => (
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                   <DetalhesConteudo key={setup.id} conteudo={setup}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        )}
    </Container>
  )
}

export default Recomendados
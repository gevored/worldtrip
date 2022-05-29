import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { ItemSlide } from "./ItemSlide";
import { Box, Img , Text } from "@chakra-ui/react";

export  function Carrossel() {
  return (
    <>
    <Box
    
    as= 'div'
    margin='4rem 0'
    >
        
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><ItemSlide path = "/africa" color = '#FFBA08' pathName="africa.jpg" subtitleIMG="Africa" /></SwiperSlide>
       <SwiperSlide><ItemSlide path = "/asia" color = '#FFBA08' pathName="asia.jpg" subtitleIMG="Asia" /></SwiperSlide>
       <SwiperSlide><ItemSlide path = "/europa" color = '#FFBA08' pathName="europa.png" subtitleIMG="Europa" /></SwiperSlide>
       <SwiperSlide><ItemSlide path = "/north_america" color = '#FFBA08' pathName="north_america.jpg" subtitleIMG="América do Norte" /></SwiperSlide>
       <SwiperSlide><ItemSlide path = "/south_america" color = '#FFBA08' pathName="south_america.jpg" subtitleIMG="América do Sul" /></SwiperSlide>
       <SwiperSlide><ItemSlide path = "/oceania" color = '#FFBA08' pathName="oceania.jpg" subtitleIMG="Oceania" /></SwiperSlide>     
      </Swiper>
    </Box>
    </>
  );
}

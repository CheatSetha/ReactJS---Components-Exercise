import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerSlice = () => {
  
  return (
    <>
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
        <SwiperSlide>
            <img
                className="object-top w-full h-[70vh]"
                src="https://images.pexels.com/photos/65451/pexels-photo-65451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-[70vh]"
                src="https://medias.spotern.com/spots/w640/112/112255-1532336916.jpg"
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-[70vh]"
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/dr-stone.jpg"
                alt="image slide 3"
            />
        </SwiperSlide>
    </Swiper>
</>
  )
}

export default BannerSlice
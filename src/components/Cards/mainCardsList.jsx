import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
/* eslint-disable react/prop-types */
export const MainCardsList = (props) => {
    const { list } = props;
    const swipeList = list.map((slide) => (
        <SwiperSlide key={slide}>
            <img src="./src/assets/cat.webp" />
        </SwiperSlide>
    ));

    return (
        <Swiper
            pagination={{ type: "fraction" }}
            speed={1600}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {swipeList}
        </Swiper>
    );
};

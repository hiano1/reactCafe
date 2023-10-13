import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

const adList = [1, 2, 3, 4, 5];
const swipeList = adList.map((slide) => (
    <SwiperSlide key={slide}>
        <img src="./src/assets/cat.webp" />
    </SwiperSlide>
));

export const Home = () => {
    return (
        <>
            <div className="mainPage">
                <div className="mainCardsList">
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
                </div>
                <div className="mainMembership">
                    <div className="profile">
                        <a>😊</a>
                        <p>name</p>
                        <a>notification</a>
                    </div>
                    <div className="point">point : 0</div>
                    <div className="stamp">stamp 1/10 </div>
                    <div className="coupon"> coupon : 1</div>
                </div>
                <div className="mainOrderBox">mainOrderBox</div>
            </div>
        </>
    );
};

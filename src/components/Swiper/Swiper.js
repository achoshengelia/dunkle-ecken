import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./Swiper.css";
SwiperCore.use([Navigation]);

export const SwiperCarousel = ({
  gallery,
  handleSelectImgNext,
  handleSelectImgPrev,
  selectedImg,
}) => {
  return (
    <Swiper
      navigation={true}
      className="swiper"
      onSlideNextTransitionEnd={() => handleSelectImgNext()}
      onSlidePrevTransitionEnd={() => handleSelectImgPrev()}
    >
      {gallery.map((img, i) => (
        <SwiperSlide className="swiper-slide img pointer" key={i}>
          <img src={selectedImg ? gallery[selectedImg] : img} alt="" />
        </SwiperSlide>
      ))}
      {/* <div className='fakeNext' ></div> */}
    </Swiper>
  );
};

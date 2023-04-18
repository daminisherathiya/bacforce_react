// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSection from "./ImageSection";
import NumberBackgroundBox from "./NumberBackgroundBox";
// import "./styles.css";

const Carousel = ({ data, theme, paginationColor }) => {
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        centeredSlides={true}
        initialSlide={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={`pag !pt-3 text-left ${
          paginationColor === "blue" ? "paginationColorBlue" : ""
        }`}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            initialSlide: 0,
          },
          768: {
            slidesPerView: 2,
            initialSlide: 0,
          },
          1024: {
            slidesPerView: 3.5,
            initialSlide: 1,
          },
          1280: {
            slidesPerView: 4,
            initialSlide: 1,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {theme != "numberBackgroundBox" ? (
              <div className="flex h-full flex-col justify-between space-y-14 p-10 shadow-blue">
                <div className="space-y-6">
                  <h4 className="font-bold text-light-blue">{item.title}</h4>
                  <p className="italic">{item.description}</p>
                </div>
                <div className="flex items-center">
                  <ImageSection
                    divClasses="pr-8 shrink-0"
                    imageAlt={item.name}
                    imageSrc={item.imageSrc}
                    imageClasses="w-[max(50px,4.583vw)] h-[max(50px,4.583vw)]"
                  />
                  <div className="space-y-2">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-light-gray">{item.role}</p>
                  </div>
                </div>
              </div>
            ) : (
              <NumberBackgroundBox key={index} data={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination } from 'swiper';
import data from './data';

import styles from './testimonials.module.css';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What My Clients Say</h2>
      <p>There are unbiased testimonials from some of my clients</p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Testimonial slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;

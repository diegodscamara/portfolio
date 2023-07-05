import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'

interface CarouselProps {
  data: React.ReactNode[]
}

const Carousel: React.FC<CarouselProps> = React.memo(
  ({ data }: CarouselProps): JSX.Element => (
    <Swiper
      spaceBetween={16}
      navigation
      loop
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination]}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  ),
)

Carousel.displayName = 'Carousel'

export default Carousel

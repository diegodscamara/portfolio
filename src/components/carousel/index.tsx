import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'

import React from 'react'

interface CarouselProps {
	data: React.ReactNode[]
}

/**
 * Renders a carousel component with the given data.
 */
export function Carousel({ data }: CarouselProps): JSX.Element {
	return (
		<SwiperComponent
			spaceBetween={16}
			navigation={true}
			modules={[Navigation, Pagination]}
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
			}}>
			{data.map((item, index) => (
				<SwiperSlide key={index}>{item}</SwiperSlide>
			))}
		</SwiperComponent>
	)
}

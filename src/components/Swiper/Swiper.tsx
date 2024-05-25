import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './module.css';

import { Swiper as RSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { PropsWithChildren } from 'react';

interface SwiperProps extends PropsWithChildren {}

export function Swiper({ children }: SwiperProps) {
  return (
    <RSwiper
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
    >
      {children}
    </RSwiper>
  );
}

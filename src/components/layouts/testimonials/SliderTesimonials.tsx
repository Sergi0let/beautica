"use client";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { ArrowIcon, BtnOrLink } from "@/components";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "@/data/testimonials.json";

export const SliderTesimonials = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 1024 });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isTabletOrLarger ? 20 : 15}
      slidesPerView={1.25}
      navigation={{ nextEl: ".testim-next", prevEl: ".testim-prev" }}
      scrollbar={{ draggable: true, dragClass: "testim-progress", horizontalClass: "testim-progress-horizontal" }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      breakpoints={{
        540: {
          slidesPerView: 2.25,
        },
        1024: {
          slidesPerView: 3.25,
        },
      }}
      style={{ overflow: "visible" }}
      wrapperClass="testim-wrapper"
    >
      {data.testimonials.map(({ avatar, name, comment }: { avatar: string; name: string; comment: string }, index) => (
        <SwiperSlide key={index} className="testim-slide">
          <figure>
            <Image src={avatar} alt="testim-img" width={200} height={200} />
            <figcaption className="mt-[var(--8-82)] text-btn font-semibold text-accent">{name}</figcaption>
          </figure>
          <p className="txt-18-24 mt-2">{comment}</p>
        </SwiperSlide>
      ))}
      <SwiperSlide className="testim-slide">
        <div className="flex h-full flex-col justify-between">
          <h3 className="text-txt-32-42 font-regular leading-tight">Запишіться і підкресліть свою красу!</h3>
          <BtnOrLink title="Записатись на прийом" />
        </div>
      </SwiperSlide>

      <button className="testim-prev">
        <ArrowIcon />
      </button>
      <button className="testim-next">
        <ArrowIcon />
      </button>
    </Swiper>
  );
};

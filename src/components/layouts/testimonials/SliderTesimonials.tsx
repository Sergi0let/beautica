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

import { testimonialsData } from "@/constants";
import { formatDate } from "@/lib/utils";
import { TestimonialType } from "@/types/common-types";

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
      {testimonialsData.map(({ id, avatar, name, comment, date }: TestimonialType) => (
        <SwiperSlide key={id} className="testim-slide">
          <figure>
            <Image src={avatar} alt="testim-img" width={200} height={200} />
            <figcaption className="text-[18px] font-semibold text-accent md:mt-11 md:text-2xl">{name}</figcaption>
          </figure>
          <p className="mt-2 text-balance text-sm md:text-xl">{comment}</p>

          <div className="mt-4 flex grow items-end">
            <time className="text-sm text-white/90 md:text-xl" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="testim-slide">
        <div className="flex h-full flex-col justify-between">
          <h3 className="font-regular text-txt-32-42 leading-tight">Запишіться і підкресліть свою красу!</h3>
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

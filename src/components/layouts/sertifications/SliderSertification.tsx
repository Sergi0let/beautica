"use client";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { ArrowIcon } from "@/components";
import { sertificateData } from "@/constants";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderSertification = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 1024 });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isTabletOrLarger ? 35 : 20}
      slidesPerView={2.5}
      navigation={{ nextEl: ".testim-next", prevEl: ".testim-prev" }}
      scrollbar={{ draggable: true, dragClass: "testim-progress", horizontalClass: "sertificate-progress-horizontal" }}
      breakpoints={{
        540: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="sertificate-slider"
      wrapperClass="sertificate-wrapper"
    >
      {sertificateData.diploms.map(({ id, title, imgUrl }: { id: number; title: string; imgUrl: string }) => (
        <SwiperSlide key={id} className="sertificate-slide">
          <div className="cursor-pointer transition-transform duration-300 ease-in-out hover:z-50 hover:scale-110">
            <div className="z-50 w-full">
              <Image src={imgUrl} alt={title} width={220} height={300} className="size-full object-cover" />
            </div>
            <h3 className="mt-3 font-robotoCondensed text-sm md:text-xl">{title}</h3>
          </div>
        </SwiperSlide>
      ))}
      <button className="testim-prev">
        <ArrowIcon />
      </button>
      <button className="testim-next">
        <ArrowIcon />
      </button>
    </Swiper>
  );
};

import React, { useState } from "react";
import { RootState } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

import st from "./app.module.scss";
import PageTemplate from "@components/reusable/template/PageTemplate";
import { useRouter } from "next/router";
import Animation from "@components/reusable/template/Animation";
// Import Swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function index() {
  const router = useRouter();
  const { navi_scrn } = useSelector((state: RootState) => state.ux);

  const imgData = [
    {
      imgUrl: "/img/hd stock1.jpeg",
      alt: "home img",
    },
    {
      imgUrl: "/img/hd stock2.webp",
      alt: "home img",
    },
    {
      imgUrl: "/img/stock 3.jpeg",
      alt: "home img",
    },
  ];

  const list = [
    {
      name: "Education Planning",
      onClick: () => {
        router.push({
          pathname: "/app/ePlanningFilter",
          query: {
            //   cat_id: id,
          },
        });
      },
      imgUrl: "/icon/FinancialPlanning3.svg",
    },

    {
      name: "Child Savings",
      onClick: () => {
        router.push({
          pathname: "/app/cSavingsFilter",
          query: {
            //   cat_id: id,
          },
        });
      },
      imgUrl: "/icon/FinancialPlanning6.svg",
    },

    {
      name: "Life Insurance",
      onClick: () => {
        router.push({
          pathname: "/app/lifeInsurFilter",
          query: {
            //   cat_id: id,
          },
        });
      },
      imgUrl: "/icon/FinancialPlanning5.svg",
    },
  ];

  return (
    <>
      <PageTemplate>
        <div className={st.app}>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className={`${st.swiperContainer} ${st.customPaginationBullet} ${st.customPaginationBulletActive} ${st.customPaginationContainer}`}
          >
            {imgData.map((data, index) => (
              <SwiperSlide key={index}>
                <img
                  src={data.imgUrl}
                  alt={`${data.alt} ${index}`}
                  key={index}
                  className={st.swiperImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Animation delay={-4}>
            <div className={st.homeContainer}>
              <h4 className={st.sectionTitle}>Features</h4>
              {/* <h4 className={st.sectionBrief}>
                {brief}
            </h4> */}
              <div className={`${st.choiceList} ${st.hvr1}`}>
                {list.map((item, i) => {
                  return (
                    <button
                      className={st.selBox}
                      onClick={() => item.onClick()}
                    >
                      <img src={item.imgUrl} className={st.selImg} />
                      <h4 className={st.selTxt}>{item.name}</h4>
                    </button>
                  );
                })}
              </div>
            </div>
          </Animation>
        </div>
      </PageTemplate>
    </>
  );
}

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
      name: "Introduction to Finance I",
      onClick: () => {
        if (localStorage.getItem("token") == "teacher")
          router.push({
            pathname: "/app/teacherDashboard",
            query: {
              //   cat_id: id,
            },
          });
        else
          router.push({
            pathname: "/app/bull",
            query: {
              //   cat_id: id,
            },
          });
      },
      imgUrl: "/icon/FinancialPlanning3.svg",
    },

    {
      name: "Introduction to Finance II",
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
      name: "Introduction to Finance III",
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
        <h1 className="mt-4 ml-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6x">
          Welcome,{" "}
          {localStorage.getItem("token") == "student" ? `student` : `teacher`}
        </h1>
        <div className={st.app}>
          <Animation delay={-4}>
            <div className={st.homeContainer}>
              <h4 className={st.sectionTitle}>My courses</h4>
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
                      {/* <img src={item.imgUrl} className={st.selImg} /> */}
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

import React from "react";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import st from "./about.module.scss";
import useTranslation from "next-translate/useTranslation";
import Animation from "../../components/reusable/template/Animation";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";
// import Header from "../components/header";
// import Footer from "../components/reusable/template/Footer.tsx";

export default function About() {
  

  const wwo = [
    {
      title1: "1.Our Mission ",
      title2: "Helping Families Build a Brighter Future",
      desc: "Whether you're looking to save for your child's education, protect your loved ones with life insurance, or navigate the complex process of college admissions, we're here to help every step of the way.",
      img: "/about/worker.png",
    },
    {
      title1: "2.Our ",
      title2: "Story",
      desc: "We are committed to providing personalized, compassionate, and ethical services that meet the unique needs of each and every client. We are dedicated to building long-term relationships based on trust, transparency, and mutual respect.",
      img: "/about/about2.svg",
    },
    {
      title1: "3.Our ",
      title2: "team",
      desc: "Our team of professionals brings a wealth of experience and expertise to the table, with a deep understanding of the financial and educational challenges facing families today. We are passionate about helping our clients achieve their goals, and we work tirelessly to stay up-to-date on the latest industry trends, tools, and strategies.",
      img: "/about/hand.png",
    },
  
    {
      title1: "4.Mobile ",
      title2: "app",
      desc: "iProtect has a mobile app that allows users to access all the platform's features on the go.",
      img: "/about/booking.png",
    },
  ];

  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
      

      <div className={st.banner}>
        <div className={st.circle} />
        <div className={st.largeHeader} highlightword="Let's">
          {" "}
          design your future
        </div>
        <div className={st.smallHeader}>
        iProtect is an online platform that offers a wide range of services. From child savings and life insurance to college admissions and financial aid consulting, we provide comprehensive, customizable solutions that are tailored to meet the unique needs and goals of each client.
        </div>
        <div className={st.contactUs}>
          <p>About Us</p>
          <VscChevronDown size={"100px"} />
        </div>
      </div>
      <div className={st.whatWeOffer}>
        <div className={st.header}>What We Offer</div>
        <div className={st.wwo}>
          {wwo.map((offer, index) =>
            index % 2 == 0 ? (
              <Animation>
                <div
                  key={index}
                  className={st.wwo_item}
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className={st.right}>
                    <img width="150px" src={offer.img} />
                  </div>
                  <div className={st.left}>
                    <div className={st.title}>
                      <div className={st.title1} highlightword={offer.title1}>
                        {` ${offer.title2}`}
                      </div>
                    </div>
                    <div className={st.desc} style={{ color: "#000000" }}>
                      {offer.desc}
                    </div>
                  </div>
                </div>
               </Animation>
            ) : (
              <Animation fadeFromRight>
                <div
                  key={index}
                  className={st.wwo_item}
                  style={{
                    backgroundColor: "#c24181",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className={st.right}>
                    <img width="150px" src={offer.img} />
                  </div>
                  <div className={st.left}>
                    <div className={st.title}>
                      <div className={st.title2}>
                        {`${offer.title1} ${offer.title2}`}
                      </div>
                    </div>
                    <div className={st.desc} style={{ color: "#ffffff" }}>
                      {offer.desc}
                    </div>
                  </div>
                </div>
             </Animation>
            )
          )}
        </div>
      </div>
    
    </PageTemplate>
  );
}

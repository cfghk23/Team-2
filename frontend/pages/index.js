import Head from "next/head";
import React from "react";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import styles from "../styles/index.module.scss";
import ThreeItemContainer from "../components/index/ThreeItemContainer";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";
import Card from "../components/index/Card";
import {
  featureData,
  comparisonData,
  planningData,
  featureTwoData,
  awardsData,
  testimonialData,
} from "../components/index/HomeData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
        <div className={styles.mainContainer}>
          <div className={styles.headerContainer}>
            <img
              src="/home_pg/life.jpg"
              className={styles.headerImage}
            />
            <div className={styles.headerTextContainer}>
              <h1 className={styles.darkColorText}>
                Let's create your child's bright future
              </h1>
              <p>Get solutions at the tip of your fingertips</p>
              <VscChevronDown size={"100px"} />
            </div>
          </div>

          <div className={styles.featureContainer}>
            <h1>iProtect Features</h1>
            <p>
            From child savings and life insurance to college admissions and financial aid consulting, we provide comprehensive, customizable solutions that are tailored to meet the unique needs and goals of each client.
            </p>
            <Card
              padding="3vh"
              alignImage="flex-start"
              height="55vh"
              dataToShow={featureData}
              titleFontSize={"30px"}
              descFontSize={"15px"}
            />
          </div>

          {/* can change the name to something better later? */}
          <ThreeItemContainer
            dataToShow={comparisonData}
            link="/product-comparison"
          />

          {/* <ThreeItemContainer
            dataToShow={planningData}
            reverseOrder
            link="/financial-planning"
          /> */}

          <Card
            dataToShow={featureTwoData}
            titleFontSize={"50px"}
            descFontSize={"30px"}
          />

          <div className={styles.testimonialsContainer}>
            <h1>Testimonials</h1>
            <h1 className={styles.marginBotSm}>What our clients say</h1>
            <Card
              dataToShow={testimonialData}
              backgroundColor={"#F2F2F2"}
              size={"35%"}
              gap={"3vw"}
              padding={"3vh"}
              descColor={"rgb(90, 90, 90)"}
            />
          </div>

          <div className={`${styles.contactContainer} ${styles.flex}`}>
            <div>
              <h1 className={styles.marginBotSm}>Want to talk with us?</h1>
              <p>
                We'd love to hear from you. Let us help you to get the best
                insurance possible using our data-driven technology
              </p>
            </div>
            <div>
              {/* //* this below div can be changed to button later on! */}
              <div>
                <Link href="/contact">
                  <h1>Get In Touch</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

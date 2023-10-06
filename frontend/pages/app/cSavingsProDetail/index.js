import React, { useEffect, useState } from "react";
import PageTemplate from "../../../components/reusable/template/PageTemplate";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "config";
import { RootState } from "../../../redux/reducers";
import styles from "./ProDetailsStyle.module.scss";

export default function index() {
  const [loader, setLoader] = useState(false);

  let router = useRouter();
  let query = router.query;

  let company_name = query.name;
  let insurance_id = query.product_id;
  let img = query.logo;
  let investment_period = query.investment_period;
  let monthly_investment = query.monthly_investment;
  let withdraw_after = query.withdraw_after;
  let lumpsum_payout = query.lumpsum;

  const jwt = useSelector((state) => state.storage.jwt);

  const { apiUrl } = config;
  let [reviewState, setReview] = useState([]);
  let [feedback, setFeedback] = useState("");
  let reviews = [];

  //http://127.0.0.1:5036/api/childInsurance/review?product_id=1

  useEffect(() => {
    setLoader(true);
    if (router.isReady) {
      const fetchData = async () => {
        const response = await axios(
          `${apiUrl}/api/childInsurance/review?product_id=${insurance_id}`
        );
        const data = response.data;

        for (let i = 0; i < data.length; i++) {
          reviews.push(
            <div className={styles.review} key={data[i].id}>
            <div className={styles.reviewDetails} >
              <div className={styles.rowReview}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>{data[i].username}</span>
              </div>
              <div className={styles.rowReview}>
                <span className={styles.label}>Comment: </span>
                <span className={styles.value}>
                  {data[i].description}
                </span>
              </div>
            </div>
            {/* <div className={styles.reviewText}>{review.text}</div> */}
          </div>
          );
        }
        setLoader(false);
      };

      fetchData();
      setReview(reviews);
    }
  }, [router.isReady]);

  const submitReview = async () => {
    // const {t} = useTranslation('login');
    // setLoading(true);

    try {
      //http://127.0.0.1:5036/api/childInsurance/review
      const response = await fetch(`${apiUrl}/api/childInsurance/review`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        //   {
        //     "product_id" : 3,
        //     "description": "Would recommend it."
        // }
        body: JSON.stringify({
          product_id: insurance_id,
          description: feedback,
        }),
      });
      const responseJson = await response.json();

      alert("Thanks for the review!");
      setFeedback("");
    } catch (error) {
      alert(error);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
      <PageTemplate>
        <div className={styles.container}>
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <img src={img} alt="product image" />
            </div>
            <div className={styles.details}>
              <h1 className={styles.productName}>{company_name}</h1>
              <div className={styles.row}>
                <span className={styles.label}>Monthly Investment:</span>
                <span className={styles.value}>{monthly_investment}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Investment Period:</span>
                <span className={styles.value}>{investment_period}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Withdraw After:</span>
                <span className={styles.value}>{withdraw_after}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Lumpsum Payout:</span>
                <span className={styles.value}>{lumpsum_payout}</span>
              </div>
            </div>
          </div>
          <div className={styles.reviews}>
            <h2 className={styles.reviewTitle}>Reviews</h2>
            <div className={styles.reviewList}>
              {loader ? (
                <Spinner />
              ) : (
                reviewState
              )}
            </div>
            <div className={styles.reviewForm}>
              <h3 className={styles.formTitle}>Post a Review</h3>

              <textarea
                className={styles.formInput}
                placeholder="Your review"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <button onClick={submitReview} className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

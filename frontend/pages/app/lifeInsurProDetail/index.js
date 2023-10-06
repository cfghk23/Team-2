import React, { useEffect, useState } from "react";
import PageTemplate from "../../../components/reusable/template/PageTemplate";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "config";
import { RootState } from "../../../redux/reducers";
import styles from "./styles.module.css";

export default function index() {
  const [loader, setLoader] = useState(false);

  let router = useRouter();
  let query = router.query;

  let company_name = query.company_name;
  let product_name = query.product_name;

  let insurance_id = query.life_insurance_id;

  let smoking = query.policy_smoke == "N" ? "Non-Smoking" : "Smoking";
  let gender = query.policy_gender == "F" ? "Female" : "Male";
  let payment = query.payment;
  let cover_amount = query.life_cover_amount;
  let company_id = query.company_id;
  let product_id = query.product_id;
  let term = query.life_term;
  let brochure = query.prouct_brochure;
  let img = query.company_logo;
  let yearly_premium = query.yearly_premium;

  const jwt = useSelector((state) => state.storage.jwt);

  const { apiUrl } = config;
  let [reviewState, setReview] = useState([]);
  let [feedback, setFeedback] = useState("");
  let reviews = [];

  //http://127.0.0.1:5036/api/lifeInsurance/review?product_id=1

  useEffect(() => {
    setLoader(true);
    if (router.isReady) {
      const fetchData = async () => {
        const response = await axios(
          `${apiUrl}/api/lifeInsurance/review?product_id=${product_id}`
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
      //http://127.0.0.1:5036/api/lifeInsurance/review
      const response = await fetch(`${apiUrl}/api/lifeInsurance/review`, {
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
          product_id: product_id,
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
              <h1 className={styles.productName}>{product_name}</h1>
              <div className={styles.row}>
                <span className={styles.label}>Company:</span>
                <span className={styles.value}>{company_name}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Smoking:</span>
                <span className={styles.value}>{smoking}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Gender:</span>
                <span className={styles.value}>{gender}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Payment:</span>
                <span className={styles.value}>{payment}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Cover amount:</span>
                <span className={styles.value}>{cover_amount}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Brochure:</span>
                <span className={styles.value}>{brochure}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Term:</span>
                <span className={styles.value}>{term}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Yearly premium:</span>
                <span className={styles.value}>{yearly_premium}</span>
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

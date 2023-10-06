import React, { useEffect, useState } from "react";
import PageTemplate from "../../../components/reusable/template/PageTemplate";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "config";
import { RootState } from "../../../redux/reducers";
import styles from "./UnivDetailStyles.module.scss";
import SubmitButton from "./components/SubmitButton";
import Card from "./components/Card";
import { add } from "lodash";

export default function index() {
  const [loader, setLoader] = useState(false);

  let router = useRouter();
  let query = router.query;

  let name = query.name;
  let id = query.id;
  let img = query.img;
  let state_name = query.state_name;
  let country_name = query.country_name;
  let world_ranking = query.world_ranking;
  let country_ranking = query.country_ranking;
  let rating = query.rating;
  let mission_statement = query.mission_statement;
  let mission_statement_url = query.mission_statement_url;
  let address = query.address;
  let contact_number = query.contact_number;
  let website = query.website;
  let total_price_on_campus = query.total_price_on_campus;
  let tuition_and_fees = query.tuition_and_fees;
  let books_and_supplies = query.books_and_supplies;
  let room_and_board = query.room_and_board;

  const userating = Number(rating);

  const jwt = useSelector((state) => state.storage.jwt);

  const { apiUrl } = config;
  let [reviewState, setReview] = useState([]);
  let [feedback, setFeedback] = useState("");
  let [user_rating, setUserRating] = useState("");
  let reviews = [];

  const navigate = () => {
    router.push(`/app/ePlanningProgDetail?univ=${id}`);
  };

  //http://127.0.0.1:5036/api/educationPlanning/reviews?univ_id=1

  useEffect(() => {
    setLoader(true);
    if (router.isReady) {
      const fetchData = async () => {
        const response = await axios(
          `${apiUrl}/api/educationPlanning/reviews?univ_id=${id}`
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
              <div className={styles.rowReview}>
                <span className={styles.label}>Rating: </span>
                <span className={styles.value}>
                  {data[i].rating.toFixed(2)}
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
      //http://127.0.0.1:5036/api/educationPlanning/reviews
      const response = await fetch(`${apiUrl}/api/educationPlanning/reviews`, {
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
          univ_id: id,
          description: feedback,
          rating: user_rating,
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
            {/* <div className={styles.productImage}>
              <img src={img} alt={name} />
            </div> */}
            <div className={styles.details}>
              <h1 className={styles.productName}>{name}</h1>
              <div className={styles.row}>
                <span className={styles.value}>{state_name}</span>
                <span className={styles.label}>, </span>
                <span className={styles.value}>{country_name}</span>
              </div>
              {world_ranking ? (
              <div className={styles.row}>
                <span className={styles.label}>World Ranking:</span>
                <span className={styles.value}>{world_ranking}</span>
              </div>
              ) : null }
              {country_ranking ? (
              <div className={styles.row}>
                <span className={styles.label}>Country Ranking:</span>
                <span className={styles.value}>{country_ranking}</span>
              </div>
              ) : null }
              <div className={styles.row}>
                <span className={styles.label}>Rating:</span>
                <span className={styles.value}>{userating.toFixed(2)}</span>
              </div>
              {mission_statement || mission_statement_url ? (
              <div className={styles.row}>
                <span className={styles.label}>Mission Statement:</span>
                <span className={styles.value}>{mission_statement || (
                      <a href={mission_statement_url}>{mission_statement_url}</a>
                    )}</span>
              </div>
              ) : null}
              {address ? (
              <div className={styles.row}>
                <span className={styles.label}>Address:</span>
                <span className={styles.value}>{address}</span>
              </div>
              ) : null }
              {contact_number ? (
              <div className={styles.row}>
                <span className={styles.label}>Contact:</span>
                <span className={styles.value}>{contact_number}</span>
              </div>
              ) : null }
              {website ? (
              <div className={styles.row}>
                <span className={styles.label}>Website:</span>
                <span className={styles.value}>{website}</span>
              </div>
              ) : null }
              {total_price_on_campus ? (
              <div className={styles.row}>
                <span className={styles.label}>Average Total Price on Campus:</span>
                <span className={styles.value}>{total_price_on_campus}</span>
              </div>
              ) : null }
              {tuition_and_fees ? (
              <div className={styles.row}>
                <span className={styles.label}>Average Tuition and Fees:</span>
                <span className={styles.value}>{tuition_and_fees}</span>
              </div>
              ) : null }
              {books_and_supplies ? (
              <div className={styles.row}>
                <span className={styles.label}>Average Books and Supplies:</span>
                <span className={styles.value}>{books_and_supplies}</span>
              </div>
              ) : null }
              {room_and_board ? (
              <div className={styles.row}>
                <span className={styles.label}>Average Room and Board:</span>
                <span className={styles.value}>{room_and_board}</span>
              </div>
              ) : null }
            </div>
          </div>
          <SubmitButton onSubmit={navigate} />
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
              <textarea
                className={styles.formInput}
                placeholder="Your rating"
                value={user_rating}
                onChange={(e) => setUserRating(e.target.value)}
                onKeyPress={(e) => {
                  const keyCode = e.keyCode || e.which;
                  const keyValue = String.fromCharCode(keyCode);

                  // Check if the pressed key is a number or a decimal point
                  if (/[\d.]/.test(keyValue)) {
                    return true;
                  } else {
                    e.preventDefault();
                    return false;
                  }
                }}
              />
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
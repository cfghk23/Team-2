import React, { useEffect, useState } from "react";
import PageTemplate from "../../../components/reusable/template/PageTemplate";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import axios from "axios";
import config from "config";
import { RootState } from "../../../redux/reducers";

export default function index() {
  const router = useRouter();
  const query = router.query;
  let univ_id = query.univ;

  let [loader, setLoader] = useState(false);

  let [cardState, setCardState] = useState([]);
  let { apiUrl } = config;

  let new_card_array = [];
  useEffect(() => {
    if (router.isReady) {
      const fetchData = async () => {
        let url_fetch = `${apiUrl}/api/educationPlanning/univ/${univ_id}/programs`;
        
        setLoader(true);

        try {
          const response = await axios(url_fetch);
          const data = response.data; //! assuming it is an array of objects
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            new_card_array.push(
              <Card
                data={data[i]}
                key={i}
              />
            );
          }

          if (new_card_array.length == 0) {
            new_card_array.push(
              <div
                style={{
                  width: "700px",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                No data to show!
              </div>
            );
          }
          setLoader(false);
        } catch (err) {
          console.log(err);
          setLoader(false);
          new_card_array.push(
            <div
              style={{
                width: "700px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              No data to show!
            </div>
          );
        }
      };
      fetchData();
      setCardState(new_card_array);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <PageTemplate>
        {loader ? <Spinner /> : cardState}
      </PageTemplate>
    </>
  );
}
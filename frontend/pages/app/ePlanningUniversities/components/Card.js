import React, { useState } from "react";
import { useRouter } from "next/router";
// import { RootState } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

export default function Card(prop) {
  const router = useRouter();
  let data = prop.data;
  let clicker = prop.clicker;

  const rating = Number(data.rating);

  const { isLoggedIn } = useSelector((state) => state.storage);

  return (
   <div style={styles.outerContainer}>
     <div style={styles.container}>
     {/* <div style={styles.logoContainer}>
        <img
          src={data.img}
          alt={data.name}
          onClick={clicker}
          style={styles.logo}
        />
      </div> */}
      <div onClick={clicker} style={styles.infoContainer}>
        <div style={styles.row}>
          <div style={styles.label}>University name:</div>
          <div style={styles.value}>{data.name}</div>
        </div>
        {data.mission_statement || data.mission_statement_url ? (
          <div style={styles.row}>
            <div style={styles.label}>Mission Statement:</div>
            <div style={styles.value}>
              {data.mission_statement || (
                <a href={data.mission_statement_url}>{data.mission_statement_url}</a>
              )}
            </div>
          </div>
        ) : null}
        {data.world_ranking ? (
        <div style={styles.row}>
          <div style={styles.label}>World Ranking:</div>
          <div style={styles.value}>{data.world_ranking}</div>
        </div>
        ) : null }
        <div style={styles.row}>
          <div style={styles.label}>Rating:</div>
          <div style={styles.value}>{rating.toFixed(2)} </div>
        </div>
      </div>
    </div>
   </div>
  );
}

const styles = {
  outerContainer: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // height:"100vh",
    // width:"100vw",
  },
  container: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    cursor: "pointer",
    width:"90%"
  },
  logoContainer: {
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: "100%",
    maxWidth: "70px",
    cursor: "pointer",
  },
  infoContainer: {
    padding: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
    minWidth: "150px",
  },
  value: {
    flexGrow: 1,
  },
  link: {
    color: "#00c",
    textDecoration: "none",
  },
};

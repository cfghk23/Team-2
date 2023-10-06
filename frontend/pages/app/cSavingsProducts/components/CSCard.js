import React, { useState } from "react";
import { useRouter } from "next/router";
// import { RootState } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

export default function CSCard(prop) {
  const router = useRouter();
  let data = prop.data;
  let clicker = prop.clicker;

  const { isLoggedIn } = useSelector((state) => state.storage);

  return (
   <div style={styles.outerContainer}>
     <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src={data.logo}
          alt={data.name}
          onClick={clicker}
          style={styles.logo}
        />
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.row}>
          <div style={styles.label}>Company name:</div>
          <div style={styles.value}>{data.name}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.label}>Description:</div>
          <div style={styles.value}>{data.description}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.label}>Invest Period:</div>
          <div style={styles.value}>{data.investment_period}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.label}>Monthly Investment:</div>
          <div style={styles.value}>{data.monthly_investment}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.label}>Withdraw After:</div>
          <div style={styles.value}>{data.withdraw_after}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.label}>Lumpsum Payout:</div>
          <div style={styles.value}>{data.lumpsum}</div>
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

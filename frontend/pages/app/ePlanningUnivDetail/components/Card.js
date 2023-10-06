import React, { useState } from "react";
import { useRouter } from "next/router";
// import { RootState } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

export default function Card(prop) {
  const router = useRouter();
  let data = prop.data;
  let clicker = prop.clicker;

  const { isLoggedIn } = useSelector((state) => state.storage);

  return (
   <div style={styles.outerContainer}>
    <div onClick={clicker} style={styles.row}>
        <div style={styles.label}>View Programs</div>
    </div>
   </div>
  );
}

const styles = {
  outerContainer: {
    // display:"flex",
    // flexDirection:"column",
    width: "100%",
    maxWidth: "200px",
    cursor: "pointer",
    justifyContent:"center",
    alignItems:"center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ccc",
    borderRadius: "10px",
    // height:"100vh",
    // width:"100vw",
  },
//   container: {
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "row",
//     margin: "10px",
//     overflow: "hidden",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//     backgroundColor: "#fff",
//     width:"90%"
//   },
//   logoContainer: {
//     padding: "20px",
//     backgroundColor: "#f0f0f0",
//   },
//   logo: {
//     width: "100%",
//     maxWidth: "70px",
//     cursor: "pointer",
//   },
//   infoContainer: {
//     padding: "20px",
//   },
//   row: {
//     display: "flex",
//     flexDirection: "row",
//     marginBottom: "10px",
//   },
//   label: {
//     fontWeight: "bold",
//     minWidth: "150px",
//   },
//   value: {
//     flexGrow: 1,
//   },
//   link: {
//     color: "#00c",
//     textDecoration: "none",
//   },
};

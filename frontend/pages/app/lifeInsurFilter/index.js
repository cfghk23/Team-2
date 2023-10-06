import React, { useState } from "react";
import GenderQuestion from "./components/GenderQuestion";
import SmokingQuestion from "./components/SmokingQuestion";
import MultipleChoices from "./components/MultipleChoices";
import CurrencySlider from "./components/CurrencySlider";
import SubmitButton from "./components/SubmitButton";
import { useRouter } from "next/router";
import styles from "./SortFilter.module.scss";
import PageTemplate from "@components/reusable/template/pageTemplate";
import st from "@components/reusable/widgets/RadioForm.module.scss";

const paymentTermOptions = [
  { label: "Monthly", value: "Monthly" },
  { label: "Annually", value: "Annually" },
];

function Cat1() {
  const router = useRouter();

  const [gender, setGender] = useState("F");
  const [smoking, setSmoking] = useState("N");
  const [paymentTerm, setPaymentTerm] = useState(paymentTermOptions[0].value);
  const [cover_amount, setCoverAmount] = useState(10000);
  const [dob, setDob] = useState("");
  const [selected, setSelected] = useState(false);
  const ranges = [{ min: 5000000, max: 10000000, step: 1000000 }];

  function calculateMonthsSinceDOB() {
    // Split the date string into day, month, and year components
    const [day, month, year] = dob.split("-");

    // Create a new Date object from the year, month, and day components
    const dobDate = new Date(year, month - 1, day);

    // Calculate the difference between the current date and the DOB date in milliseconds
    const diffInMs = Date.now() - dobDate.getTime();

    // Calculate the number of months between the current date and the DOB date
    const months = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));

    return months;
  }

  const navigate = () =>
    router.push({
      pathname: "/app/lifeInsurProducts",
      query: {
        cover_amount: cover_amount,
        gender_value: gender,
        smk_value: smoking,
        payment: paymentTerm,
        months: calculateMonthsSinceDOB(),
        term: 20,
      },
    });

  return (
    <>
      <PageTemplate>
        <div className={styles.container}>
          <div className={styles.form}>
            <h2 style={{ margin: "0rem 0", textAlign: "center" }}>
              Life Insurance
            </h2>
            <h4>Date of Birth</h4>
            <button
              className={st.radio}
              onClick={() => {
                setSelected(true);
                //  onClick(i.value);
              }}
            >
              {/* <div className={st.label}> */}
              <input
                style={{ border: "none" }}
                placeholder="Enter DOB(DD-MM-YYYY)"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
              {/* <h4 className={selected ? st.txtActive : st.txt}> label</h4> */}
              {/* </div> */}
            </button>
            <GenderQuestion mustBeFemale setGender={setGender} />
            <SmokingQuestion mustBeNotSmoking setSmoking={setSmoking} />
            <MultipleChoices
              options={paymentTermOptions}
              setPaymentTerm={setPaymentTerm}
            />
            <CurrencySlider
              title="Cover Amount"
              value={cover_amount}
              setValue={setCoverAmount}
              ranges={ranges}
            />
            <SubmitButton onSubmit={navigate} />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default Cat1;

import React, { useState } from "react";
import WithdrawAfterSlider from "./components/WithdrawAfterSlider";
import MonthInvestmentSlider from "./components/MonthInvestmentSlider";
import InvestPeriodSlider from "./components/InvestPeriodSlider";
import SubmitButton from "./components/SubmitButton";
import { useRouter } from "next/router";
import styles from "./SortFilter.module.scss";
import PageTemplate from "@components/reusable/template/pageTemplate";
import st from "@components/reusable/widgets/RadioForm.module.scss";

function cSavingsFilter() {
  const router = useRouter();

  const [investment_period, setInvestPeriod] = useState(5);
  const [monthly_investment, setMonthlyInvestment] = useState(1000);
  const [withdraw_after, setWithdrawAfter] = useState(10);
  const ranges_investperiod = [{ min: 5, max: 20, step: 1 }];
  const ranges_monthly_investment = [{ min: 10000, max: 200000, step: 1000 }];
  const ranges_withdrawafter = [{ min: 10, max: 20, step: 1 }];

  const navigate = () =>
    router.push({
      pathname: "/app/cSavingsProducts",
      query: {
        withdraw_after:withdraw_after,
        monthly_investment: monthly_investment,
        investment_period: investment_period,
      },
    });

  return (
    <>
      <PageTemplate>
        <div className={styles.container}>
          <div className={styles.form}>
            <h2 style={{ margin: "0rem 0", textAlign: "center" }}>
              Child Savings Plans 
            </h2>
            <InvestPeriodSlider
              title="Investment Period"
              value={investment_period}
              setValue={setInvestPeriod}
              ranges={ranges_investperiod}
            />
            <MonthInvestmentSlider
              title="Monthly Investment"
              value={monthly_investment}
              setValue={setMonthlyInvestment}
              ranges={ranges_monthly_investment}
            />
            <WithdrawAfterSlider
              title="Withdraw After"
              value={withdraw_after}
              setValue={setWithdrawAfter}
              ranges={ranges_withdrawafter}
            />
            <SubmitButton onSubmit={navigate} />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default cSavingsFilter;

import React, { useState } from "react";
import RatingSlider from "./components/RatingSlider";
import StatesMultiSelectDropdown from "./components/StatesMultiSelectDropdown";
import SubmitButton from "./components/SubmitButton";
import styles from "./SortFilter.module.scss";
import PageTemplate from "@components/reusable/template/pageTemplate";
import { useRouter } from "next/router";

function FilterPage() {
  const router = useRouter();
  const [min_rating, setMinRating] = useState(3);
  const ranges = [
    { min: 1, max: 5, step: 1 }
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { label: 'Alabama', value: '32'},
    { label: 'Alaska', value: '58'},
    { label: 'American Samoa', value: '16'},
    { label: 'Arizona', value: '21'},
    { label: 'Arkansas', value: '9'},
    { label: 'California', value: '55'},
    { label: 'Colorado', value: '34'},
    { label: 'Connecticut', value: '41'},
    { label: 'Delaware', value: '37'},
    { label: 'District of Columbia', value: '13'},
    { label: 'Federated States of Micronesia', value: '5'},
    { label: 'Florida', value: '36'},
    { label: 'Georgia', value: '52'},
    { label: 'Guam', value: '39'},
    { label: 'Hawaii', value: '8'},
    { label: 'Idaho', value: '31'},
    { label: 'Illinois', value: '50'},
    { label: 'Indiana', value: '43'},
    { label: 'Iowa', value: '42'},
    { label: 'Kansas', value: '56'},
    { label: 'Kentucky', value: '20'},
    { label: 'Louisiana', value: '38'},
    { label: 'Maine', value: '54'},
    { label: 'Marshall Islands', value: '19'},
    { label: 'Maryland', value: '22'},
    { label: 'Massachusetts', value: '44'},
    { label: 'Michigan', value: '46'},
    { label: 'Minnesota', value: '17'},
    { label: 'Mississippi', value: '35'},
    { label: 'Missouri', value: '11'},
    { label: 'Montana', value: '49'},
    { label: 'Nebraska', value: '27'},
    { label: 'Nevada', value: '3'},
    { label: 'New Hampshire', value: '25'},
    { label: 'New Jersey', value: '40'},
    { label: 'New Mexico', value: '10'},
    { label: 'New York', value: '4'},
    { label: 'North Carolina', value: '33'},
    { label: 'North Dakota', value: '26'},
    { label: 'Northern Marianas', value: '29'},
    { label: 'Ohio', value: '15'},
    { label: 'Oklahoma', value: '59'},
    { label: 'Oregon', value: '30'},
    { label: 'Palau', value: '14'},
    { label: 'Pennsylvania', value: '47'},
    { label: 'Puerto Rico', value: '23'},
    { label: 'Rhode Island', value: '45'},
    { label: 'South Carolina', value: '7'},
    { label: 'South Dakota', value: '12'},
    { label: 'Tennessee', value: '28'},
    { label: 'Texas', value: '57'},
    { label: 'Utah', value: '53'},
    { label: 'Vermont', value: '2'},
    { label: 'Virginia', value: '51'},
    { label: 'Virgin Islands', value: '1'},
    { label: 'Washington', value: '18'},
    { label: 'West Virginia', value: '6'},
    { label: 'Wisconsin', value: '48'},
    { label: 'Wyoming', value: '24'},
    // Add more states as needed
  ];

  const selectedStates = selectedOptions.map(option => option.label);
  let states;
  let stateList = "";
  if (selectedStates.length === 0) {
    states = options.map(option => option.label);
    stateList = states.join(",");
  } else if (selectedStates.length === 1) {
    states = [selectedStates[0]];
    stateList = selectedStates[0];
  } else {
    states = selectedStates;
    stateList = states.join(",");
  }

  const navigate = () =>
    router.push({
      pathname: "/app/ePlanningUniversities",
      query: {
        // state: selectedOptions.map(option => option.label).join(","),
        state: stateList,
        min_rating: min_rating,
      },
    });
    return (
      <>
        <PageTemplate>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2 style={{ margin: "0rem 0", textAlign: "center" }}>
                Top Universities
              </h2>
              <StatesMultiSelectDropdown
                options={options} 
                selectedOptions={selectedOptions}
                onChange={setSelectedOptions}
              />
              <RatingSlider
                title="Minimum Rating"
                value={min_rating}
                setValue={setMinRating}
                ranges={ranges}
              />
              <SubmitButton onSubmit={navigate} />
            </div>
          </div>
        </PageTemplate>
      </>
    ); 
}

export default FilterPage;

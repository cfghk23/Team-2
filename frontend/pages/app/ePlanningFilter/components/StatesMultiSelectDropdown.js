import React, { useState } from 'react';
import Select from 'react-select';
import styles from './StatesMultiSelectDropdown.module.scss';

export default function StatesMultiSelectDropdown({ onChange, options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    if (onChange) {
      onChange(selectedOptions);
    }
  };

  return (
    <div className={styles.container}>
      <label>States</label>
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isMulti={true}
        className={styles.dropdown}
        classNamePrefix={styles.dropdown}
        placeholder="Select states"
      />
    </div>
  );
}
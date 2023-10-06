import Slider from '@components/reusable/widgets/Slider';
import React, { useState } from 'react';
import styles from './RatingSlider.module.scss';

export default function RatingSlider({
  title,
  value,
  setValue,
  ranges,
  step,
//   minimumValue = 1,
//   maximumValue = 5,
}) {

  const max = ranges[ranges.length - 1].max
  const min = ranges[0].min

  const [tempV, setTempV] = useState('');
  const [inputting, setInputting] = useState(false);

  const focus = () => {
    setTempV(value)
    setInputting(true)
  }

  const unFocus = () => {
    setValue(roundValue(textInputToNum(tempV)))
    setInputting(false)
  }

  const textInputToNum = (v) => {
    console.log(v)
    if (v == null || isNaN(v) || v === '') {
      return min;
    }
    return parseInt(v)
  };

  const addValStep = (v, ranges) => {
    if (v >= max) return max
    if (v < min) return min
    const idx = ranges.findIndex(r => r.min <= v && r.max >= v)
    let step;
    if(v === ranges[idx].max){
      step = ranges[idx + 1].step
    }
    else{
      step = ranges[idx].step
    }
    return v + step
  }

  const minusValStep = (v, ranges, min) => {
    if(v <= min) return min
    if(v > max) return max
    const idx = ranges.findIndex(r => r.min <= v && r.max >= v)
    let step;
    if(v === ranges[idx].min){
      step = ranges[idx - 1].step
    }
    else{
      step = ranges[idx].step
    }
    return v - step;
  }

  const roundValue = (v) => {

    console.log(v)
    if (v <= min) {
      return min
    }
    else if (v >= max) {
      return max
    }
    else if(v <= ranges[0].max){
      let round = ranges[0].step;
      return(round * Math.round(v / round));
    }
    else {
      const idx = ranges.findIndex(r => r.min <= v && r.max >= v)
      let round = ranges[idx].step;
      return(round * Math.round(v / round));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h4>{title}</h4>
        <div className={styles.ratingDisplay}>
          <input
            className={styles.ratingInput}
            onChange={(e) => setTempV(e.target.value)}
            onFocus={focus}
            onBlur={unFocus}
            type={'number'}
            maxLength={2}
            value={inputting ? tempV.toString() : value.toString()}
          />
        </div>
      </div>
      <div>
        <Slider
          step={step}
          minimumValue={min}
          maximumValue={max}
          value={value}
          onValueChange={(v) => setValue(roundValue(v))}
          onAdd={() => setValue(addValStep(value, ranges, max))}
          onMinus={() => setValue(minusValStep(value, ranges, min))}
        />
      </div>
    </div>
  );
}

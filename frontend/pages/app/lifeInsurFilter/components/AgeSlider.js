import React from 'react';
import Slider from '@components/reusable/widgets/Slider';
import styleLib from '@components/../constants/styleLib';
import {useSelector} from 'react-redux';
import {tabNames} from '@components/../constants/tabNames';
import useTranslation from 'next-translate/useTranslation'
import styles from './AgeSlider.module.scss'

export default function AgeSlider({min, max, age, setAge, step = 5,
                                              specialTitle = '',
                                              specialContainerHeight
                                            }) {

  const { t } = useTranslation("sortfilter");

  const ageRangeToDisplay = () => {
    if(age === 0){
      return '0'
    }
    let n;
    if(age > max){
      n = age
    }
    else if(age < min){
      n = min
    }
    else{
      n = age
    }
    if(step === 1){
      return `${n}`
    }
    let mod = n % step;
    let upper = mod === 0 ? n : n + (step - mod)
    let lower = upper - step + 1
    return `${lower}-${upper}`
  }

  const onAdd = () => {
      const nextAge = age + step;
      setAge(Math.min(max, nextAge))
  }

  const onMinus= () => {
      const nextAge = age - step;
      setAge(Math.max(min, nextAge))
  }

  const roundValue = (v) => {
    if(v < min){
      v = min
    }
    else if(v > max){
      v = max
    }
    else{
      v = step * Math.round(v / step)
    }
    return v
  }
  const navi_scrn = useSelector(state => state.ux.navi_scrn)
  const color = navi_scrn === tabNames.DNA ? styleLib.DNA_THEME_COLOR : styleLib.PRIMARY_BLUE

  return <div>
      <div className={styles.ageRangeTitle}>
        <h4>{
          specialTitle !== '' ? specialTitle :
            t("age_range")}</h4>
        <div className={styles.ageDisplay} >
          <h4>{ageRangeToDisplay() } </h4>
        
          <h4>  {t('year')}</h4>
        </div>
      </div>
      <div>
        <Slider
          step={step}
          minimumValue={min}
          maximumValue={max}
          value={age === 0 ? min : age}
          onValueChange={val => setAge(roundValue(val))}
          onAdd={onAdd}
          onMinus={onMinus}
          />
      </div>
  </div>
}


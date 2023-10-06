import React from 'react'
import styleLib from '../../../../constants/styleLib';
import {useSelector} from 'react-redux';
import {tabNames} from '../../../../constants/tabNames';
import useTranslation from 'next-translate/useTranslation';
import styles from './SubmitButton.module.scss'
export default function SubmitButton({onSubmit}){

  const { t } = useTranslation('sortfilter')

  const navi_scrn = useSelector(state => state.ux.navi_scrn)
  const color = navi_scrn === tabNames.DNA ? styleLib.DNA_THEME_COLOR : styleLib.ACTIVE_BLUE
  return <div className={styles.footer} >
   
    <button
              className={`${styles.button83} ${styles.continueBtn}`}
              role="button"
              onClick={onSubmit}
            >
              {" "}
              <p style={{textAlign:'center'}}>Continue</p>
            </button>
    <div>
      <h4 className={styles.disclaimerTitle}>Disclaimer</h4>
      <h5 className={styles.disclaimer}>You are required to provide accurate and complete information for us to provide appropriate comparison quotes</h5>
    </div>
  </div>;
}

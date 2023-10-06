import React from 'react'
import styleLib from '../../../../constants/styleLib';
import {useSelector} from 'react-redux';
import {tabNames} from '../../../../constants/tabNames';
import useTranslation from 'next-translate/useTranslation';
import styles from './SubmitButton.module.scss'
import { useRouter } from "next/router";
export default function SubmitButton({onSubmit}){

  const { t } = useTranslation('sortfilter')

  const navi_scrn = useSelector(state => state.ux.navi_scrn)
  const color = navi_scrn === tabNames.DNA ? styleLib.DNA_THEME_COLOR : styleLib.ACTIVE_BLUE
  // const router = useRouter();
  // let data = prop.data;
  // let clicker = prop.clicker;

  return <div className={styles.footer} >
   
    <button
              className={`${styles.button83} ${styles.continueBtn}`}
              role="button"
              // onClick={clicker} 
              onClick={onSubmit}
            >
              {" "}
              <p style={{textAlign:'center'}}>View Programs</p>
            </button>
  </div>;
}

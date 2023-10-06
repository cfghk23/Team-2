import RadioForm from '@components/reusable/widgets/RadioForm';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function SmokingQuestion({mustBeNotSmoking = false, setSmoking}){

  const { t } = useTranslation('sortfilter')

  const radio_smk_stat = [
    {label: "Smoking", value: "Y"},
    {label: "Non-Smoking", value: "N"}
  ]


  return <div style={{margin:'1rem 0'}}>
      <h4> Smoking</h4>
      <div>
        <RadioForm
          radio_props={radio_smk_stat}
          color='limegreen'
          animation={false}
          buttonSize={'2.7vh'}
          buttonOuterSize={'4.2vh'}
          initial={1}
          onClick={v => setSmoking(v)}
        />
      </div>
  </div>
}

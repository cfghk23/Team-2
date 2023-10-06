import RadioForm from '@components/reusable/widgets/RadioForm';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function MultipleChoices ({roomText = false, options=[], setPaymentTerm, specialTitle }) {

  const { t } = useTranslation('sortfilter')

  return <div>
      <h4
       >Payment 
      </h4>
      <div>
        <RadioForm
          radio_props={options}
          animation={false}
          buttonSize={'2.7vh'}
          buttonOuterSize={'4.2vh'}
          initial={0}
          onClick={(v) => setPaymentTerm(v)}
        />
      </div>
  </div>
}

import RadioForm from '@components/reusable/widgets/RadioForm';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';


export default function  GenderQuestion({mustBeFemale = false, setGender}) {

  const { t } = useTranslation('sortfilter')

  const radio_props_gender = [
    {label: "Male", value: "M"},
    {label: "Female", value: "F"}
  ];


  return <div style={{margin:'1rem 0'}}>
      <h4>Gender</h4>
      <div>
        <RadioForm
          radio_props={radio_props_gender}
          animation={false}
          buttonSize={'2.7vh'}
          buttonOuterSize={'4.2vh'}
          initial={1}
          onClick={v => setGender(v)}
        />
      </div>
  </div>
}

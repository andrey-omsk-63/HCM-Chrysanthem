import * as React from 'react';

import HcmErrorMessage from '../HcmErrorMessage';
import HcmBl3Form101 from './HcmBl3Form101';
import HcmBl3Form102 from './HcmBl3Form102';
import HcmBl3Form103 from './HcmBl3Form103';

import { FORM3 } from '../../HcmMain';

// import { MakeStylSpisPK06 } from "../../MainMapStyle";

const HcmBlock3Disp = (props: { setOpen: any }) => {
  let soob = 'Здесь будет запуск формы ';
  switch (FORM3) {
    case '1':
      soob += 'Регламенты';
      break;
    case '2':
      soob += 'Структура компании';
      break;

    case '3':
      soob += 'Профили компетенций';
  }

  return (
    <>
      {FORM3 === '1' && <HcmBl3Form101 />}
      {FORM3 === '2' && <HcmBl3Form102 />}
      {FORM3 === '3' && <HcmBl3Form103 />}
      {Number(FORM3) > 4 && <HcmErrorMessage sErr={soob} setOpen={props.setOpen} />}
    </>
  );
};

export default HcmBlock3Disp;

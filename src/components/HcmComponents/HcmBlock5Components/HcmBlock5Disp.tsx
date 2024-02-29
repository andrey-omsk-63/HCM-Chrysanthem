import * as React from 'react';

import HcmErrorMessage from '../HcmErrorMessage';
import HcmBl5Form101 from './HcmBl5Form101';
import HcmBl5Form102 from './HcmBl5Form102';
import HcmBl5Form103 from './HcmBl5Form103';
import HcmBl5Form104 from './HcmBl5Form104';

import { FORM5 } from '../../HcmMain';

const HcmBlock5Disp = (props: { setOpen: any }) => {
  let soob = 'Здесь будет запуск формы ';
  switch (FORM5) {
    case '1':
      soob += 'Адаптация';
      break;
    case '2':
      soob += 'Добавить ИПР';
      break;
    case '3':
      soob += 'Создать задачу';
      break;
    case '4':
      soob += 'Добавить Healt Check';
      break;
    case '5':
      soob += 'Добавить Healt Check';
  }

  return (
    <>
      {FORM5 === '1' && <HcmBl5Form101 close={props.setOpen} />}
      {FORM5 === '2' && <HcmBl5Form102 close={props.setOpen} />}
      {FORM5 === '3' && <HcmBl5Form103 close={props.setOpen} />}
      {FORM5 === '4' && <HcmBl5Form104 close={props.setOpen} />}
      {Number(FORM5) > 4 && <HcmErrorMessage sErr={soob} setOpen={props.setOpen} />}
    </>
  );
};

export default HcmBlock5Disp;

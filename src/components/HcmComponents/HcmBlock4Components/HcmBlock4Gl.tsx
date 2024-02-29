import * as React from 'react';

import Grid from '@mui/material/Grid';
//import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import HcmBl4Form101 from './HcmBl4Form101';
import HcmBl4Form102 from './HcmBl4Form102';
import HcmBl4Form103 from './HcmBl4Form103';
import HcmBl4Form104 from './HcmBl4Form104';
import HcmBl4Form105 from './HcmBl4Form105';

//import { RandomNumber } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01 } from '../../HcmMainStyle';

let Illum = 1;
let oldIdx = -1;

const HcmBlock4Gl = (props: { idx: number }) => {
  const [bl4Form101, setBl4Form101] = React.useState(false);
  const [bl4Form102, setBl4Form201] = React.useState(false);
  const [bl4Form103, setBl4Form301] = React.useState(false);
  const [bl4Form104, setBl4Form401] = React.useState(false);
  const [bl4Form105, setBl4Form501] = React.useState(false);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    switch (Illum) {
      case 1: // Адаптация
        setBl4Form101(true);
        break;
      case 2: // HealtH Check
        setBl4Form201(true);
        break;
      case 3: // Задачи
        setBl4Form301(true);
        break;
      case 4: // ИПР
        setBl4Form401(true);
        break;
      case 5: // Оценки компетенций
        setBl4Form501(true);
    }
  }
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = 1;
    setBl4Form101(true);
    bl4Form102 && setBl4Form201(false);
    bl4Form103 && setBl4Form301(false);
    bl4Form104 && setBl4Form401(false);
    bl4Form105 && setBl4Form501(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    bl4Form101 && setBl4Form101(false);
    setBl4Form201(true);
    bl4Form103 && setBl4Form301(false);
    bl4Form104 && setBl4Form401(false);
    bl4Form105 && setBl4Form501(false);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    bl4Form101 && setBl4Form101(false);
    bl4Form102 && setBl4Form201(false);
    setBl4Form301(true);
    bl4Form104 && setBl4Form401(false);
    bl4Form105 && setBl4Form501(false);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    bl4Form101 && setBl4Form101(false);
    bl4Form102 && setBl4Form201(false);
    bl4Form103 && setBl4Form301(false);
    setBl4Form401(true);
    bl4Form105 && setBl4Form501(false);
  };

  const ClickKnop5 = () => {
    Illum = 5;
    bl4Form101 && setBl4Form101(false);
    bl4Form102 && setBl4Form201(false);
    bl4Form103 && setBl4Form301(false);
    bl4Form104 && setBl4Form401(false);
    setBl4Form501(true);
  };
  //=== Компоненты =========================================
  const MenuBatton = (xss: number, wt: number, ill: number, name: string, func: Function) => {
    return (
      <Grid item xs={xss} sx={{ height: '30px' }}>
        <Button sx={styleMain04(wt, Illum, ill)} onClick={() => func()}>
          {name}
        </Button>
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={8}>
        <Grid container>
          {MenuBatton(2, 1.33, 1, 'Адаптация', ClickKnop1)}
          {MenuBatton(2, 1.33, 2, 'Health Check', ClickKnop2)}
          {MenuBatton(2, 1.33, 3, 'Задачи', ClickKnop3)}
          {MenuBatton(1.5, 1.0, 4, 'ИПР', ClickKnop4)}
          {MenuBatton(2.5, 1.67, 5, 'Оценки компетенций', ClickKnop5)}
        </Grid>
      </Grid>
      {bl4Form101 && <HcmBl4Form101 />}
      {bl4Form102 && <HcmBl4Form102 />}
      {bl4Form103 && <HcmBl4Form103 />}
      {bl4Form104 && <HcmBl4Form104 />}
      {bl4Form105 && <HcmBl4Form105 />}
    </Grid>
  );
};

export default HcmBlock4Gl;

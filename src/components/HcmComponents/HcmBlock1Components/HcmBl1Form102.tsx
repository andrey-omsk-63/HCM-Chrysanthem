import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form06 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl1Form099 } from '../../HcmMainStyle';

const HcmBl1Form102 = () => {
  const StrokaForm102 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = {
          nom: i * 4 + j,
          nomenenkl: 'Стол Икеа Бекант',
          state: 'Используется',
          sum: '10 000 руб',
        };

        switch (j) {
          case 1:
            maskStr.nomenenkl = 'Стол Икеа Бекант';
            maskStr.state = 'Используется';
            maskStr.sum = '15 000 руб';
            break;
          case 2:
            maskStr.nomenenkl = 'Тумба Икеа Эрик';
            maskStr.state = 'Сломана';
            maskStr.sum = '10 000 руб';
            break;
          case 3:
            maskStr.nomenenkl = 'Монитор 23" I2381FH 1920x1080';
            maskStr.state = 'Используется';
            maskStr.sum = '12 000 руб';
            break;
          case 4:
            maskStr.nomenenkl = 'Ноутбук 15.6" HP ENVY x360';
            maskStr.state = 'Используется';
            maskStr.sum = '50 000 руб';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 1.5, masStr[i].nom, styleBl1Form09(brb))}
          {TablStr(0, 3.5, masStr[i].nomenenkl, styleBl1Form099(brb))}
          {TablStr(0, 3.5, masStr[i].state, styleBl1Form09(brb))}
          {TablStr(0, 3.5, masStr[i].sum, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1.5, '№', styleBl1Form08)}
        {TablStr(1, 3.5, 'Номенклатура', styleBl1Form08)}
        {TablStr(1, 3.5, 'Состояние актива', styleBl1Form08)}
        {TablStr(1, 3.5, 'Сумма', styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(340)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        <Box sx={styleBl1Form06(375)}>{StrokaForm102()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form102;

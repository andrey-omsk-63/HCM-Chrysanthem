import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

import { InputDirectA, PreparCurrencies041 } from '../../HcmServiceFunctions';
import { PreparCurrencies042, TablStr } from '../../HcmServiceFunctions';
import { PreparCurrencies043 } from '../../HcmServiceFunctions';

import { styleBl1Form011, styleBl1Form07 } from '../../HcmMainStyle';
import { styleBl1Form08, styleBl1Form06 } from '../../HcmMainStyle';
//import { styleBl1Form099 } from '../../HcmMainStyle';

import { widthGl } from '../../HcmMain';

let currencies01: any = []; // Подразделение
let currencies02: any = []; // Период
let currencies03: any = []; // Аналитика

let flagOpen = false;

let coler = [
  '#ec9695', // 1 - светло розовый
  '#DC7777', // 2 - тёмно розовый
  '#FFCC81', // 3 - светло коричневый
  '#E7A865', // 4 - коричневый
  '#FFFF81', // 5 - светло жёлтый
  '#ffff53', // 6 - жёлтый
  '#C2D9B9', // 7 - светло серый
  '#ABCA9E', // 8 - серый
  '#81CF88', // 9 - светло зелёный
  '#63a169', // 10 - зелёный
];

const HcmBl4Form102 = () => {
  const [currency01, setCurrency01] = React.useState('0');
  const [currency02, setCurrency02] = React.useState('0');
  const [currency03, setCurrency03] = React.useState('0');

  //=== инициализация ======================================
  if (!flagOpen) {
    currencies01 = PreparCurrencies041(); // Подразделение
    currencies02 = PreparCurrencies042(); // Период
    currencies03 = PreparCurrencies043(); // Аналитика
    flagOpen = true;
  }
  //========================================================

  const StrokaMenuGlob = (mode: number, wdth: number, currency: any, currencies: any) => {
    let widthBlok = (widthGl / 12) * wdth - 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Подразделение
          setCurrency01(event.target.value);
          break;
        case 2: // Период
          setCurrency02(event.target.value);
          break;
        case 3: // Аналитика
          setCurrency03(event.target.value);
      }
    };

    return (
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirectA(mode, handleChange, widthBlok, currency, currencies)}
      </Box>
    );
  };

  const MenuLevel3 = () => {
    return (
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={6} sx={{}}>
          <Grid container>
            <Grid item xs={4} sx={{ height: '30px', border: 0 }}>
              {/* Подразделение */}
              <Box>{StrokaMenuGlob(1, 2, currency01, currencies01)}</Box>
            </Grid>
            <Grid item xs={4} sx={{ height: '30px', border: 0 }}>
              {/* Период */}
              <Box>{StrokaMenuGlob(2, 2, currency02, currencies02)}</Box>
            </Grid>
            <Grid item xs={4} sx={{ height: '30px', border: 0 }}>
              {/* Аналитика */}
              <Box>{StrokaMenuGlob(3, 2, currency03, currencies03)}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 3.75, 'Разрез Аналитика/Подразделение', styleBl1Form08)}
        {TablStr(1, 2.75, '1-й квартал 2023', styleBl1Form08)}
        {TablStr(1, 2.75, '2-й квартал 2023', styleBl1Form08)}
        {TablStr(1, 2.75, '3-й квартал 2023', styleBl1Form08)}
      </Grid>
    );
  };

  const StrokaForm102 = () => {
    let resStr = [];
    let masStr: any = [];
    let ch = 0;
    for (let i = 0; i < 20; i++) {
      let maskStr = {
        unit: 'Подразделение ' + (i + 1),
        qv1: 0,
        qv2: 0,
        qv3: 0,
      };
      maskStr.qv1 = ch + 1 > 10 ? ch + 1 - 10 : ch + 1;
      maskStr.qv2 = ch + 2 > 10 ? ch + 2 - 10 : ch + 2;
      maskStr.qv3 = ch + 3 > 10 ? ch + 3 - 10 : ch + 3;
      masStr.push(maskStr);
      ch = ch + 3 > 10 ? ch + 3 - 10 : ch + 3;
    }

    const styleBl1Form09 = (brb: string, idx: number) => {
      const stylePKForm3 = {
        textAlign: 'center',
        padding: '10px 0px 10px 0px',
        borderBottom: brb,
        bgcolor: coler[idx - 1],
      };
      return stylePKForm3;
    };

    const styleBl1Form099 = (brb: number) => {
      const stylePKForm33 = {
        textAlign: 'left',
        padding: '10px 0px 10px 20px',
        borderBottom: brb,
      };
      return stylePKForm33;
    };

    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 3.75, masStr[i].unit, styleBl1Form099(brb))}
          {TablStr(0, 2.75, masStr[i].qv1, styleBl1Form09(brb, masStr[i].qv1))}
          {TablStr(0, 2.75, masStr[i].qv2, styleBl1Form09(brb, masStr[i].qv2))}
          {TablStr(0, 2.75, masStr[i].qv3, styleBl1Form09(brb, masStr[i].qv3))}
        </Grid>,
      );
    }
    return resStr;
  };

  return (
    <>
      {MenuLevel3()}
      <Grid container sx={styleBl1Form011(140)}>
        <Grid item xs={12}>
          {HeaderTabl()}
          <Box sx={styleBl1Form06(180)}>{StrokaForm102()}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HcmBl4Form102;

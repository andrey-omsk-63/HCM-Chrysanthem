import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

import { InputDirectA, PreparCurrencies041 } from '../../HcmServiceFunctions';
import { PreparCurrencies042 } from '../../HcmServiceFunctions';
import { PreparCurrencies043 } from '../../HcmServiceFunctions';

import { styleBl1Form011 } from '../../HcmMainStyle';

import { widthGl } from '../../HcmMain';

let currencies01: any = []; // Подразделение
let currencies02: any = []; // Период
let currencies03: any = []; // Аналитика

let flagOpen = false;

const HcmBl4Form105 = () => {
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

  return (
    <>
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
      {/* <Grid container sx={styleBl3Form01(152)}> */}
      <Grid container sx={styleBl1Form011(140)}>
        <Grid item xs={12}>
          Здесь будет аналитика по Оценкам компетенций
        </Grid>
      </Grid>
    </>
  );
};

export default HcmBl4Form105;

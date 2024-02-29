import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { TablStr, MakeDateRus } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form06 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl1Form099 } from '../../HcmMainStyle';

const HcmBl1Form101 = () => {
  //=== Piece of Redux =======================================
  let absence = useSelector(
    (state: any) => (state.selectedUserProfile ? state.selectedUserProfile.personAbsence.data : []), // отсутствия
  );
  //==========================================================
  const StrokaForm101 = () => {
    let resStr = [];
    let DateEnd = new Date();
    DateEnd.setFullYear(DateEnd.getFullYear() - 1); // минус год
    DateEnd.setDate(DateEnd.getDate() - 1); // минус день!

    for (let i = 0; i < absence.length; i++) {
      let brb: any = i === absence.length - 1 ? 0 : '1px solid #d4d4d4';
      // let quo = '✔';
      let quo = '';
      let period = MakeDateRus(absence[i].startDate) + ' - ';
      period += MakeDateRus(absence[i].endDate);

      if (DateEnd < new Date(absence[i].endDate)) {
        resStr.push(
          <Grid key={i} container sx={{ color: '#5B1080' }}>
            {TablStr(0, 1, i + 1, styleBl1Form09(brb))}
            {TablStr(0, 4, period, styleBl1Form09(brb))}
            {TablStr(0, 4, absence[i].reason, styleBl1Form099(brb))}
            {TablStr(0, 2, absence[i].status, styleBl1Form09(brb))}
            {TablStr(1, 0.3, quo, styleBl1Form09(brb))}
            {TablStr(0, 0, '', styleBl1Form09(brb))}
          </Grid>,
        );
      }
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1, '№', styleBl1Form08)}
        {TablStr(1, 4, 'Период', styleBl1Form08)}
        {TablStr(1, 4, 'Причина', styleBl1Form08)}
        {TablStr(1, 2, 'Статус', styleBl1Form08)}
        {TablStr(1, 0.3, '', styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(315)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        {absence.length > 0 ? (
          <Box sx={styleBl1Form06(350)}>{StrokaForm101()}</Box>
        ) : (
          <Box sx={{ color: '#5B1080', textAlign: 'center' }}>
            <h1>Нет информации</h1>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form101;

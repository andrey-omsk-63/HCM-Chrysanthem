import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form099 } from '../../HcmMainStyle';
import { styleBl1Form0999, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form16, styleBl1Form0777 } from '../../HcmMainStyle';

const HcmBl3Form103 = () => {
  const ClickProfile = () => {
    console.log('Действие по нажатию на Профиль');
  };

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form16} onClick={() => func()}>
        {rec}
      </Button>
    );
  };

  const StrokaForm103 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 10; j++) {
        let maskStr = {
          unit: 'ИТ отдел',
          profile: 'Сетевой инженер',
        };

        switch (j) {
          case 1:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Сетевой инженер';
            break;
          case 2:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Видеоинженер';
            break;
          case 3:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Ведущий системный администратор';
            break;
          case 4:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Инженер локальных систем';
            break;
          case 5:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Эникей';
            break;
          case 6:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Старший сетевой инженер';
            break;
          case 7:
            maskStr.unit = 'ИТ отдел';
            maskStr.profile = 'Главный инженер ИТ инфраструктуры';
            break;
          case 8:
            maskStr.unit = 'Проектный офис';
            maskStr.profile = 'Project manager';
            break;
          case 9:
            maskStr.unit = 'Проектный офис';
            maskStr.profile = 'Системный аналитик';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 3, masStr[i].unit, styleBl1Form0999(brb))}
          {TablStr(0, 9, ButtonLink(masStr[i].profile, ClickProfile), styleBl1Form099(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form0777}>
        {TablStr(1, 3, 'Подразделение', styleBl1Form08)}
        {TablStr(1, 9, 'Профиль', styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(48)}>
      <Grid item xs={12}>
        <Box sx={{ fontSize: 16, marginTop: -1.75, marginLeft: 2 }}>
          <b>Справочная информация ➤ Профили компетенций</b>
        </Box>
        {HeaderTabl()}
        <Box sx={{ overflowX: 'auto', height: window.innerHeight - 103 }}>{StrokaForm103()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl3Form103;

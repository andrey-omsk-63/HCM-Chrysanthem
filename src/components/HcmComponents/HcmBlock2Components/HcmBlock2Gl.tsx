import * as React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import HcmBl2Form100 from './HcmBl2Form100';
import HcmBl2Form101 from './HcmBl2Form101';
import HcmBl2Form102 from './HcmBl2Form102';
import HcmBl2Form103 from './HcmBl2Form103';

import { RandomNumber } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01, styleBl2Gl02 } from '../../HcmMainStyle';

let Illum = 1;
let oldIdx = -1;

const HcmBlock2Gl = (props: { idx: number }) => {
  //========================================================
  const [bl2Form100, setBl2Form001] = React.useState(false);
  const [bl2Form101, setBl2Form101] = React.useState(false);
  const [bl2Form102, setBl2Form201] = React.useState(false);
  const [bl2Form103, setBl2Form301] = React.useState(false);
  const [selectedDepartment, setSelectedDepartment] = React.useState<String>();

  //=== инициализация ======================================
  //TODO useEffects
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    switch (Illum) {
      case 1: // Сотрудники
        setBl2Form101(true);
        break;
      case 2: // Health Check
        setBl2Form201(true);
        break;
      case 3: // Задачи
        setBl2Form301(true);
    }
  }
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = 1;
    setBl2Form101(true);
    setBl2Form201(false);
    setBl2Form301(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    setBl2Form101(false);
    setBl2Form201(true);
    setBl2Form301(false);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    setBl2Form101(false);
    setBl2Form201(false);
    setBl2Form301(true);
  };

  const ClickFilter = () => {
    setBl2Form001(true);
  };

  const onCloseDialog = (department: string | undefined) => {
    department && setSelectedDepartment(department);
    setBl2Form001(false);
  };
  //=== Компоненты =========================================
  const MenuLevel3 = () => {
    return (
      <Grid container>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={4} sx={{ border: 0, height: '30px' }}>
              {/* Сотрудники */}
              <Button sx={styleMain04(1.33, Illum, 1)} onClick={() => ClickKnop1()}>
                Сотрудники
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ border: 0, height: '30px' }}>
              {/* HealtH Check */}
              <Button sx={styleMain04(1.33, Illum, 2)} onClick={() => ClickKnop2()}>
                Health Check
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ border: 0, height: '30px' }}>
              {/* Задачи */}
              <Button sx={styleMain04(1.33, Illum, 3)} onClick={() => ClickKnop3()}>
                Задачи
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  //========================================================
  /*
  TODO разобраться с формированием строки
  let rec = datestat.treeUnit[datestat.idxTreeUnit];
  let cluch = rec.lev1;
  if (rec.lev2) {
    cluch = cluch + " ➤ " + rec.lev2;
    if (rec.lev3) cluch = cluch + " ➤ " + rec.lev3;
  }
*/

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        {MenuLevel3()}
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={10.2} sx={styleBl2Gl02}>
            <em>
              <b>{selectedDepartment}</b>
            </em>
          </Grid>
          {/* Фильтр подразделений */}
          <Grid item xs={1.8} sx={{ marginLeft: '0px' }}>
            <Button sx={styleMain04(1.8, Illum, 9)} onClick={() => ClickFilter()}>
              Фильтр подразделений
            </Button>
          </Grid>
        </Grid>
        {bl2Form100 && <HcmBl2Form100 close={onCloseDialog} open={bl2Form100} />}
        {bl2Form101 && <HcmBl2Form101 selectedDepartments={selectedDepartment} />}
        {bl2Form102 && <HcmBl2Form102 />}
        {bl2Form103 && <HcmBl2Form103 idx={RandomNumber(1, 10000)} />}
      </Grid>
    </Grid>
  );
};

export default HcmBlock2Gl;

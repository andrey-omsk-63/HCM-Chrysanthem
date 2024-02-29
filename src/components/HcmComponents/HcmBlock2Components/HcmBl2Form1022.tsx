import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { statsaveCreate } from '../../../redux/actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { BadExit, InputDirectRec } from '../../HcmServiceFunctions';
import { PreparCurrenciesCommon } from '../../HcmServiceFunctions';

import {styleModalMenu, styleSetPK01 } from '../../HcmMainStyle';
import { styleModalEnd } from '../../HcmMainStyle';
import { styleBl5Form01 } from '../../HcmMainStyle';
// import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
// import { styleBl1Form09, styleBl2Form04, styleBl2Form03} from '../../HcmMainStyle';

let flagInput = true;
let HAVE = 0;

let maskForm = {
  god: '',
  qvartal: '',
};

let currencies01: any = []; // Год
let currencies02: any = []; // Квартал

let dat1 = ['2023', '2022', '2021', '2020'];
let dat2 = ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал'];

const HcmBl2Form1022 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let datestat = useSelector((state: any) => {
  //   const { statsaveReducer } = state;
  //   return statsaveReducer.datestat;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [currency01, setCurrency01] = React.useState('0');
  const [currency02, setCurrency02] = React.useState('0');
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    let sYear = new Date().getFullYear();
    dat1 = [];
    for (let i = 1; i < 11; i++) dat1.push((sYear - i).toString());
    maskForm.god = dat1[0];
    maskForm.qvartal = dat2[0];
    currencies01 = PreparCurrenciesCommon(dat1); // Год
    currencies02 = PreparCurrenciesCommon(dat2); // Квартал
    flagInput = false;
  }
  //========================================================
  const handleClose = (mode: boolean) => {
    flagInput = true;
    setOpen(false);
    props.close(mode,maskForm);
  };

  const CloseBad = () => {
    maskForm.god = ''; // выход без сохранения
    maskForm.qvartal = '';
    handleClose(false);
  };

  const handleCloseBad = () => {
    HAVE && setBadExit(true);
    !HAVE && CloseBad(); // выход без сохранения
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === 'escapeKeyDown') handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && CloseBad(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SavePeriod = () => {
    handleClose(true);
  };
  //========================================================
  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1:
          setCurrency01(event.target.value);
          maskForm.god = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2:
          setCurrency02(event.target.value);
          maskForm.qvartal = dat2[Number(event.target.value)];
          HAVE++;
      }
    };

    return (
      <Box sx={{ marginTop: '-5px' }}>
        {InputDirectRec(handleChange, 155, currency, currencies)}
      </Box>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleSetPK01}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Выберите период просмотра:</b>
          </Box>
          <Grid container sx={{ textAlign: 'left', marginTop: '20px', color: '#5B1080' }}>
            <Grid item xs={6} sx={{ border: 0 }}>
              <b>Год</b>
            </Grid>
            <Grid item xs={6} sx={{ border: 0 }}>
              {StrokaMenuGlob(1, currency01, currencies01)}
            </Grid>
            <Grid item xs={6} sx={{ border: 0, marginTop: '10px' }}>
              <b>Квартал</b>
            </Grid>
            <Grid item xs={6} sx={{ border: 0, marginTop: '10px' }}>
              {StrokaMenuGlob(2, currency02, currencies02)}
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '15px', color: '#5B1080' }}>
            <Button sx={styleModalMenu} onClick={() => handleCloseBad()}>
              Отмена
            </Button>
            &nbsp;
            <Button sx={styleModalMenu} onClick={() => SavePeriod()}>
              Применить
            </Button>
          </Box>
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl2Form1022;

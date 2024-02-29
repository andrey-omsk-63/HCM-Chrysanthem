import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { statsaveCreate } from '../../../redux/actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import HcmBl2Form1023 from './HcmBl2Form1023';

import { BadExit, TablStr } from '../../HcmServiceFunctions';

import { styleBl5Form00, styleModalEndBig } from '../../HcmMainStyle';
import { styleBl5Form01, styleBl2Form03 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl2Form04 } from '../../HcmMainStyle';
import { styleBl2Form07 } from '../../HcmMainStyle';

let flagInput = true;
let HAVE = 0;
let IDX = -1;
let FORM: any = null;

const HcmBl2Form1021 = (props: { form: any; close: Function }) => {
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
  const [viewing, setViewing] = React.useState(false);
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;

    flagInput = false;
  }
  //========================================================
  const handleClose = () => {
    flagInput = true;
    setOpen(false);
    props.close(false);
  };

  const handleCloseBad = () => {
    HAVE && setBadExit(true);
    !HAVE && handleClose();
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === 'escapeKeyDown') handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && handleClose(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  // const SaveForm = (mode: number) => {
  //   if (mode) {
  //     datestat.idxTreeUnit = IDX;
  //     dispatch(statsaveCreate(datestat));
  //     handleClose();
  //   } else handleCloseBad();
  // };

  // const ClickTree = (idx: number) => {
  //   // datestat.idxTreeUnit = idx;
  //   // dispatch(statsaveCreate(datestat));
  //   IDX = idx;
  //   HAVE++;
  //   setTrigger(!trigger);
  // };
  const ClicStr = (idx: number, form: any) => {
    IDX = idx;
    FORM = form;
    setViewing(true);
  };
  //========================================================
  const StrokaForm1021 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = {
          unit: 'ИТ отдел',
          period: '1 квартал 2023',
          why: 'Иван',
          status: '1',
          connect1: '5',
          connect2: '6',
          know: '4',
          develop: '4',
          tasks: '8',
          pay: '7',
          load: '9',
          link: 'https://e.mail.ru/newsletters/0:17066793751836945566',
          comment:
            'Таганский суд Москвы в пятницу приступит к рассмотрению по существу иска к компании МТС с требованием компенсации миллиарда долларов за «голую вечеринку» в клубе «Мутабор».',
        };

        switch (j) {
          case 1:
            maskStr.unit = 'ИТ отдел';
            maskStr.period = props.form.qvartal + ' ' + props.form.god;
            maskStr.why = 'Орг.изменения';
            maskStr.status = '1.0';
            maskStr.connect1 = '6.9';
            maskStr.connect2 = '5.0';
            maskStr.know = '3.0';
            maskStr.develop = '4.0';
            maskStr.tasks = '8.0';
            maskStr.pay = '7.7';
            maskStr.load = '9.0';
            break;
          case 2:
            maskStr.unit = 'ИТ отдел';
            maskStr.period = props.form.qvartal + ' ' + props.form.god;
            maskStr.why = 'Смена руководителя';
            maskStr.status = '7.0';
            maskStr.connect1 = '6.0';
            maskStr.connect2 = '4.0';
            maskStr.know = '9.0';
            maskStr.develop = '2.0';
            maskStr.tasks = '5.0';
            maskStr.pay = '4.0';
            maskStr.load = '3.0';
            break;
          case 3:
            maskStr.unit = 'ИТ отдел';
            maskStr.period = props.form.qvartal + ' ' + props.form.god;
            maskStr.why = 'Выгорание команды';
            maskStr.status = '6.0';
            maskStr.connect1 = '3.0';
            maskStr.connect2 = '7.0';
            maskStr.know = '6.0';
            maskStr.develop = '7.0';
            maskStr.tasks = '4.0';
            maskStr.pay = '8.0';
            maskStr.load = '2.0';
            break;
          case 4:
            maskStr.unit = 'ИТ отдел';
            maskStr.period = props.form.qvartal + ' ' + props.form.god;
            maskStr.why = 'Просто так';
            maskStr.status = '4.0';
            maskStr.connect1 = '10';
            maskStr.connect2 = '2.0';
            maskStr.know = '8.0';
            maskStr.develop = '10.0';
            maskStr.tasks = '9.0';
            maskStr.pay = '6.0';
            maskStr.load = '7.0';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid
          key={i}
          container
          sx={{ color: '#5B1080', cursor: 'pointer' }}
          onClick={() => ClicStr(i, masStr[i])}>
          {TablStr(0, 1.4, masStr[i].unit, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].period, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].why, styleBl1Form09(brb))}
          {TablStr(0, 1.2, masStr[i].status, styleBl1Form09(brb))}
          {TablStr(0, 1.25, masStr[i].connect1, styleBl1Form09(brb))}
          {TablStr(0, 1.25, masStr[i].connect2, styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].know, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].develop, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].tasks, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].pay, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].load, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1.4, 'Подразделение', styleBl1Form08)}
        {TablStr(1, 0.8, 'За период', styleBl1Form08)}
        {TablStr(1, 1, 'Причина проведения', styleBl1Form08)}
        {TablStr(1, 1.2, 'Общее состояние команды', styleBl1Form08)}
        {TablStr(1, 1.25, 'Взаимодействие в команде', styleBl1Form08)}
        {TablStr(1, 1.25, 'Взаимодействие с руководителем', styleBl1Form08)}
        {TablStr(1, 1.5, 'Информированность', styleBl1Form08)}
        {TablStr(1, 0.8, 'Развитие', styleBl1Form08)}
        {TablStr(1, 0.8, 'Текущие задачи', styleBl1Form08)}
        {TablStr(1, 1, 'Заработная плата, бонусы', styleBl1Form08)}
        {TablStr(1, 1, 'Нагрузка, режим работы', styleBl1Form08)}
      </Grid>
    );
  };

  let heightBlock = window.innerHeight - 50;
  let widthBlock = window.innerWidth - 50;

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(widthBlock, heightBlock)}>
          <Button sx={styleModalEndBig} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>
              Все НС за {props.form.qvartal} {props.form.god}
            </b>
          </Box>
          <Box sx={styleBl2Form03(114)}>
            {HeaderTabl()}
            <Box sx={styleBl2Form04(168)}>{StrokaForm1021()}</Box>
          </Box>
          <Box sx={styleBl2Form07}>
            <em>
              <b>Нажмите на запись для более детального просмотра</b>
            </em>
          </Box>
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
      {viewing && <HcmBl2Form1023 idx={IDX} form={FORM} close={setViewing} />}
    </>
  );
};

export default HcmBl2Form1021;

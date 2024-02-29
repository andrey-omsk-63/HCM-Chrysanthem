import * as React from 'react';
import { useSelector } from 'react-redux';
//import { useDispatch} from 'react-redux';
//import imageCompression from 'browser-image-compression';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

//import axios from 'axios';

import HcmBl1Form101 from './HcmBl1Form101';
import HcmBl1Form102 from './HcmBl1Form102';
import HcmBl1Form103 from './HcmBl1Form103';
import HcmBl1Form104 from './HcmBl1Form104';
import HcmBl1Form106 from './HcmBl1Form106';
import HcmBl1Form105 from './HcmBl1Form105';
import HcmBl1Form107 from './HcmBl1Form107';
import HcmBl1Form108 from './HcmBl1Form108';
import HcmBlock1ViewImg from './HcmBlock1ViewImg';

import { RandomNumber, MakeDateRus } from '../../HcmServiceFunctions';
//import { MakeNewBlob } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01, styleBl1Form01 } from '../../HcmMainStyle';
import { styleBl1Form03, styleBl1Form04 } from '../../HcmMainStyle';
import { styleBl1Form05, styleBl1Form15 } from '../../HcmMainStyle';

//let PICT: any = null;
//let PICTGL: any = null;
let Illum = 1;
let oldNik = '######';
let oldIdx = -1;

const HcmBlock1Gl = (props: { person: any; idx: number }) => {
  //=== Piece of Redux =======================================
  let permissions = useSelector((state: any) => state.loggedInUserPermissions); // роли и доступы
  let loggedInUser = useSelector((state: any) => state.loggedInUser); // сам пользователь
  //===========================================================
  //const [Illum, setIllum] = React.useState(1);
  const [bl1Form101, setBl1Form101] = React.useState(false);
  const [bl1Form102, setBl1Form201] = React.useState(false);
  const [bl1Form103, setBl1Form301] = React.useState(false);
  const [bl1Form104, setBl1Form401] = React.useState(false);
  const [bl1Form105, setBl1Form501] = React.useState(false);
  const [bl1Form106, setBl1Form601] = React.useState(false);
  const [bl1Form107, setBl1Form701] = React.useState(false);
  const [bl1Form108, setBl1Form801] = React.useState(false);
  const [openImg, setOpenImg] = React.useState(false);

  const [openLoader, setOpenLoader] = React.useState(true);

  const person = props.person;
  const maskForm = person
    ? {
        name: person.name,
        nik: person.nickName,
        birthDate: MakeDateRus(person.birthDate).slice(0, 5),
        beginDate: MakeDateRus(person.startDate),
        photo: person.photo,

        post: person.jobPosition,
        department: person.department.name,
        chief: person.manager,
        location: [
          person.location.country + ', ',
          person.location.city + ' UTC',
          person.location.timeZone <= 0 ? '+' : '-',
          Math.abs(person.location.timeZone),
          ' (MSK' + (person.location.timeZone - 3 <= 0 ? '+' : '-'),
          Math.abs(person.location.timeZone - 3) + ')',
        ].join(''),
        status: person.state === 'Работа' ? '🛠️ ' + person.state : person.state,
      }
    : {};

  if (person.nickName !== oldNik || props.idx !== oldIdx) {
    oldNik = person.nickName;
    oldIdx = props.idx;
    switch (Illum) {
      case 1: {
        // Отсутствия
        setBl1Form101(true);
        break;
      }
      case 2: {
        // Оборудование
        setBl1Form201(true);
        break;
      }
      case 3: {
        // В структуре компании
        setBl1Form301(true);
        break;
      }
      case 4: {
        // ИПР
        setBl1Form401(true);
        break;
      }
      case 5: {
        // Оценка компетенций
        setBl1Form501(true);
        break;
      }
      case 6: {
        // Оценка компетенций
        setBl1Form601(true);
        break;
      }
      case 7: {
        // Оценка компетенций
        setBl1Form701(true);
        break;
      }
      case 8: {
        // Оценка компетенций
        setBl1Form801(true);
      }
    }
  }
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = 1;
    setBl1Form101(true);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    bl1Form101 && setBl1Form101(false);
    setBl1Form201(true);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    setBl1Form301(true);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    setBl1Form401(true);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop5 = () => {
    Illum = 5;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    setBl1Form501(true);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop6 = () => {
    Illum = 6;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    setBl1Form601(true);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop7 = () => {
    Illum = 7;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    setBl1Form701(true);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop8 = () => {
    Illum = 8;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    setBl1Form801(true);
  };

  const ClickImg = () => {
    setOpenImg(true);
  };

  const ClickNik1 = () => {
    console.log('Действие по нажатию на ник1');
  };

  const ClickNik2 = () => {
    console.log('Действие по нажатию на ник2');
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

  const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
    return (
      <Grid container sx={{ marginTop: 1, color: '#5B1080' }}>
        <Grid item xs={xss} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          {recLeft}
        </Grid>
        {typeof recRight === 'object' ? (
          <Grid item xs>
            {recRight}
          </Grid>
        ) : (
          <Grid item xs sx={{ fontSize: 14, marginLeft: '6px', border: 0 }}>
            <b>{recRight}</b>
          </Grid>
        )}
      </Grid>
    );
  };

  //============ Dinama =====================================================
  const handleClose = () => {
    setOpenLoader(false);
  };

  const styleBackdropBaza = {
    color: '#fff',
    marginLeft: '12px',
    width: '180px',
    marginTop: '63px',
    marginBottom: (100 - 25000 / window.innerHeight).toString() + 'vh',
    zIndex: (theme: any) => theme.zIndex.drawer + 1,
  };

  const Dinama = () => {
    return (
      <Backdrop sx={styleBackdropBaza} open={openLoader} onClick={handleClose}>
        <CircularProgress color="inherit" size={69} />
      </Backdrop>
    );
  };

  //if (openLoader) Output();
  //=========================================================================

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form15} onClick={() => func()}>
        <b>{rec}</b>
      </Button>
    );
  };

  const Title = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form03}>
          <em>
            Личная карточка <b>{maskForm.nik}</b>
          </em>
        </Grid>
      </Grid>
    );
  };

  const Portrait = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form04}>
          <Box sx={styleBl1Form05} onClick={() => ClickImg()}>
            {!maskForm.photo && <Dinama />}
            {maskForm.photo && (
              <>
                <img
                  src={'data:image/(png|jpg);base64,' + maskForm.photo}
                  height={180}
                  alt="PICT"
                />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    );
  };

  const CardContent = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form01}>
          <Grid container>
            <Grid item xs={2} sx={{ height: '180px' }}>
              {Title()}
              {Portrait()}
            </Grid>
            <Grid item xs={10} sx={{ fontSize: 14.5 }}>
              <Grid container>
                <Grid item xs={4} sx={{ border: 0, height: '56px', fontSize: 14.5 }}>
                  {StrTablProp(3, 'Имя:', maskForm.name)}
                  {StrTablProp(3, 'Ник:', ButtonLink(maskForm.nik, ClickNik1))}
                </Grid>
                <Grid item xs={8} sx={{ border: 0, height: '56px' }}>
                  {StrTablProp(0.1, '', maskForm.location)}
                  {StrTablProp(0.1, '', maskForm.status)}
                </Grid>
              </Grid>
              <Grid container sx={{}}>
                <Grid item xs={12} sx={{ border: 0, height: '150px', fontSize: 14.5 }}>
                  {StrTablProp(2, 'Дата рождения:', maskForm.birthDate)}
                  {StrTablProp(2, 'В компании с:', maskForm.beginDate)}
                  {StrTablProp(2, 'Должность:', maskForm.post)}
                  {StrTablProp(2, 'Подразделение:', maskForm.department)}
                  {StrTablProp(2, 'Руководитель(Ник):', ButtonLink(maskForm.chief, ClickNik2))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const shouldShowDetails =
    props.person &&
    /*хак для демо показа*/ (permissions.permissions.length > 0 ||
      loggedInUser.login === props.person.nickName);

  // console.log(
  //   '!!!был косяк в permissions:',
  //   loggedInUser.login,
  //   props.person.nickName,
  //   permissions,
  // );

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        {CardContent()}
        {shouldShowDetails && (
          <Grid container sx={{ marginTop: 2, border: 0 }}>
            <Grid item xs={12}>
              <Grid container>
                {MenuBatton(1.5, 1.5, 1, 'Отсутствия', ClickKnop1)}
                {MenuBatton(1.5, 1.5, 2, 'Оборудование', ClickKnop2)}
                {MenuBatton(1.75, 1.75, 3, 'В структуре компании', ClickKnop3)}
                {MenuBatton(1.25, 1.25, 4, 'ИПР', ClickKnop4)}
                {MenuBatton(1.75, 1.75, 5, 'Оценка компетенций', ClickKnop5)}
                {MenuBatton(1.5, 1.5, 6, 'Адаптация', ClickKnop6)}
                {MenuBatton(1.25, 1.25, 7, 'Цели', ClickKnop7)}
                {MenuBatton(1.5, 1.5, 8, 'Задачи', ClickKnop8)}
              </Grid>
            </Grid>
          </Grid>
        )}
        {bl1Form101 && shouldShowDetails && <HcmBl1Form101 />}
        {bl1Form102 && <HcmBl1Form102 />}
        {bl1Form103 && <HcmBl1Form103 />}
        {bl1Form104 && <HcmBl1Form104 />}
        {bl1Form105 && <HcmBl1Form105 />}
        {bl1Form106 && <HcmBl1Form106 />}
        {bl1Form107 && <HcmBl1Form107 />}
        {bl1Form108 && <HcmBl1Form108 idx={RandomNumber(1, 10000)} />}
        {openImg && (
          <HcmBlock1ViewImg
            close={setOpenImg}
            name={maskForm.name}
            nik={props.person.nickName}
            pict={'data:image/(png|jpg);base64,' + maskForm.photo}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default HcmBlock1Gl;

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPersons } from '../actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TablStr } from './HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form09 } from './HcmMainStyle';
import { styleBl1Form088 } from './HcmMainStyle';
import { styleBl1Form16, styleBl1Form07 } from './HcmMainStyle';
import { styleBl5Form01 } from './HcmMainStyle';

const HcmBl0Form101 = (props: { onUserSelect: Function }) => {
  //=== Piece of Redux =======================================
  const dispatch = useDispatch();
  const loginUser = useSelector((state: any) => state.loggedInUser); // сам пользователь

  React.useEffect(() => {
    dispatch(fetchAllPersons());
  }, [dispatch]);

  let PERSON = useSelector((state: any) => state.allPersons);
  //console.log('PERSON:', PERSON);
  //==========================================================
  const ClickProfile = (username: string) => {
    props.onUserSelect(username);
  };

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form16} onClick={() => func(rec)}>
        {rec}
      </Button>
    );
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 3, 'Имя', styleBl1Form088)}
        {TablStr(1, 3, 'Ник', styleBl1Form088)}
        {TablStr(1, 3, 'Подразделение', styleBl1Form088)}
        {TablStr(1, 3, 'Должность', styleBl1Form088)}
      </Grid>
    );
  };

  const StrokaForm101 = () => {
    let resStr = [];
    for (let i = 0; i < PERSON.length; i++) {
      let brb: any = i === PERSON.length - 1 ? 0 : '1px solid #d4d4d4';
      let coler = loginUser.login === PERSON[i].nickName ? '#F68A1E' : '#5B1080';
      let font = loginUser.login === PERSON[i].nickName ? 700 : 400;

      resStr.push(
        <Grid key={i} container sx={{ color: coler, fontWeight: font }}>
          {TablStr(0, 3, PERSON[i].name, styleBl1Form09(brb))}
          {TablStr(0, 3, ButtonLink(PERSON[i].nickName, ClickProfile), styleBl1Form09(brb))}
          {TablStr(0, 3, PERSON[i].department.name, styleBl1Form09(brb))}
          {TablStr(0, 3, PERSON[i].jobPosition, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  return (
    <Grid container sx={styleBl3Form01(48)}>
      <Grid item xs={12}>
        <Box sx={styleBl5Form01}>
          <b>Список сотрудников</b>
        </Box>
        {HeaderTabl()}
        {PERSON && (
          <Box sx={{ overflowX: 'auto', height: window.innerHeight - 121 }}>{StrokaForm101()}</Box>
        )}
      </Grid>
    </Grid>
  );
};

export default HcmBl0Form101;

// Зачем обрезал подсветку записи самого пользователя?

// <Grid container sx={styleBl3Form01(48)}>
//   <Grid item xs={12}>
//     <Box sx={styleBl5Form01}>
//       <b>Список сотрудников</b>
//     </Box>
//     {HeaderTabl()}
//     <Box sx={{ overflowX: "auto", height: window.innerHeight - 121 }}>
//       {allPersons &&
//         allPersons.map((person: any, idx: number, arr: Array<any>) => {
//           const brb: string =
//             idx === arr.length - 1 ? "" : "1px solid #d4d4d4";
//           return (
//             <Grid key={idx} container>
//               {TablStr(0, 3, person.name, styleBl1Form09(brb))}
//               {TablStr(
//                 0,
//                 3,
//                 ButtonLink(person.nickName, ClickProfile),
//                 styleBl1Form09(brb)
//               )}
//               {TablStr(0, 3, person.department.name, styleBl1Form09(brb))}
//               {TablStr(0, 3, person.jobPosition, styleBl1Form09(brb))}
//             </Grid>
//           );
//         })}
//     </Box>
//   </Grid>
// </Grid>

import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import axios from "axios";

import { baseURL1 } from "../../HcmMainConst";

import HcmBl6Form101 from "./HcmBl6Form101";
import HcmBl6Form102 from "./HcmBl6Form102";

import { TablStr } from "../../HcmServiceFunctions";

import { styleMain04, styleBl2Gl01, styleBl6Form03 } from "../../HcmMainStyle";
import { styleBl1Form0777, styleBl1Form08 } from "../../HcmMainStyle";
import { styleBl6Form01, styleBl1Form0999 } from "../../HcmMainStyle";
import { styleBl2Form08 } from "../../HcmMainStyle";

let Illum = -1;
let oldIdx = -1;
let spisRoles: any = null;

let IDX = -1;
let FORM: any = null;

const HcmBlock6Gl = (props: { idx: number }) => {
  const [bl6Form101, setBl6Form101] = React.useState(false);
  const [bl6Form102, setBl6Form201] = React.useState(false);
  const [getUsersRoles, setGetUsersRoles] = React.useState<any>(null);
  const [viewing, setViewing] = React.useState(false);
  //=== инициализация ======================================
  if (oldIdx !== props.idx) {
    setBl6Form101(false);
    oldIdx = props.idx;
  }
  //===  Слушатель с сервера ===============================
  React.useEffect(() => {
    // Получение списка сотрудников и их ролей
    if (!spisRoles) {
      axios
        .get(baseURL1 + "/usersRoles")
        .then((response) => {
          console.log(
            "Списoк сотрудников и их ролей:",
            response.data.value.data
          );
          spisRoles = response.data.value.data;
          setGetUsersRoles(response.data.value.data);
        })
        .catch((error: any) => {
          console.error("Список сотрудников и их ролей:", error);
        });
    }
  }, [setGetUsersRoles]);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    switch (Illum) {
      case 1: // Добавить
        setBl6Form101(true);
        break;
      case 2: // Найти
        setBl6Form201(true);
    }
  }
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = 1;
    setBl6Form101(true);
    bl6Form102 && setBl6Form201(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    bl6Form101 && setBl6Form101(false);
    setBl6Form201(true);
  };
  //=== Компоненты =========================================
  const MenuBatton = (
    xss: number,
    wt: number,
    ill: number,
    name: string,
    func: Function
  ) => {
    return (
      <Grid item xs={xss} sx={{}}>
        <Button sx={styleMain04(wt, Illum, ill)} onClick={() => func()}>
          {name}
        </Button>
      </Grid>
    );
  };

  const ClicStr = (idx: number) => {
    IDX = idx;
    FORM = spisRoles[idx];
    setViewing(true);
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form0777}>
        {TablStr(1, 2, "ID", styleBl1Form08)}
        {TablStr(1, 2, "Ник", styleBl1Form08)}
        {TablStr(1, 8, "Роль", styleBl1Form08)}
      </Grid>
    );
  };

  const StrokaForm6Gl = () => {
    let resStr = [];

    for (let i = 0; i < spisRoles.length; i++) {
      let brb: any = i === spisRoles.length - 1 ? 0 : "1px solid #d4d4d4";
      resStr.push(
        <Grid key={i} container sx={styleBl2Form08} onClick={() => ClicStr(i)}>
          {TablStr(0, 2, spisRoles[i].id, styleBl1Form0999(brb))}
          {TablStr(0, 2, spisRoles[i].userLogin, styleBl1Form0999(brb))}
          {TablStr(0, 8, spisRoles[i]._UserRole, styleBl1Form0999(brb))}
        </Grid>
      );
    }
    return resStr;
  };

  const SetBl6Form101 = (mode: boolean, mask: any) => {
    setBl6Form101(false);
    // if (mode) {
    //   formPeriod = mask;
    //   setBl2Form2011(true);
    // }
  };

  return (
    <>
      <Grid container sx={styleBl2Gl01}>
        <Grid item xs={12}>
          <Grid container sx={styleBl6Form03}>
            {MenuBatton(1, 1.0, 1, "Добавить", ClickKnop1)}
            {MenuBatton(1, 1.0, 2, "Найти", ClickKnop2)}
            <Grid item xs={8} sx={{ color: "#F68A1E", textAlign: "center" }}>
              <b>
                <em>Для изменения роли пользователя нажмите на запись</em>
              </b>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={styleBl6Form01}>
            {HeaderTabl()}
            {(spisRoles || getUsersRoles) && (
              <Box sx={{ overflowX: "auto", height: window.innerHeight - 130 }}>
                {StrokaForm6Gl()}
              </Box>
            )}
          </Grid>
        </Grid>
        {bl6Form101 && <HcmBl6Form101 close={SetBl6Form101} />}
        {viewing && <HcmBl6Form102 idx={IDX} form={FORM} close={setViewing} />}
      </Grid>
    </>
  );
};

export default HcmBlock6Gl;

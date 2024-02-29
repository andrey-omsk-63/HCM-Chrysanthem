import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { TablStr } from "../../HcmServiceFunctions";

import { styleBl3Form01, styleBl1Form06 } from "../../HcmMainStyle";
import { styleBl1Form07, styleBl1Form08 } from "../../HcmMainStyle";
import { styleBl1Form09, styleBl1Form099 } from "../../HcmMainStyle";
import { styleBl1Form16 } from "../../HcmMainStyle";

const HcmBl1Form106 = () => {
  //=== Функции - обработчики ==============================
  const ClickNik1 = () => {
    console.log("Действие по нажатию на ник1");
  };

  const ClickNik2 = () => {
    console.log("Действие по нажатию на ник2");
  };

  // const ClickNik3 = () => {
  //   console.log("Действие по нажатию на ник3");
  // };
  //========================================================
  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form16} onClick={() => func()}>
        {rec}
      </Button>
    );
  };
  const StrokaForm106 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 1; j < 3; j++) {
        let maskStr = {
          dBegin: "18.09.2023",
          dEnd: "14.12.2023",
          ment: "Бугор",
          pp: "Чёпик",
          link: "",
          dCompl: "30.11.2023",
          who: "Оказался круче, чем ожидали",
        };

        switch (j) {
          case 1:
            maskStr.dBegin = "18.09.2023";
            maskStr.dEnd = "14.12.2023";
            maskStr.ment = "Бугор";
            maskStr.pp = "Чёпик";
            maskStr.link = "";
            maskStr.dCompl = "30.11.2023";
            maskStr.who = "Оказался круче, чем ожидали";
            masStr.push(maskStr);
            break;
          case 2:
          //   maskStr.nomenenkl = "Тумба Икеа Эрик";
          //   maskStr.state = "Сломана";
          //   maskStr.sum = "10 000 руб";
        }
        //masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : "1px solid #d4d4d4";
      resStr.push(
        <Grid key={i} container sx={{ color: "#5B1080" }}>
          {TablStr(0, 1.5, masStr[i].dBegin, styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].dEnd, styleBl1Form09(brb))}
          {TablStr(0, 1.5, ButtonLink(masStr[i].ment, ClickNik1), styleBl1Form09(brb))}
          {TablStr(0, 1.5, ButtonLink(masStr[i].pp, ClickNik2), styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].link, styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].dCompl, styleBl1Form09(brb))}
          {TablStr(0, 3.0, masStr[i].who, styleBl1Form099(brb))}
        </Grid>
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1.5, "Дата начала", styleBl1Form08)}
        {TablStr(1, 1.5, "Дата окончания", styleBl1Form08)}
        {TablStr(1, 1.5, "Ментор", styleBl1Form08)}
        {TablStr(1, 1.5, "РР", styleBl1Form08)}
        {TablStr(1, 1.5, "Ссылка", styleBl1Form08)}
        {TablStr(1, 1.5, "Дата завершения", styleBl1Form08)}
        {TablStr(1, 3.0, "Причина", styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(340)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        <Box sx={styleBl1Form06(375)}>{StrokaForm106()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form106;

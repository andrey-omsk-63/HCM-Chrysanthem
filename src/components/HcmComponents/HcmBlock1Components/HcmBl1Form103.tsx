import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import HcmBl2Form100 from "../HcmBlock2Components/HcmBl2Form100";

import { TablStr } from "../../HcmServiceFunctions";

import { styleBl1Form09, styleBl3Form01 } from "../../HcmMainStyle";
import { styleBl1Form07, styleBl1Form088 } from "../../HcmMainStyle";
//import { styleBl1Form099, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form12, styleBl1Form14 } from "../../HcmMainStyle";

let state1 = "▼ История перемещений";
let state2 = "⯈ История перемещений";

const HcmBl1Form103 = () => {
  const [history, setHistory] = React.useState(true);
  const [struct, setStruct] = React.useState(false);

  const ClickHist = () => {
    setHistory(!history);
  };

  const ClickStruct = () => {
    setStruct(true);
  };

  const StrokaForm101 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 3; j++) {
        let maskStr = {
          dBegin: "18.07.2018",
          dEnd: "30.06.2021",
          bu: "рппрпр ",
          state: "ИТ отдел",
          who: "Смена деятельности сотрудника",
        };

        switch (j) {
          case 1:
            maskStr.dBegin = "18.07.2018";
            maskStr.dEnd = "30.06.2021";
            maskStr.bu = "рпрпрп";
            maskStr.state = "ИТ отдел";
            maskStr.who = "Смена деятельности сотрудника";
            break;
          case 2:
            maskStr.dBegin = "01.07.2021";
            maskStr.dEnd = "01.10.2023";
            maskStr.bu = "рпрпр";
            maskStr.state = "Проектный офис";
            maskStr.who = "Реорганизация";
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : "1px solid #d4d4d4";
      resStr.push(
        <Grid key={i} container sx={{ color: "#5B1080" }}>
          {TablStr(0, 2, masStr[i].dBegin, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].dEnd, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].bu, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].state, styleBl1Form09(brb))}
          {TablStr(0, 4, masStr[i].who, styleBl1Form09(brb))}
        </Grid>
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 2, "Дата начала работы", styleBl1Form088)}
        {TablStr(1, 2, "Дата окнчания работы", styleBl1Form088)}
        {TablStr(1, 2, "Бизнес-Юнит", styleBl1Form088)}
        {TablStr(1, 2, "Подразделение", styleBl1Form088)}
        {TablStr(1, 4, "Причина перевода", styleBl1Form088)}
      </Grid>
    );
  };

  let heightBl0 = window.innerHeight - 340;
  let heightBl1 = heightBl0 * 0.6;
  let heightBl2 = heightBl0 * 0.4;
  let state = !history ? state2 : state1;

  return (
    <Grid container sx={styleBl3Form01(340)}>
      <Grid item xs={12} sx={{ height: heightBl1 }}>
        <Grid container>
          <Grid item xs={9.8}></Grid>
          <Grid item xs={2.2} sx={{ height: "30px", textAlign: "right" }}>
            <Button sx={styleBl1Form14} onClick={() => ClickStruct()}>
              Посмотреть структуру компании
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ height: heightBl2, border: 0 }}>
        <Button sx={styleBl1Form12} onClick={() => ClickHist()}>
          {state}
        </Button>
        {history && (
          <Box>
            {HeaderTabl()}
            <Box sx={{ overflowX: "auto", height: heightBl2 - 52 }}>
              {StrokaForm101()}
            </Box>
          </Box>
        )}
      </Grid>
      {/*TODO fix this!!!!*/struct && <HcmBl2Form100 close={setStruct} open={struct}/>}
    </Grid>
  );
};

export default HcmBl1Form103;

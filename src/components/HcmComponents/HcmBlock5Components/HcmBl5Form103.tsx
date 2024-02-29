import * as React from "react";
//import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import "dayjs/locale/ru";
import dayjs, { Dayjs } from "dayjs";

import { FooterContent, BadExit, StrTablProp } from "../../HcmServiceFunctions";
import { InputStrField, InputStrFieldMult } from "../../HcmServiceFunctions";
import {
  MakeDate,
  InputerDate,
  InputDirectRec,
} from "../../HcmServiceFunctions";
import { PreparCurrenciesCommon } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";
import { styleBl5Form03, styleBl5Form06 } from "../../HcmMainStyle";
import { styleBl5Form04, styleBl5Form05 } from "../../HcmMainStyle";

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const date = new Date();
let formSett = MakeDate(date);
let eventInp1 = dayjs(formSett);

let massGoodDate: Array<string> = [];

let maskForm = {
  item: "Стадион",
  base: "Так себе основание",
  tema: "",
  player: "Фантомас",
  link: "",
  comment: "",
};
let currencies01: any = []; // Сотрудники
let currencies02: any = []; // Менторы
let currencies03: any = []; // Авторы

let dat1 = ["Стадион", "Коровник", "Загородная база отдыха"];
let dat2 = [
  "Очень важное основание",
  "Так себе основание",
  "Необходимая необходимость",
  "Фигня какая-та",
];
let dat3 = ["Фантомас", "Лишенец", "Бугор", "Ляля"];

const HcmBl5Form103 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  //const [valueName, setValueName] = React.useState(maskForm.name);
  const [valueTema, setValueTema] = React.useState(maskForm.tema);
  //const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);
  const [valueDate1, setValueDate1] = React.useState<Dayjs | null>(
    dayjs(formSett)
  );
  const [currency01, setCurrency01] = React.useState("0");
  const [currency02, setCurrency02] = React.useState("0");
  const [currency03, setCurrency03] = React.useState("0");
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    setValueDate1(dayjs(formSett));
    currencies01 = PreparCurrenciesCommon(dat1); // Сотрудники
    currencies02 = PreparCurrenciesCommon(dat2); // Менторы
    currencies03 = PreparCurrenciesCommon(dat3); // Авторы
    // massForm = JSON.parse(JSON.stringify(massplan.setup));
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
    if (reason === "escapeKeyDown") handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && handleClose(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SaveForm = (mode: number) => {
    if (mode) {
      handleClose();
    } else handleCloseBad();
  };

  const hdlChangeTema = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueTema(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.tema = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueComment(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.comment = event.target.value.trimStart();
      HAVE++;
    }
  };

  //========================================================
  const InputDate1 = () => {
    const handleChangeDP = (event: any) => {
      if (event.toString() === "Invalid Date") {
        setValueDate1(dayjs(eventInp1));
      } else {
        setValueDate1((eventInp1 = event));
        HAVE++;
      }
    };
    return <>{InputerDate(valueDate1, handleChangeDP, massGoodDate)}</>;
  };

  const ContentDate1 = () => {
    return (
      <Grid item container sx={styleBl5Form04}>
        <Grid item xs sx={styleBl5Form05}>
          <Box sx={styleBl5Form06}>{InputDate1()}</Box>
        </Grid>
      </Grid>
    );
  };

  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Подразделение
          setCurrency01(event.target.value);
          maskForm.item = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2: // Оснвание
          setCurrency02(event.target.value);
          maskForm.base = dat2[Number(event.target.value)];
          HAVE++;
          break;
        case 3: // Исполнитель (Ник)
          setCurrency03(event.target.value);
          maskForm.player = dat3[Number(event.target.value)];
          HAVE++;
      }
    };

    return (
      <Box sx={{ marginTop: "-5px" }}>
        {InputDirectRec(handleChange, 232, currency, currencies)}
      </Box>
    );
  };

  const TableContent = () => {
    return (
      <>
        {StrTablProp(4, "Объект*", StrokaMenuGlob(1, currency01, currencies01))}
        {StrTablProp(
          4,
          "Основание*",
          StrokaMenuGlob(2, currency02, currencies02)
        )}
        {StrTablProp(4, "Тема*", InputStrField(212, hdlChangeTema, valueTema))}
        {StrTablProp(4, "Дата выполнения*", ContentDate1())}
        {StrTablProp(
          4,
          "Исполнитель (Ник)*",
          StrokaMenuGlob(3, currency03, currencies03)
        )}
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={4} sx={{ height: 100 }}>
            Описание
          </Grid>
          <Grid item xs sx={styleBl5Form03}>
            {InputStrFieldMult(386, hdlChangeComment, valueComment)}
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(650, 416)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Создать задачу</b>
          </Box>
          <Box sx={styleBl5Form02}>{TableContent()}</Box>
          {FooterContent(SaveForm)}
          {/* {HAVE > 0 && <>{FooterContent(SaveForm)}</>} */}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl5Form103;

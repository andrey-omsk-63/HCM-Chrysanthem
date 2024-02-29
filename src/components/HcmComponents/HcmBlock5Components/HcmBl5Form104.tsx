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
import { InputerDate, InputDirectRec } from "../../HcmServiceFunctions";
import { PreparCurrenciesCommon, WaysInput } from "../../HcmServiceFunctions";
import { MakeDate, СonvertMonth } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";
import { styleBl5Form06, styleBl5Form03 } from "../../HcmMainStyle";
import { styleBl5Form04, styleBl5Form05 } from "../../HcmMainStyle";

let flagInput = true;
let HAVE = 0;

const date = new Date();
let formSett = MakeDate(date);
let eventInp1 = dayjs(formSett);

let massGoodDate: Array<string> = [];

let maskForm = {
  avtor: "Доцент", // 'Автор
  why: "Так себе основание", // Причина проведения
  status: "0.0", // Общее состояние команды
  connect2: "0.0", // Взаимодействие с руководителем
  pay: "0.0", // Заработная плата, бонусы
  load: "0.0", // Нагрузка, режим работы
  link: "",
  comment: "",
  //============
  unit: "ООО Рога и капыта", // Подразделение
  period: "1 квартал 2023",
  know: "0.0", // Информированность
  develop: "0.0", // Развитие
  tasks: "0.0", // Текущие задачи
  connect1: "0.0", // Взаимодействие в команде
};
let currencies01: any = []; // Авторы
let currencies02: any = []; // Причины проведения
let currencies03: any = []; // Подразделения

let dat1 = ["Фантомас", "Лишенец", "Бугор", "Ляля"];
let dat2 = [
  "Очень важное основание",
  "Так себе основание",
  "Необходимая необходимость",
  "Фигня какая-та",
];
let dat3 = ["ООО «Рога и капыта»", "Пехота", "Автобат", "Конница", "Хозвзвод"];

const HcmBl5Form104 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //========================================================
  const [valueStatus, setValueStatus] = React.useState(maskForm.status);
  const [valueConnect2, setValueConnect2] = React.useState(maskForm.connect2);
  const [valuePay, setValuePay] = React.useState(maskForm.pay);
  const [valueLoad, setValueLoad] = React.useState(maskForm.load);

  const [valueDate1, setValueDate1] = React.useState<Dayjs | null>(
    dayjs(formSett)
  );
  const [valueKnow, setValueKnow] = React.useState(maskForm.know);
  const [valueDevelop, setValueDevelop] = React.useState(maskForm.develop);
  const [valueTask, setValueTask] = React.useState(maskForm.tasks);
  const [valueConnect1, setValueConnect1] = React.useState(maskForm.connect1);

  const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);

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
    currencies01 = PreparCurrenciesCommon(dat1); // Авторы
    currencies02 = PreparCurrenciesCommon(dat2); // Причины проведения
    currencies03 = PreparCurrenciesCommon(dat3); // Подразделения
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

  const hdlChangeStatus = (valueInp: string) => {
    maskForm.status = valueInp;
    setValueStatus(valueInp);
    HAVE++;
  };

  const hdlChangeConnect2 = (valueInp: string) => {
    maskForm.connect2 = valueInp;
    setValueConnect2(valueInp);
    HAVE++;
  };

  const hdlChangePay = (valueInp: string) => {
    maskForm.pay = valueInp;
    setValuePay(valueInp);
    HAVE++;
  };

  const hdlChangeLoad = (valueInp: string) => {
    maskForm.load = valueInp;
    setValueLoad(valueInp);
    HAVE++;
  };

  const hdlChangeKnow = (valueInp: string) => {
    maskForm.know = valueInp;
    setValueKnow(valueInp);
    HAVE++;
  };

  const hdlChangeDevelop = (valueInp: string) => {
    maskForm.develop = valueInp;
    setValueDevelop(valueInp);
    HAVE++;
  };

  const hdlChangeTask = (valueInp: string) => {
    maskForm.tasks = valueInp;
    setValueTask(valueInp);
    HAVE++;
  };

  const hdlChangeConnect1 = (valueInp: string) => {
    maskForm.connect1 = valueInp;
    setValueConnect1(valueInp);
    HAVE++;
  };

  const hdlChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueLink(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.link = event.target.value.trimStart();
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
        case 1: // Авторы
          setCurrency01(event.target.value);
          maskForm.avtor = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2: // Причины проведения
          setCurrency02(event.target.value);
          maskForm.why = dat2[Number(event.target.value)];
          HAVE++;
          break;
        case 3: // Подразделения
          setCurrency03(event.target.value);
          maskForm.unit = dat3[Number(event.target.value)];
          HAVE++;
      }
    };

    return (
      <Box sx={{ marginTop: "-5px" }}>
        {InputDirectRec(handleChange, 232, currency, currencies)}
      </Box>
    );
  };

  const InputPeriod = () => {
    let period = "";
    if (valueDate1) {
      let dt = valueDate1.toISOString();
      let year = dt.slice(0, 4);
      period = СonvertMonth(Number(dt.slice(5, 7))) + "-й квартал " + year;
    }

    return (
      <Grid item container sx={{}}>
        <Grid item xs={6} sx={{ border: 0 }}>
          {ContentDate1()}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ padding: "0px 0px 0px 5px", marginTop: "-2px" }}
        >
          {period}
        </Grid>
      </Grid>
    );
  };

  const TableContent = () => {
    return (
      <>
        <Grid container>
          <Grid item xs={6} sx={{ padding: "0px 2px 0px 0px" }}>
            {StrTablProp(
              4.5,
              "Автор",
              StrokaMenuGlob(1, currency01, currencies01)
            )}
            {StrTablProp(
              4.5,
              "Причина проведения",
              StrokaMenuGlob(2, currency02, currencies02)
            )}
            {StrTablProp(
              6,
              "Общее состояние команды",
              WaysInput(0, valueStatus, hdlChangeStatus, 0, 20)
            )}
            {StrTablProp(
              6,
              "Взаимодействие с руководителем",
              WaysInput(0, valueConnect2, hdlChangeConnect2, 0, 20)
            )}
            {StrTablProp(
              6,
              "Заработная плата, бонусы",
              WaysInput(0, valuePay, hdlChangePay, 0, 20)
            )}
            {StrTablProp(
              6,
              "Нагрузка, режим работы",
              WaysInput(0, valueLoad, hdlChangeLoad, 0, 20)
            )}
          </Grid>
          <Grid item xs={6} sx={{ padding: "0px 0px 0px 2px" }}>
            {StrTablProp(
              4.5,
              "Подразделение",
              StrokaMenuGlob(3, currency03, currencies03)
            )}
            {StrTablProp(4.5, "За период", InputPeriod())}
            {StrTablProp(
              6,
              "Информированность",
              WaysInput(0, valueKnow, hdlChangeKnow, 0, 20)
            )}
            {StrTablProp(
              6,
              "Развитие",
              WaysInput(0, valueDevelop, hdlChangeDevelop, 0, 20)
            )}
            {StrTablProp(
              6,
              "Текущие задачи",
              WaysInput(0, valueTask, hdlChangeTask, 0, 20)
            )}
            {StrTablProp(
              6,
              "Взаимодействие в команде",
              WaysInput(0, valueConnect1, hdlChangeConnect1, 0, 20)
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0px 2px 0px 0px" }}>
            {StrTablProp(
              2.2,
              "Ссылка на НС",
              InputStrField(500, hdlChangeLink, valueLink)
            )}
          </Grid>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid item xs={2.2} sx={{ height: 100 }}>
              Комментарий
            </Grid>
            <Grid item xs sx={styleBl5Form03}>
              {InputStrFieldMult(500, hdlChangeComment, valueComment)}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(1050, 506)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Добавить Health Check</b>
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

export default HcmBl5Form104;

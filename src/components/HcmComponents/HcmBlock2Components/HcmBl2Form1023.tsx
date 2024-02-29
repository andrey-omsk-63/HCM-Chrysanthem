import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { statsaveCreate } from '../../../redux/actions';

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
import { MakeDate, FooterContentMode } from "../../HcmServiceFunctions";
import { FooterContentEndEdit, СonvertMonth } from "../../HcmServiceFunctions";
import { MakeDateRus } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";
import { styleBl5Form06, styleBl5Form03 } from "../../HcmMainStyle";
import { styleBl5Form04, styleBl5Form05 } from "../../HcmMainStyle";

let oldIdx = -1;
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
  link: "https://e.mail.ru/newsletters/0:17066793751836945566",
  comment:
    "Таганский суд Москвы в пятницу приступит к рассмотрению по существу иска к компании МТС с требованием компенсации миллиарда долларов за «голую вечеринку» в клубе «Мутабор». МТС с требованием компенсации миллиарда долларов за «голую вечеринку» в клубе «Мутабор».",
  //============
  unit: "ООО Рога и капыта", // Подразделение
  period: "1 квартал 2023",
  know: "0.0", // Информированность
  develop: "0.0", // Развитие
  tasks: "0.0", // Текущие задачи
  connect1: "0.0", // Взаимодействие в команде
};

let maskNom = {
  nomAvtor: "0",
  nomWho: "0",
  nomUnit: "0",
};

let maskFormNew: any = null; // для мягкого отката
let maskNomNew: any = null; // для мягкого отката

let currencies01: any = []; // Авторы
let currencies02: any = []; // Причины проведения
let currencies03: any = []; // Подразделения

let dat1 = ["Фантомас", "Лишенец", "Бугор", "Ляля"];
let dat2: Array<string> = [];
let dat22 = [
  "Очень важное основание",
  "Так себе основание",
  "Необходимая необходимость",
  "Фигня какая-та",
];
let dat3: Array<string> = [];
let dat33 = ["ООО Рога и капыта", "Пехота", "Автобат", "Конница", "Хозвзвод"];

let MODE = 0; // режим работы

const HcmBl2Form1023 = (props: { idx: number; form: any; close: Function }) => {
  ///== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [valueDate1, setValueDate1] = React.useState<Dayjs | null>(
    dayjs(formSett)
  );
  //=== инициализация ======================================
  if (oldIdx !== props.idx) {
    console.log("PERIOD:", props.form.period);
    HAVE = MODE = 0;
    maskForm = JSON.parse(JSON.stringify(props.form));
    maskFormNew = JSON.parse(JSON.stringify(props.form));
    maskNom.nomAvtor = maskNom.nomWho = maskNom.nomUnit = "0";
    maskNomNew = JSON.parse(JSON.stringify(maskNom));
    //===
    dat2 = [];
    dat2.push(props.form.why);
    for (let i = 0; i < dat22.length; i++) dat2.push(dat22[i]);
    //===
    dat3 = [];
    dat3.push(props.form.unit);
    for (let i = 0; i < dat33.length; i++) dat3.push(dat33[i]);
    //===
    let nk = Number(props.form.period.slice(0, 1));
    let year = props.form.period.slice(-4);
    formSett = year + "-";
    switch (nk) {
      case 1:
        formSett += "02-01";
        break;
      case 2:
        formSett += "05-01";
        break;
      case 3:
        formSett += "08-01";
        break;
      case 4:
        formSett += "11-01";
    }
    setValueDate1(dayjs(formSett));
    eventInp1 = dayjs(formSett);
    //===
    currencies01 = PreparCurrenciesCommon(dat1); // Авторы
    currencies02 = PreparCurrenciesCommon(dat2); // Причины проведения
    currencies03 = PreparCurrenciesCommon(dat3); // Подразделения
    oldIdx = props.idx;
    console.log("!!!", nk, year, formSett, props.form);
  }
  //========================================================
  const [valueStatus, setValueStatus] = React.useState(maskForm.status);
  const [valueConnect2, setValueConnect2] = React.useState(maskForm.connect2);
  const [valuePay, setValuePay] = React.useState(maskForm.pay);
  const [valueLoad, setValueLoad] = React.useState(maskForm.load);

  const [valueKnow, setValueKnow] = React.useState(maskForm.know);
  const [valueDevelop, setValueDevelop] = React.useState(maskForm.develop);
  const [valueTask, setValueTask] = React.useState(maskForm.tasks);
  const [valueConnect1, setValueConnect1] = React.useState(maskForm.connect1);

  const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);

  const [currency01, setCurrency01] = React.useState(maskNom.nomAvtor);
  const [currency02, setCurrency02] = React.useState(maskNom.nomWho);
  const [currency03, setCurrency03] = React.useState(maskNom.nomUnit);
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  //========================================================
  const SoftRollback = () => {
    maskForm = JSON.parse(JSON.stringify(maskFormNew));
    maskNom = JSON.parse(JSON.stringify(maskNomNew));
    setValueStatus(maskForm.status);
    setValueConnect2(maskForm.connect2);
    setValuePay(maskForm.pay);
    setValueLoad(maskForm.load);
    setValueKnow(maskForm.know);
    setValueDevelop(maskForm.develop);
    setValueTask(maskForm.tasks);
    setValueConnect1(maskForm.connect1);
    setValueLink(maskForm.link);
    setValueComment(maskForm.comment);
    setCurrency01(maskNom.nomAvtor);
    setCurrency02(maskNom.nomWho);
    setCurrency03(maskNom.nomUnit);
  };

  const EndEdit = (mode: number) => {
    MODE = 0;
    setTrigger(!trigger);
  };

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const handleCloseBad = () => {
    MODE = HAVE = 0;
    HAVE && setBadExit(true);
    !HAVE && handleClose();
  };

  const handleCloseBadEdit = () => {
    HAVE && setBadExit(true);
    !HAVE && handleClose();
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === "escapeKeyDown" && !MODE) handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    if (mode) {
      SoftRollback(); // мягкий откат
      MODE = 0;
      setTrigger(!trigger);
      //handleClose(); // выход без сохранения
    }
  };
  //=== Функции - обработчики ==============================
  const SaveForm = (mode: number) => {
    if (mode) {
      MODE = HAVE = 0;
      setTrigger(!trigger);
    } else {
      handleCloseBadEdit();
    }
  };

  const ChangeMode = (mode: number) => {
    switch (mode) {
      case 0: // Удалить
        console.log("Здесь будет удаление!!!");
        break;
      case 1: // Редактировать
        MODE = 1;
        maskFormNew = JSON.parse(JSON.stringify(maskForm));
        maskNomNew = JSON.parse(JSON.stringify(maskNom));
        setTrigger(!trigger);
        break;
      case 2: // Выйти
        MODE = 0;
        handleClose(); // потом исправить ===========================================
    }
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
        //setValueDate1(dayjs(eventInp1));
        setValueDate1(eventInp1);
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
          maskNom.nomAvtor = event.target.value;
          setCurrency01(event.target.value);
          maskForm.avtor = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2: // Причины проведения
          maskNom.nomWho = event.target.value;
          setCurrency02(event.target.value);
          maskForm.why = dat2[Number(event.target.value)];
          HAVE++;
          break;
        case 3: // Подразделения
          maskNom.nomUnit = event.target.value;
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
    if (eventInp1) {
      let dt = eventInp1.toISOString();
      let year = dt.slice(0, 4);
      console.log('eventInp1:',dt,eventInp1)
      period = СonvertMonth(Number(dt.slice(5, 7))) + "-й квартал " + year;
    }

    return (
      <Grid item container sx={{}}>
        <Grid item xs={6} sx={{ border: 0 }}>
          {MODE ? (
            <>{ContentDate1()}</>
          ) : (
            <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>
              {MakeDateRus(new Date(eventInp1.toISOString()))}
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ padding: "0px 0px 0px 5px", marginTop: "-1px" }}
        >
          {period}
        </Grid>
      </Grid>
    );
  };

  //=== Реквизиты формы ====================================
  let recAvtor = MODE ? (
    StrokaMenuGlob(1, currency01, currencies01)
  ) : (
    <Box sx={{ padding: "1px 0px 2px 0px", fontWeight: 600 }}>
      {currencies01[Number(currency01)].label}
    </Box>
  );
  let recWho = MODE ? (
    StrokaMenuGlob(2, currency02, currencies02)
  ) : (
    <Box sx={{ padding: "1px 0px 1px 0px", fontWeight: 600 }}>
      {currencies02[Number(currency02)].label}
    </Box>
  );
  let recStatus = MODE ? (
    WaysInput(0, valueStatus, hdlChangeStatus, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>
      {valueStatus}
    </Box>
  );
  let recConnect2 = MODE ? (
    WaysInput(0, valueConnect2, hdlChangeConnect2, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>
      {valueConnect2}
    </Box>
  );
  let recPay = MODE ? (
    WaysInput(0, valuePay, hdlChangePay, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>{valuePay}</Box>
  );
  let recLoad = MODE ? (
    WaysInput(0, valueLoad, hdlChangeLoad, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>{valueLoad}</Box>
  );
  //========================================================
  let recUnit = MODE ? (
    StrokaMenuGlob(3, currency03, currencies03)
  ) : (
    <Box sx={{ padding: "1px 0px 2px 0px", fontWeight: 600 }}>
      {currencies03[Number(currency03)].label}
    </Box>
  );
  //========================================================
  let recLink = MODE ? (
    InputStrField(500, hdlChangeLink, valueLink)
  ) : (
    <Box sx={{ padding: "1px 0px 5px 0px", fontWeight: 600 }}>{valueLink}</Box>
  );
  let recKnow = MODE ? (
    WaysInput(0, valueKnow, hdlChangeKnow, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>{valueKnow}</Box>
  );
  let recDevelop = MODE ? (
    WaysInput(0, valueDevelop, hdlChangeDevelop, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>
      {valueDevelop}
    </Box>
  );
  let recTask = MODE ? (
    WaysInput(0, valueTask, hdlChangeTask, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>{valueTask}</Box>
  );
  let recConnect1 = MODE ? (
    WaysInput(0, valueConnect1, hdlChangeConnect1, 0, 20)
  ) : (
    <Box sx={{ padding: "1px 0px 7px 0px", fontWeight: 600 }}>
      {valueConnect1}
    </Box>
  );

  const TableContent = () => {
    return (
      <>
        <Grid container>
          <Grid item xs={6} sx={{ padding: "0px 2px 0px 0px" }}>
            {StrTablProp(4.5, "Автор", recAvtor)}
            {StrTablProp(4.5, "Причина проведения", recWho)}
            {StrTablProp(6, "Общее состояние команды", recStatus)}
            {StrTablProp(6, "Взаимодействие с руководителем", recConnect2)}
            {StrTablProp(6, "Заработная плата, бонусы", recPay)}
            {StrTablProp(6, "Нагрузка, режим работы", recLoad)}
          </Grid>
          <Grid item xs={6} sx={{ padding: "0px 0px 0px 2px" }}>
            {StrTablProp(4.5, "Подразделение", recUnit)}
            {StrTablProp(4.5, "За период", InputPeriod())}
            {StrTablProp(6, "Информированность", recKnow)}
            {StrTablProp(6, "Развитие", recDevelop)}
            {StrTablProp(6, "Текущие задачи", recTask)}
            {StrTablProp(6, "Взаимодействие в команде", recConnect1)}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0px 2px 0px 0px" }}>
            {StrTablProp(2.2, "Ссылка на НС", recLink)}
          </Grid>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid item xs={2.2} sx={{ height: 100 }}>
              Комментарий
            </Grid>
            <Grid item xs sx={styleBl5Form03}>
              {MODE ? (
                <>{InputStrFieldMult(500, hdlChangeComment, valueComment)}</>
              ) : (
                <Box sx={{ fontSize: 15.5, width: 515 + "px", height: "96px" }}>
                  {valueComment.slice(0, 243)}
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  let title = MODE ? "Редактирование" : "Просмотр";
  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(1050, 514)}>
          {MODE === 0 && (
            <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
              <b>&#10006;</b>
            </Button>
          )}
          <Box sx={styleBl5Form01}>
            <b>{title} Health Check</b>
          </Box>
          <Box sx={styleBl5Form02}>{TableContent()}</Box>
          {HAVE > 0 && MODE > 0 && <>{FooterContent(SaveForm)}</>}
          {HAVE === 0 && MODE > 0 && <>{FooterContentEndEdit(EndEdit)}</>}
          {MODE === 0 && <>{FooterContentMode(ChangeMode)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl2Form1023;

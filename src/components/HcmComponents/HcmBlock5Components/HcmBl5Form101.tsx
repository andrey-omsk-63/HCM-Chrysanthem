import * as React from "react";
//import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
//import TextField from '@mui/material/TextField';

import "dayjs/locale/ru";
import dayjs, { Dayjs } from "dayjs";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import Badge from '@mui/material/Badge';

import { FooterContent, BadExit, StrTablProp } from "../../HcmServiceFunctions";
import { InputStrField, InputStrFieldMult } from "../../HcmServiceFunctions";
import {
  MakeDate,
  InputerDate,
  InputDirectRec,
} from "../../HcmServiceFunctions";
import { PreparCurrenciesCommon } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
//import { styleInpOk, styleButOk } from '../../HcmMainStyle';
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";
import { styleBl5Form03, styleBl5Form06 } from "../../HcmMainStyle";
import { styleBl5Form04, styleBl5Form05 } from "../../HcmMainStyle";

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const date = new Date();
//const tekYear = date.getFullYear();
let formSett = MakeDate(date);
let eventInp1 = dayjs(formSett);
let eventInp2 = dayjs(formSett);
//let inpDate1 = false;
//let inpDate2 = false;
let massGoodDate: Array<string> = [];

let maskForm = {
  name: "Пупкин Иван",
  ment: "Тяпкин Фёдор",
  avtor: "Фантомас",
  link: "",
  comment: "",
};

let currencies01: any = []; // Сотрудники
let currencies02: any = []; // Менторы
let currencies03: any = []; // Авторы

let dat1 = ["Пупкин Иван", "Гопкин Семён", "Шлёпкин Антон"];
let dat2 = [
  "Тяпкин Фёдор",
  "Ляпкин Сергей",
  "Шляпкин Валерий",
  "Хряпкин Виктор",
];
let dat3 = ["Фантомас", "Лишенец", "Бугор", "Ляля"];

const HcmBl5Form101 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  //const [valueName, setValueName] = React.useState(maskForm.name);
  //const [valueMent, setValueMent] = React.useState(maskForm.ment);
  //const [valueAvtor, setValueAvtor] = React.useState(maskForm.avtor);
  const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);
  const [valueDate1, setValueDate1] = React.useState<Dayjs | null>(
    dayjs(formSett)
  );
  const [valueDate2, setValueDate2] = React.useState<Dayjs | null>(
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
      // god = new Date(event.toString()).getFullYear();
      //let yearAll = tekYear - god;
      // if (event.toString() === 'Invalid Date' || yearAll <= -2001 || yearAll > 2001) {
      if (event.toString() === "Invalid Date") {
        //inpDate1 = false;
        setValueDate1(dayjs(eventInp1));
      } else {
        //inpDate1 = true;
        setValueDate1((eventInp1 = event));
        if (event > eventInp2) setValueDate2((eventInp2 = event));
        HAVE++;
      }
    };
    return <>{InputerDate(valueDate1, handleChangeDP, massGoodDate)}</>;
  };

  const InputDate2 = () => {
    const handleChangeDP = (event: any) => {
      //let god = new Date(event.toString()).getFullYear();
      //let yearAll = tekYear - god;
      if (
        event.toString() === "Invalid Date" ||
        // yearAll <= -11 ||
        // yearAll > 11 ||
        event < eventInp1
      ) {
        // inpDate2 = false;
        setValueDate2(dayjs(eventInp2));
        HAVE++;
      } else {
        //inpDate2 = true;
        setValueDate2((eventInp2 = event));
      }
    };
    return <>{InputerDate(valueDate2, handleChangeDP, massGoodDate)}</>;
  };

  // const InputOk1 = () => {
  //   inpDate1 = false;
  //   setValueDate1(eventInp1);
  //   setTrigger(!trigger);
  // };

  // const InputOk2 = () => {
  //   inpDate2 = false;
  //   setValueDate2(eventInp2);
  //   setTrigger(!trigger);
  // };

  // const InputerOk = (inpDate: boolean, InputOk: Function) => {
  //   return (
  //     <Grid item xs={2.3} sx={styleInpOk}>
  //       {inpDate && (
  //         <Button sx={styleButOk} onClick={() => InputOk()}>
  //           Да
  //         </Button>
  //       )}
  //     </Grid>
  //   );
  // };

  const ContentDate1 = () => {
    return (
      <Grid item container sx={styleBl5Form04}>
        <Grid item xs sx={styleBl5Form05}>
          <Box sx={styleBl5Form06}>{InputDate1()}</Box>
        </Grid>
        {/* {InputerOk(inpDate1, InputOk1)} */}
      </Grid>
    );
  };

  const ContentDate2 = () => {
    return (
      <Grid item container sx={styleBl5Form04}>
        <Grid item xs sx={styleBl5Form05}>
          <Box sx={styleBl5Form06}>{InputDate2()}</Box>
        </Grid>
        {/* {InputerOk(inpDate2, InputOk2)} */}
      </Grid>
    );
  };

  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Подразделение
          setCurrency01(event.target.value);
          maskForm.name = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2: // Менторы
          setCurrency02(event.target.value);
          maskForm.ment = dat2[Number(event.target.value)];
          HAVE++;
          break;
        case 3: // Авторы
          setCurrency03(event.target.value);
          maskForm.avtor = dat3[Number(event.target.value)];
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
        {StrTablProp(
          4,
          "Сотрудник*",
          StrokaMenuGlob(1, currency01, currencies01)
        )}
        {StrTablProp(4, "Ментор*", StrokaMenuGlob(2, currency02, currencies02))}
        {StrTablProp(4, "Дата начала*", ContentDate1())}
        {StrTablProp(4, "Дата окончания*", ContentDate2())}
        {StrTablProp(
          4,
          "Автор (Ник)",
          StrokaMenuGlob(3, currency03, currencies03)
        )}
        {StrTablProp(
          4,
          "Ссылка на план адаптации",
          InputStrField(386, hdlChangeLink, valueLink)
        )}
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={4} sx={{ height: 100 }}>
            Комментарий
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
        <Box sx={styleBl5Form00(650, 457)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Добавить данные по адаптации</b>
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

export default HcmBl5Form101;

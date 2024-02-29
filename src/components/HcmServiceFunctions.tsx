import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";

import { ILLUM } from "./HcmMain";

const handleKey = (event: any) => {
  if (event.key === "Enter") event.preventDefault();
};

export const RandomNumber = (min: number, max: number) => {
  let rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

export const MakeDate = (tekData: Date) => {
  let ddd = new Date(tekData.toString());
  let SMes = ddd.getMonth() + 1;
  let sDate = ddd.getFullYear() + "-";
  let sDay = ddd.getDate();
  if (SMes < 10) sDate = sDate + "0";
  sDate += SMes + "-";
  if (sDay < 10) sDate += "0";
  sDate += sDay;
  return sDate;
};

export const MakeDateRus = (tekData: Date) => {
  let ddd = new Date(tekData.toString());
  let sDay = ddd.getDate();
  let sMes = ddd.getMonth() + 1;
  let sYear = ddd.getFullYear();
  let dataRus = (sDay < 10 ? "0" + sDay : sDay) + ".";
  dataRus += (sMes < 10 ? "0" + sMes : sMes) + "." + sYear;
  return dataRus;
};

export const СonvertMonth = (tekMonth: number) => {
  let tekQ = 0;
  if (tekMonth < 4) tekQ = 1;
  if (tekMonth > 3 && tekMonth < 7) tekQ = 2;
  if (tekMonth > 6 && tekMonth < 10) tekQ = 3;
  if (tekMonth > 9) tekQ = 4;
  return tekQ;
};

export const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
  return (
    <>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={xss} sx={{ border: 0 }}>
          {recLeft}
        </Grid>
        {typeof recRight === "object" ? (
          <Grid item xs>
            {recRight}
          </Grid>
        ) : (
          <Grid item xs sx={{ fontSize: 15, color: "#5B1080", border: 0 }}>
            <b>{recRight}</b>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export const TablStr = (mode: number, xss: number, arg: any, style: any) => {
  return (
    <>
      {xss > 0 && (
        <Grid item xs={xss} sx={style}>
          {mode > 0 && (
            <Box>
              <b>{arg}</b>
            </Box>
          )}
          {mode === 0 && <Box>{arg}</Box>}
        </Grid>
      )}
      {xss === 0 && (
        <Grid item xs sx={style}>
          {mode > 0 && (
            <Box>
              <b>{arg}</b>
            </Box>
          )}
          {mode === 0 && <Box>{arg}</Box>}
        </Grid>
      )}
    </>
  );
};
//=== Работа с файлами картинок ==========================
export const b64toBlob = (
  b64Data: any,
  contentType: any,
  sliceSize: number
) => {
  contentType = contentType || "";
  sliceSize = sliceSize || 256;
  let byteCharacters1 = Buffer.from(b64Data, "base64");
  let byteCharacters2 = byteCharacters1.toString("base64");
  //let byteCharacters = atob(b64Data);
  let byteCharacters = atob(byteCharacters2);
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);
    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  let blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const MakeNewBlob = (MESS: string) => {
  let poz = MESS.indexOf(",");
  let sblob = MESS.slice(poz + 1);
  let contentType = "image/png";
  let blob: any = b64toBlob(sblob, contentType, 256);
  return blob;
};
//========================================================
export const PreparCurrencies01 = () => {
  const currencies: any = [];
  let dat = [
    "Личный кабинет:",
    "Первый пункт меню",
    "Второй пункт меню",
    "Третий пункт меню",
    "Настройки",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies02 = () => {
  const currencies: any = [];
  let dat = [
    "Мои подразделения:",
    "Первый пункт меню",
    "Второй пункт меню",
    "Третий пункт меню",
    "Настройки",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies03 = () => {
  const currencies: any = [];
  let dat = [
    "Справочная информация:",
    "Регламенты",
    "Структура компании",
    //'Структура компании copy',
    "Профили компетенций",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies05 = () => {
  const currencies: any = [];
  let dat = [
    "Ввод данных:",
    "Адаптация",
    "Добавить ИПР",
    "Создать задачу",
    //'Добавить Risk&Value',
    "Добавить Health Check",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies041 = () => {
  const currencies: any = [];
  let dat = [
    "Первое подразделение",
    "Второе подразделение",
    "Третье подразделение",
    "Четвёртое подразделение",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies042 = () => {
  const currencies: any = [];
  let dat = [
    "Первый период",
    "Второй период",
    "Третий период",
    "Четвёртый период",
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies043 = () => {
  const currencies: any = [];
  let dat = ["Аналитика №1", "Аналитика №2", "Аналитика №3", "Аналитика №4"];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrenciesCommon = (dat: Array<string>) => {
  const currencies: any = [];
  //let dat = ['Аналитика №1', 'Аналитика №2', 'Аналитика №3', 'Аналитика №4'];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: "0",
    label: "Все режимы",
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const WaysInput = (
  idx: number,
  VALUE: any,
  SetValue: Function,
  MIN: number,
  MAX: number
) => {
  let value = VALUE;

  const styleSetID = {
    width: "33px",
    maxHeight: "1px",
    minHeight: "1px",
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    bgcolor: "#FFFBE5", // топлёное молоко
    boxShadow: 6,
    textAlign: "center",
    p: 1.5,
  };

  const styleBoxFormID = {
    "& > :not(style)": {
      marginTop: "3px",
      marginLeft: "-9px",
      width: "53px",
    },
  };

  const handleChange = (event: any) => {
    //let valueInp = event.target.value.replace(/^0+/, '');
    let valueInp = event.target.value;
    if (Number(valueInp) < MIN) valueInp = MIN;
    if (valueInp === "") valueInp = MIN;
    //valueInp = Math.trunc(Number(valueInp));
    if (valueInp <= MAX) {
      value = parseFloat(valueInp.toString()).toFixed(1);
      SetValue(value, idx);
    }
  };

  return (
    <Box sx={styleSetID}>
      <Box component="form" sx={styleBoxFormID}>
        <TextField
          size="small"
          onKeyPress={handleKey} //отключение Enter
          type="number"
          InputProps={{
            disableUnderline: true,
            style: {
              maxHeight: "1px",
              minHeight: "1px",
              fontSize: 14,
              backgroundColor: "#FFFBE5", // топлёное молоко
            },
          }}
          value={value}
          onChange={handleChange}
          variant="standard"
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export const InputDirect = (
  mode: number,
  handleChange: any,
  widthBlok: number,
  currency: any,
  currencies: any
) => {
  const styleSetNapr = {
    width: widthBlok - 27,
    maxHeight: "2px",
    minHeight: "2px",
    fontSize: mode === ILLUM ? 14 : 12.5,
    bgcolor: mode === ILLUM ? "#82e94a" : "#E6F5D6", // ярко-салатовый/светло-салатовый
    //border: '1px solid #93D145', // тёмно салатовый
    //bgcolor: ILLUM === mode ? "#82e94a" : "#F4E8FB", // ярко-салатовый/светло-сиреневый
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    padding: "15px 10px 11px 12px",
    textAlign: "center",
    boxShadow: mode === ILLUM ? 9 : 3,
  };

  const styleBoxFormNapr = {
    "& > :not(style)": {
      border: 0,
      marginTop: "-11px",
      marginLeft: "-8px",
      width: widthBlok - 7,
    },
  };

  return (
    <Box sx={styleSetNapr}>
      <Box component="form" sx={styleBoxFormNapr}>
        <TextField
          select
          size="small"
          onKeyPress={handleKey} //отключение Enter
          value={currency}
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: currency === "0" && mode === ILLUM ? 13.5 : 12.5,
              fontWeight: currency === "0" ? 700 : 400,
            },
          }}
          variant="standard"
          color="secondary"
        >
          {currencies.map((option: any) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: option.label === currencies[0].label ? 13.5 : 12.9,
                fontWeight: option.label === currencies[0].label ? 700 : 400,
                color:
                  option.label === currencies[0].label ? "#7c31ab" : "black",
                cursor:
                  option.label === currencies[0].label ? "none" : "pointer",
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export const InputDirectA = (
  mode: number,
  handleChange: any,
  widthBlok: number,
  currency: any,
  currencies: any
) => {
  const styleSetNapr = {
    width: widthBlok - 27,
    maxHeight: "2px",
    minHeight: "2px",
    fontSize: mode === ILLUM ? 14 : 12.5,
    //bgcolor: '#F4E8FB', // светло-сиреневый
    bgcolor: "#E6F5D6", // светло-салатовый
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    padding: "15px 10px 11px 12px",
    textAlign: "center",
    boxShadow: 3,
  };

  const styleBoxFormNapr = {
    "& > :not(style)": {
      border: 0,
      marginTop: "-11px",
      marginLeft: "-8px",
      width: widthBlok - 7,
    },
  };

  return (
    <Box sx={styleSetNapr}>
      <Box component="form" sx={styleBoxFormNapr}>
        <TextField
          select
          size="small"
          onKeyPress={handleKey} //отключение Enter
          value={currency}
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: 12.5,
              fontWeight: 700,
            },
          }}
          variant="standard"
          color="secondary"
        >
          {currencies.map((option: any) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: 13.5,
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export const InputDirectRec = (
  handleChange: any,
  widthBlok: number,
  currency: any,
  currencies: any
) => {
  const styleSetNapr = {
    width: widthBlok - 27,
    maxHeight: "2px",
    minHeight: "2px",
    fontSize: 15,
    //bgcolor: '#F4E8FB', // светло-сиреневый
    //bgcolor: '#E6F5D6', // светло-салатовый
    bgcolor: "#FFFBE5", // топлёное молоко
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    padding: "15px 10px 11px 12px",
    boxShadow: 4,
  };

  const styleBoxFormNapr = {
    "& > :not(style)": {
      border: 0,
      marginTop: "-11px",
      marginLeft: "-8px",
      width: widthBlok - 7,
    },
  };

  return (
    <Box sx={styleSetNapr}>
      <Box component="form" sx={styleBoxFormNapr}>
        <TextField
          select
          size="small"
          onKeyPress={handleKey} //отключение Enter
          value={currency}
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: 15,
              fontWeight: 400,
              color: "#5B1080", // сиреневый
            },
          }}
          variant="standard"
          color="secondary"
        >
          {currencies.map((option: any) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: 15,
                color: "#5B1080", // сиреневый
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export const InputStrField = (
  wdth: number,
  handleChangeName: any,
  valuen: string
) => {
  const styleFormPK05 = {
    width: wdth + "px",
    height: "10px",
    marginTop: -0.2,
    bgcolor: "#FFFBE5", // топлёное молоко
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    boxShadow: 6,
    textAlign: "center",
    p: 0.95,
  };

  const styleFormPK055 = {
    "& > :not(style)": {
      marginTop: "-7px",
      marginLeft: "-5px",
      width: wdth + 12 + "px",
    },
  };

  return (
    <Box sx={styleFormPK05}>
      <Box component="form" sx={styleFormPK055}>
        <TextField
          size="small"
          onKeyPress={handleKey} //отключение Enter
          InputProps={{
            disableUnderline: true,
            style: { fontSize: 15, color: "#5B1080" }, // сиреневый
          }}
          value={valuen}
          onChange={handleChangeName}
          variant="standard"
        />
      </Box>
    </Box>
  );
};

export const InputStrFieldSearch = (
  wdth: number,
  handleChangeName: any,
  valuen: string
) => {
  const styleFormPK05 = {
    width: wdth + "px",
    height: "11px",
    //marginTop: -0.2,
    bgcolor: "#FFFBE5", // топлёное молоко
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    boxShadow: 6,
    textAlign: "center",
    p: 0.95,
  };

  const styleFormPK055 = {
    "& > :not(style)": {
      marginTop: "-9px",
      marginLeft: "-8px",
      width: wdth + 15 + "px",
      padding: "4px 0px 0px 0px",
    },
  };

  return (
    <Box sx={styleFormPK05}>
      <Box component="form" sx={styleFormPK055}>
        <TextField
          size="small"
          onKeyPress={handleKey} //отключение Enter
          placeholder=" 🔍 Поиск"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: 13.4, color: "#5B1080" }, // сиреневый
          }}
          value={valuen}
          onChange={handleChangeName}
          variant="standard"
        />
      </Box>
    </Box>
  );
};

export const InputStrFieldMult = (
  wdth: number,
  handleChangeName: any,
  valuen: string
) => {
  const styleFormPK05 = {
    width: wdth + 15 + "px",
    height: "96px",
    marginTop: -0.2,
    bgcolor: "#FFFBE5", // топлёное молоко
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    boxShadow: 6,
    textAlign: "center",
  };

  const styleFormPK055 = {
    "& > :not(style)": {
      //marginTop: '-7px',
      marginLeft: "2px",
      width: wdth + 15 + "px",
    },
  };

  return (
    <Box sx={styleFormPK05}>
      <Box component="form" sx={styleFormPK055}>
        <TextField
          size="small"
          onKeyPress={handleKey} //отключение Enter
          InputProps={{
            disableUnderline: true,
            style: { fontSize: 15, color: "#5B1080" }, // сиреневый
          }}
          value={valuen}
          onChange={handleChangeName}
          variant="standard"
          id="outlined-multiline-static"
          multiline
          rows={4}
        />
      </Box>
    </Box>
  );
};

export const BadExit = (badExit: boolean, handleCloseEnd: Function) => {
  const styleSetPoint = {
    outline: "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    //bgcolor: '#fcebfb', // бледно-розовый
    //border: '1px solid #fcebfb', // бледно-розовый
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: "center",
    p: 1,
  };

  const styleModalMenu = {
    marginTop: 0.5,
    maxHeight: "30px",
    minHeight: "30px",
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    bgcolor: "#E6F5D6", // светло салатовый
    color: "#5B1080", // сиреневый
    textTransform: "unset !important",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    boxShadow: 6,
  };

  const styleModalEndAttent = {
    position: "absolute",
    top: "0%",
    left: "auto",
    right: "-0%",
    maxHeight: "21px",
    minHeight: "21px",
    maxWidth: "2%",
    minWidth: "2%",
    color: "red",
    //color: "#801F95", // сиреневый
    //color: '#7620a2', // сиреневый
    textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
  };

  const handleClose = (mode: boolean) => {
    handleCloseEnd(mode);
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === "escapeKeyDown") handleClose(false);
  };

  return (
    <Modal open={badExit} onClose={CloseEnd} hideBackdrop>
      <Box sx={styleSetPoint}>
        <Button sx={styleModalEndAttent} onClick={() => handleClose(false)}>
          <b>&#10006;</b>
        </Button>
        <Typography
          variant="h6"
          sx={{ color: "red", textShadow: "1px 1px 2px rgba(0,0,0,0.25)" }}
        >
          Предупреждение
        </Typography>
        <Box sx={{ marginTop: 0.5, color: "#5B1080" }}>
          <Box sx={{ color: "red", marginBottom: 1.2 }}>
            Будет произведён выход без сохранения введённых данных. Продолжать?
          </Box>
          <Button sx={styleModalMenu} onClick={() => handleClose(false)}>
            Нет
          </Button>
          &nbsp;
          <Button sx={styleModalMenu} onClick={() => handleClose(true)}>
            Да
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const FooterContent = (SaveForm: Function) => {
  const styleSetPK04 = {
    marginTop: 1.2,
    display: "flex",
    justifyContent: "center",
  };

  const styleFormPK03 = {
    maxHeight: "30px",
    minHeight: "30px",
    bgcolor: "#E6F5D6", // светло салатовый
    border: "1px solid #000",
    borderRadius: 1,
    borderColor: "#d4d4d4", // серый
    textTransform: "unset !important",
    //padding: "6px 6px 6px 6px",
    boxShadow: 6,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    color: "#5B1080", // сиреневый
  };

  return (
    <Box sx={styleSetPK04}>
      <Box sx={{ display: "inline-block", margin: "0px 5px 0px 0px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(0)}>
          Отмена
        </Button>
      </Box>
      <Box sx={{ display: "inline-block", margin: "0px 6px 0px 6px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(1)}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};

export const FooterContentMode = (SaveForm: Function) => {
  const styleSetPK04 = {
    marginTop: 1.2,
    display: "flex",
    justifyContent: "center",
  };

  const styleFormPK03 = {
    maxHeight: "30px",
    minHeight: "30px",
    bgcolor: "#E6F5D6", // светло салатовый
    border: "1px solid #000",
    borderRadius: 1,
    borderColor: "#d4d4d4", // серый
    textTransform: "unset !important",
    //padding: "6px 6px 6px 6px",
    boxShadow: 6,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    color: "#5B1080", // сиреневый
  };

  return (
    <Box sx={styleSetPK04}>
      <Box sx={{ display: "inline-block", margin: "0px 6px 0px 0px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(0)}>
          <Box sx={{ color: "red" }}>Удалить</Box>
        </Button>
      </Box>
      <Box sx={{ display: "inline-block", margin: "0px 6px 0px 6px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(1)}>
          Редактировать
        </Button>
      </Box>
      <Box sx={{ display: "inline-block", margin: "0px 6px 0px 6px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(2)}>
          Выйти
        </Button>
      </Box>
    </Box>
  );
};

export const FooterContentEndEdit = (SaveForm: Function) => {
  const styleSetPK04 = {
    marginTop: 1.2,
    display: "flex",
    justifyContent: "center",
  };

  const styleFormPK03 = {
    maxHeight: "30px",
    minHeight: "30px",
    bgcolor: "#E6F5D6", // светло салатовый
    border: "1px solid #000",
    borderRadius: 1,
    borderColor: "#d4d4d4", // серый
    textTransform: "unset !important",
    //padding: "6px 6px 6px 6px",
    boxShadow: 6,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    color: "#5B1080", // сиреневый
  };

  return (
    <Box sx={styleSetPK04}>
      <Box sx={{ display: "inline-block", margin: "0px 6px 0px 0px" }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(0)}>
          Выйти из Редактирования
        </Button>
      </Box>
      {/* <Box sx={{ display: 'inline-block', margin: '0px 6px 0px 6px' }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(1)}>
          Редактировать
        </Button>
      </Box> */}
    </Box>
  );
};

export const InputerDate = (
  valueDate: any,
  handleChangeDP: any,
  massGoodDate: any
) => {
  const styleDatePicker = {
    "& > :not(style)": {
      width: "150px",
      height: "30px",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row",
      flex: "1 1 0px",
      borderColor: "#d4d4d4", // серый
      borderRadius: 1,
      boxShadow: 4,
    },
  };
  return (
    <Box sx={styleDatePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
        <DatePicker
          views={["day"]}
          value={valueDate}
          inputFormat="DD-MM-YYYY"
          InputProps={{ style: { fontSize: 15, color: "#5B1080" } }} // сиреневый
          onChange={handleChangeDP}
          renderInput={(params: any) => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              massGoodDate.indexOf(MakeDate(day)) >= 0;
            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? "👍" : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
//=== Разное ================================================
export const SortingByTwoKeys = (arrProps: any) => {
  let arr = arrProps;
  arr.sort(function (a: any, b: any) {
    let af = a.lev2;
    let bf = b.lev2;
    let as = a.lev3;
    let bs = b.lev3;
    // Если первое значение одинаково
    if (af === bf) {
      return as < bs ? -1 : as > bs ? 1 : 0;
    } else {
      return af < bf ? -1 : 1;
    }
  });
  return arr;
};

export const SortingByThreeKeys = (UNIT: any) => {
  let arr: any = [];
  let masKluch: any = []; // создание массива организаций
  for (let i = 0; i < UNIT.length; i++)
    if (masKluch.indexOf(UNIT[i].lev1) < 0) masKluch.push(UNIT[i].lev1);
  masKluch.sort(); // Сортирум элементы массива организаций
  // Сортировка по трём ключам:
  for (let j = 0; j < masKluch.length; j++) {
    let arrMem = UNIT.filter((v: any) => v.lev1 === masKluch[j]);
    let masSort = SortingByTwoKeys(arrMem);
    for (let i = 0; i < masSort.length; i++) arr.push(masSort[i]);
  }
  return arr;
};
//===========================================================

//=== Placemark =====================================

//=== Разное =======================================

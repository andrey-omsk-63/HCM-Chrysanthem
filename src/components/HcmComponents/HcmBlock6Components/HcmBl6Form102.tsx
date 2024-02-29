import * as React from "react";
//import { useDispatch, useSelector } from 'react-redux';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { BadExit, InputDirectRec } from "../../HcmServiceFunctions";
import { PreparCurrenciesCommon } from "../../HcmServiceFunctions";
import { InputStrField } from "../../HcmServiceFunctions";

import { styleModalMenu, styleSetPK01 } from "../../HcmMainStyle";
import { styleModalEnd, styleBl6Form02 } from "../../HcmMainStyle";
import { styleBl5Form01 } from "../../HcmMainStyle";
// import { styleBl1Form09, styleBl2Form04, styleBl2Form03} from '../../HcmMainStyle';

let oldIdx = -1;
let HAVE = 0;

let maskForm = {
  nik: "",
  role: "",
};

let currencies02: any = []; // Роль

let dat2 = ["такторист", "шахтёр", "комбайнёр", "лепила"];

const HcmBl6Form102 = (props: { idx: number; form: any; close: Function }) => {
  console.log("###:", props.form);
  //== Piece of Redux =======================================
  //const dispatch = useDispatch();
  //========================================================
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [valueNik, setValueNik] = React.useState(maskForm.nik);
  const [currency02, setCurrency02] = React.useState("0");
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (oldIdx !== props.idx) {
    HAVE = 0;
    maskForm.nik = props.form.userLogin;
    setValueNik(maskForm.nik);
    dat2.push(props.form._UserRole); // костыль - потом убрать
    maskForm.role = dat2[dat2.length - 1];
    setCurrency02((dat2.length - 1).toString());
    currencies02 = PreparCurrenciesCommon(dat2); // Роль
    oldIdx = props.idx;
  }
  //========================================================
  const handleClose = (mode: boolean) => {
    oldIdx = -1;
    setOpen(false);
    props.close(mode, maskForm);
  };

  const CloseBad = () => {
    maskForm.nik = ""; // выход без сохранения
    maskForm.role = "";
    handleClose(false);
  };

  const handleCloseBad = () => {
    HAVE && setBadExit(true);
    !HAVE && CloseBad(); // выход без сохранения
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === "escapeKeyDown") handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && CloseBad(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SavePeriod = () => {
    handleClose(true);
  };
  //========================================================
  const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
    return (
      <>
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={xss} sx={{ border: 0 }}>
            <b>{recLeft}</b>
          </Grid>
          {typeof recRight === "object" ? (
            <Grid item xs>
              {recRight}
            </Grid>
          ) : (
            <Grid
              item
              xs
              sx={{
                fontSize: 15,
                color: "#5B1080",
                padding: "4px 0px 3px 5px",
                marginTop: "-3px",
                border: 0
              }}
            >
              {recRight}{" "}
            </Grid>
          )}
        </Grid>
      </>
    );
  };

  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency02(event.target.value);
      maskForm.role = dat2[Number(event.target.value)];
      HAVE++;
    };

    return (
      <Box sx={{ marginTop: "-5px" }}>
        {InputDirectRec(handleChange, 155, currency, currencies)}
      </Box>
    );
  };

  const hdlChangeNik = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueNik(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.nik = event.target.value.trimStart();
      HAVE++;
    }
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleSetPK01}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Изменение роли пользователя:</b>
          </Box>
          <Grid container sx={styleBl6Form02}>
            {/* {StrTablProp(6, "Ник", InputStrField(135, hdlChangeNik, valueNik))} */}
            {StrTablProp(6, "Ник", maskForm.nik)}
            <Grid item xs={6} sx={{ border: 0, marginTop: "10px" }}>
              <b>Роль</b>
            </Grid>
            <Grid item xs={6} sx={{ border: 0, marginTop: "10px" }}>
              {StrokaMenuGlob(2, currency02, currencies02)}
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "15px", color: "#5B1080" }}>
            <Button sx={styleModalMenu} onClick={() => handleCloseBad()}>
              <Box sx={{ color: "red" }}>Удалить</Box>
            </Button>
            &nbsp;
            <Button sx={styleModalMenu} onClick={() => handleCloseBad()}>
              Отмена
            </Button>
            &nbsp;
            <Button sx={styleModalMenu} onClick={() => SavePeriod()}>
              Сохранить
            </Button>
          </Box>
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl6Form102;

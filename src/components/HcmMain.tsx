import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import HcmErrorMessage from "./HcmComponents/HcmErrorMessage";
import HcmBl0Form101 from "./HcmBl0Form101";
import HcmBlock1Gl from "./HcmComponents/HcmBlock1Components/HcmBlock1Gl";
import HcmBlock2Gl from "./HcmComponents/HcmBlock2Components/HcmBlock2Gl";
import HcmBlock3Disp from "./HcmComponents/HcmBlock3Components/HcmBlock3Disp";
import HcmBlock4Gl from "./HcmComponents/HcmBlock4Components/HcmBlock4Gl";
import HcmBlock5Disp from "./HcmComponents/HcmBlock5Components/HcmBlock5Disp";
import HcmBlock6Gl from "./HcmComponents/HcmBlock6Components/HcmBlock6Gl";

//import { SortingByThreeKeys } from "./HcmServiceFunctions";
import { PreparCurrencies05, PreparCurrencies03 } from "./HcmServiceFunctions";
import { InputDirect, RandomNumber } from "./HcmServiceFunctions";
import { InputStrFieldSearch } from "./HcmServiceFunctions";

//import { UNIT } from "./HcmMainConst"; // отл массив подразделений

import { fetchPersonProfile } from "../actions";
import { styleMain01, styleMain02 } from "./HcmMainStyle";
import { styleMain04, styleMain05 } from "./HcmMainStyle";

export let ILLUM = -1; // номер активной кнопки меню
export let FORM3 = "0"; // какую форму Справочная информация выдать через диспетчер
export let FORM5 = "0"; // какую форму Ввода данных выдать через диспетчер
export let widthGl = window.innerWidth - 3; // ширина окна браузера

let currencies03: any = [];
let currencies05: any = [];

let flagOpen = false;
let soob = "";

//const HcmMain = (props: {}) => {
const HcmMain = () => {
  //=== Piece of Redux =======================================
  const [selectedUser, setSelectedUser] = React.useState(""); // читаемая на данный момент карточка
  const loggedInUser = useSelector((state: any) => state.loggedInUser); // сам пользователь
  const dispatch = useDispatch();
  console.log(
    "Пользователь/выбранная карточка:",
    loggedInUser.login,
    selectedUser
  );
  //===========================================================
  const [dispBlock0, setDispBlock0] = React.useState(true);
  const [dispBlock1, setDispBlock1] = React.useState(false);
  const [dispBlock2, setDispBlock2] = React.useState(false);
  const [dispBlock3, setDispBlock3] = React.useState(false);
  const [dispBlock4, setDispBlock4] = React.useState(false);
  const [dispBlock5, setDispBlock5] = React.useState(false);
  const [dispBlock6, setDispBlock6] = React.useState(false);
  const [openSetErr, setOpenSetErr] = React.useState(false);
  const [valueInp, setValueInp] = React.useState("");
  const [currency03, setCurrency03] = React.useState("0");
  const [currency05, setCurrency05] = React.useState("0");
  const [trigger, setTrigger] = React.useState(false);

  //=== инициализация ======================================
  if (!flagOpen) {
    currencies03 = PreparCurrencies03(); // Справочная информация
    currencies05 = PreparCurrencies05(); // Ввод данных

    // let mask = {
    //   lev1: "",
    //   lev2: "",
    //   lev3: "",
    // };
    // let arr = SortingByThreeKeys(UNIT); // дерево подразделений
    // let treeMenu: any = [];
    // let mas1: any = [];
    // let mas2: any = [];

    // for (let i = 0; i < arr.length; i++) {
    //   if (mas1.indexOf(arr[i].lev1) < 0) {
    //     mas1.push(arr[i].lev1);
    //     let maskk = JSON.parse(JSON.stringify(mask));
    //     maskk.lev1 = arr[i].lev1;
    //     treeMenu.push(maskk);
    //   }
    //   if (mas2.indexOf(arr[i].lev1 + arr[i].lev2) < 0) {
    //     mas2.push(arr[i].lev1 + arr[i].lev2);
    //     let maskk = JSON.parse(JSON.stringify(mask));
    //     maskk.lev1 = arr[i].lev1;
    //     maskk.lev2 = arr[i].lev2;
    //     treeMenu.push(maskk);
    //   }
    //   let maskk = JSON.parse(JSON.stringify(mask));
    //   maskk.lev1 = arr[i].lev1;
    //   maskk.lev2 = arr[i].lev2;
    //   maskk.lev3 = arr[i].lev3;
    //   treeMenu.push(maskk);
    // }

    /*
    дерево подразделений пользователя
    datestat.treeUnit = treeMenu;
    dispatch(statsaveCreate(datestat));
    */
    flagOpen = true;
  }
  //========================================================
  const Turn00 = () => {
    setCurrency03("0");
    setCurrency05("0");
    dispBlock1 && setDispBlock1(false);
    dispBlock2 && setDispBlock2(false);
    dispBlock3 && setDispBlock3(false);
    dispBlock4 && setDispBlock4(false);
    setDispBlock0(true);
  };

  const Turn01 = React.useCallback(() => {
    setCurrency03("0");
    setCurrency05("0");
    setDispBlock2(false);
    setDispBlock3(false);
    setDispBlock4(false);
    setDispBlock6(false);
    setDispBlock0(false);
  }, []);

  const Turn02 = () => {
    setCurrency03("0");
    setCurrency05("0");
    dispBlock1 && setDispBlock1(false);
    dispBlock3 && setDispBlock3(false);
    dispBlock4 && setDispBlock4(false);
    dispBlock6 && setDispBlock6(false);
    dispBlock0 && setDispBlock0(false);
  };

  const Turn04 = () => {
    setCurrency03("0");
    setCurrency05("0");
    dispBlock1 && setDispBlock1(false);
    dispBlock3 && setDispBlock3(false);
    dispBlock6 && setDispBlock6(false);
    dispBlock2 && setDispBlock2(false);
    dispBlock0 && setDispBlock0(false);
  };

  const Turn06 = () => {
    setCurrency03("0");
    setCurrency05("0");
    dispBlock1 && setDispBlock1(false);
    dispBlock4 && setDispBlock4(false);
    dispBlock3 && setDispBlock3(false);
    dispBlock2 && setDispBlock2(false);
    dispBlock0 && setDispBlock0(false);
  };

  //=== Функции - обработчики ==============================
  const ClickLogo = () => {
    ILLUM = -1;
    Turn00();
    setTrigger(!trigger);
  };

  const ClickKnop1 = () => {
    ILLUM = loggedInUser.login === selectedUser ? 1 : 0;
    Turn01();
    setDispBlock1(true);
    setSelectedUser(loggedInUser.login);
  };

  const ClickKnop2 = () => {
    ILLUM = 2;
    Turn02();
    setDispBlock2(true);
  };

  const SetDispBlock3 = (mode: boolean) => {
    setCurrency03((FORM3 = "0"));
    setDispBlock3(mode);
    setDispBlock0(false);
    //dispBlock11 && setDispBlock11(false);
  };

  const ClickKnop4 = () => {
    ILLUM = 4;
    Turn04();
    setDispBlock4(true);
  };

  const SetDispBlock5 = (mode: boolean) => {
    setCurrency05((FORM5 = "0"));
    setCurrency03((FORM3 = "0"));
    setDispBlock5(mode);
    setDispBlock0(false);
    //dispBlock11 && setDispBlock11(false);
  };

  const ClickKnop6 = () => {
    ILLUM = 6;
    Turn06();
    setDispBlock6(true);
  };

  const ClickSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      if (event.target.value.length > 2) {
        soob = "Здесь будет поиск по ключу из 3-х символов";
        setOpenSetErr(true);
        setValueInp("");
      } else setValueInp(event.target.value.trimStart()); // удаление пробелов в начале строки
    }
  };

  React.useEffect(() => {
    console.log("Selected user changed to:", selectedUser);
    if (selectedUser) {
      ILLUM = loggedInUser.login === selectedUser ? 1 : 0;
      Turn01();
      setDispBlock1(true);
      dispatch(fetchPersonProfile(selectedUser, "personAbsence"));
    }
  }, [selectedUser, dispatch, loggedInUser.login, Turn01]);

  const selectedUserProfile = useSelector(
    (state: any) => state.selectedUserProfile
  );

  //=== Закрытие или перезапуск вкладки ====================
  React.useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  const handleTabClosing = () => {
    console.log("3пришло:");
    removePlayerFromGame();
  };

  const alertUser = (event: any) => {
    console.log("2пришло:", event);
    // ev = JSON.parse(JSON.stringify(event));
    ////StatusQuo(false);
    //  event.preventDefault();
    //  event.returnValue = "";
  };

  function removePlayerFromGame() {
    throw new Error("Function not implemented.");
  }
  //=== Компоненты =========================================
  const StrokaMenuGlob = (
    mode: number,
    wdth: number,
    currency: any,
    currencies: any
  ) => {
    let widthBlok = (widthGl / 12) * wdth - 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      ILLUM = mode;
      let evTV = event.target.value === "0" ? "1" : event.target.value;
      switch (mode) {
        case 3: // Справочная информация
          setCurrency03(evTV);
          FORM3 = evTV;
          ILLUM = 3;
          dispBlock1 && setDispBlock1(false);
          dispBlock2 && setDispBlock2(false);
          setDispBlock3(true);
          dispBlock4 && setDispBlock4(false);
          dispBlock5 && setDispBlock5(false);
          dispBlock6 && setDispBlock6(false);
          dispBlock0 && setDispBlock0(false);
          break;
        case 5: // Ввод данных
          setCurrency05(evTV);
          FORM5 = evTV;
          ILLUM = 5;
          dispBlock1 && setDispBlock1(false);
          dispBlock2 && setDispBlock2(false);
          dispBlock3 && setDispBlock3(false);
          dispBlock4 && setDispBlock4(false);
          setDispBlock5(true);
          dispBlock6 && setDispBlock6(false);
          dispBlock0 && setDispBlock0(false);
      }
    };

    return (
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirect(mode, handleChange, widthBlok, currency, currencies)}
      </Box>
    );
  };

  const actionKnop0 = () => {
    return (
      <Grid item xs={1.5} onClick={() => ClickLogo()}>
        <Box sx={{ width: (widthGl / 12) * 1.5 - 3 }}>
          <Box sx={styleMain02}>
            <b>deeplay</b>
          </Box>
        </Box>
      </Grid>
    );
  };

  const actionKnop1 = () => {
    return (
      <Grid item xs={1.35} sx={{ border: 0 }}>
        <Button sx={styleMain04(1.35, ILLUM, 1)} onClick={() => ClickKnop1()}>
          Личный кабинет
        </Button>
      </Grid>
    );
  };

  const actionKnop2 = () => {
    return (
      <Grid item xs={1.6} sx={{ border: 0 }}>
        <Button sx={styleMain04(1.6, ILLUM, 2)} onClick={() => ClickKnop2()}>
          Мои подразделения
        </Button>
      </Grid>
    );
  };

  const actionKnop4 = () => {
    return (
      <Grid item xs={0.9} sx={{ border: 0 }}>
        <Button sx={styleMain04(0.9, ILLUM, 4)} onClick={() => ClickKnop4()}>
          Аналитика
        </Button>
      </Grid>
    );
  };

  const actionKnop6 = () => {
    return (
      <Grid item xs={1.5} sx={{ border: 0 }}>
        <Button sx={styleMain04(1.5, ILLUM, 6)} onClick={() => ClickKnop6()}>
          Администрирование
        </Button>
      </Grid>
    );
  };

  let inpLength = (window.innerWidth / 12) * 1.6 - 20;

  return (
    <>
      <Grid container sx={styleMain01}>
        <Grid item xs={12} sx={{ height: "30px" }}>
          <Grid container sx={{ height: "30px", fontSize: 12.9 }}>
            {/* Логотип */}
            {actionKnop0()}
            {/* Личный кабинет */}
            {actionKnop1()}
            {/* Мои подразделения */}
            {actionKnop2()}
            <Grid item xs={1.9} sx={{ border: 0 }}>
              {/* Справочная информация */}
              <Box>{StrokaMenuGlob(3, 1.9, currency03, currencies03)}</Box>
            </Grid>
            {/* Аналитика по подразделениям */}
            {actionKnop4()}
            <Grid item xs={1.15} sx={{ border: 0 }}>
              {/* Ввод данных */}
              <Box>{StrokaMenuGlob(5, 1.15, currency05, currencies05)}</Box>
            </Grid>
            {/* Администрирование */}
            {actionKnop6()}

            <Grid item xs={0.5} sx={styleMain05}>
              🔔👤
            </Grid>
            <Grid item xs={1.6}>
              <Box sx={{ cursor: "pointer" }}>
                {/* 🔍 Поиск */}
                {InputStrFieldSearch(inpLength, ClickSearch, valueInp)}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {dispBlock0 && (
          <HcmBl0Form101
            onUserSelect={(username: string) => {
              setSelectedUser(username);
            }}
          />
        )}
        {dispBlock1 && selectedUserProfile && (
          <HcmBlock1Gl
            person={selectedUserProfile}
            idx={RandomNumber(1, 10000)}
          />
        )}
        {dispBlock2 && <HcmBlock2Gl idx={RandomNumber(1, 10000)} />}
        {dispBlock3 && <HcmBlock3Disp setOpen={SetDispBlock3} />}
        {dispBlock4 && <HcmBlock4Gl idx={RandomNumber(1, 10000)} />}
        {dispBlock6 && <HcmBlock6Gl idx={RandomNumber(1, 10000)} />}
      </Grid>

      {dispBlock5 && <HcmBlock5Disp setOpen={SetDispBlock5} />}
      {openSetErr && <HcmErrorMessage sErr={soob} setOpen={setOpenSetErr} />}
    </>
  );
};

export default HcmMain;

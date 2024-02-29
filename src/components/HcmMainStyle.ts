//=== HcmMain =========================================================
export const styleMain01 = {
  height: "99.9vh",
  //background: 'linear-gradient(135deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
  // этюд в зелёных тонах:
  //background: 'linear-gradient(135deg, #e2e5b9 25%,#a8c6a4 52%, #dadec3 85%)',
  // этюд в сиреневых тонах:
  background: "linear-gradient(140deg, #e3d8f7 26%,#dcbaf1 57%, #f8d7f7 85%)",
  padding: "2px 1px 0px 1px",
  //opacity: 0.99,
};

export const styleMain02 = {
  fontSize: 17,
  //bgcolor: '#BDE6FB', // голубой
  //bgcolor: '#EFDE7E', // светло оранжевый
  bgcolor: "#7620a2", // сиреневый
  textAlign: "center",
  //border: '3px solid #EFDE7E', // светло оранжевый
  border: "3px solid #7620a2", // сиреневый
  borderRadius: 1,
  color: "background.paper",
  padding: "0px 0px 1px 0px",
  marginRigth: 10,
  boxShadow: 3,
  cursor: "pointer",
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleMain03 = {
  bgcolor: "#FFFEF7",
  //border: '3px solid #FFFEF7', // молоко
  //border: 1,
  borderRadius: 1,
  //padding: '0px 0px 0px 6px',
  boxShadow: 3,
};

export const styleMain04 = (part: number, ILLUM: number, mode: number) => {
  const styleMain040 = {
    fontSize: ILLUM === mode ? 13.5 : 12.5,
    height: "30px",
    width: ((window.innerWidth - 3) / 12) * part - 3,
    //bgcolor: ILLUM === mode ? '#BAE186' : '#E6F5D6', // тёмно-салатовый/светло-салатовый
    bgcolor: ILLUM === mode ? "#82e94a" : "#E6F5D6", // ярко-салатовый/светло-салатовый
    //bgcolor: ILLUM === mode ? "#82e94a" : "#F4E8FB", // ярко-салатовый/светло-сиреневый
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    color: "black",
    textTransform: "unset !important",
    //padding: "2px 0px 2px 0px",
    boxShadow: ILLUM === mode ? 9 : 3,
    //textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  };
  return styleMain040;
};

export const styleMain05 = {
  border: 0,
  fontSize: 19,
  cursor: "pointer",
  textAlign: "center",
  padding: "3px 0px 0px 0px",
};

export const styleModalEnd = {
  position: "absolute",
  top: "0%",
  left: "auto",
  right: "-0%",
  height: "21px",
  maxWidth: "2%",
  minWidth: "2%",
  color: "#801F95", // сиреневый
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleModalEndBig = {
  position: "absolute",
  top: "0%",
  left: "auto",
  right: "-0.45%",
  height: "21px",
  maxWidth: "2%",
  minWidth: "2%",
  color: "#801F95", // сиреневый
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};
//=== HcmBlock1 =======================================================
export const styleBl1Form01 = {
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  boxShadow: 9,
};

export const styleBl1Form02 = {
  border: 1,
  height: "214px",
  marginTop: "15px",
  //padding: "20px 10px 0px 18px",
};

export const styleBl1Form03 = {
  marginLeft: "12px",
  marginTop: "-12px",
  fontSize: 14,
  color: "#5B1080",
};

export const styleBl1Form04 = {
  marginLeft: "10px",
  marginTop: "9px",
};

export const styleBl1Form05 = {
  height: "180px",
  width: "180px",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: 9,
};

export const styleBl1Form06 = (part: number) => {
  const styleBl1Form = {
    overflowX: "auto",
    // height: window.innerHeight - 375,
    height: window.innerHeight - part,
    textAlign: "center",
  };
  return styleBl1Form;
};

export const styleBl1Form07 = {
  fontSize: 14,
  textAlign: "center",
  bgcolor: "#95BCF2", // ярко-голубой
  borderColor: "#95BCF2", // ярко-голубой
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  color: "#7620a2", // сиреневый
  padding: "3px 0px 3px 0px",
};

export const styleBl1Form077 = {
  fontSize: 14,
  textAlign: "center",
  bgcolor: "#95BCF2", // ярко-голубой
  borderColor: "#95BCF2", // ярко-голубой
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  color: "#7620a2", // сиреневый
};

export const styleBl1Form0777 = {
  fontSize: 14,
  bgcolor: "#95BCF2", // ярко-голубой
  borderColor: "#95BCF2", // ярко-голубой
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  color: "#7620a2", // сиреневый
  padding: "3px 0px 3px 21px",
};

export const styleBl1Form08 = {
  padding: "5px 0px 5px 0px",
  border: 0,
};

export const styleBl1Form088 = {
  padding: "2px 0px 2px 0px",
  border: 0,
};

export const styleBl1Form09 = (brb: string) => {
  const stylePKForm3 = {
    textAlign: "center",
    padding: "10px 0px 10px 0px",
    borderBottom: brb,
  };
  return stylePKForm3;
};

export const styleBl1Form099 = (brb: number) => {
  const stylePKForm33 = {
    textAlign: "left",
    padding: "10px 0px 10px 0px",
    borderBottom: brb,
  };
  return stylePKForm33;
};

export const styleBl1Form0999 = (brb: number) => {
  const stylePKForm33 = {
    textAlign: "left",
    padding: "10px 0px 10px 18px",
    borderBottom: brb,
  };
  return stylePKForm33;
};

export const styleBl1Form011 = (part: number) => {
  const styleBl1Form = {
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    marginTop: 1,
    height: window.innerHeight - part,
  };
  return styleBl1Form;
};

export const styleBl1Form12 = {
  fontSize: 12.9,
  height: "20px",
  width: "190px",
  marginTop: "-5px",
  color: "#5B1080", // сиреневый
  textTransform: "unset !important",
  //textDecoration: 'underline!important',
};

export const styleBl1Form14 = {
  fontSize: 12.9,
  height: "30px",
  width: "230px",
  bgcolor: "#E6F5D6", // светло-салатовый
  border: "1px solid #d4d4d4", // серый
  borderRadius: 1,
  color: "#5B1080", // сиреневый
  textTransform: "unset !important",
  boxShadow: 3,
};

export const styleBl1Form15 = {
  fontSize: 13.5,
  height: "15px",
  color: "#5B1080", // сиреневый
  textTransform: "unset !important",
  textDecoration: "underline!important",
};

export const styleBl1Form16 = {
  fontSize: 15.4,
  fontWeight: 400,
  height: "15px",
  color: "#5B1080", // сиреневый
  textTransform: "unset !important",
  textDecoration: "underline!important",
};
//=== HcmBlock2 =======================================================
export const styleBl2Gl01 = {
  border: 0,
  marginTop: 2,
  height: window.innerHeight - 52,
  padding: "0px 1px 0px 1px",
};

export const styleBl2Gl02 = {
  fontSize: 12.9,
  height: "30px",
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  color: "#5B1080", // сиреневый
  boxShadow: 6,
  padding: "3px 0px 0px 5px",
};

export const styleBl2Form00 = (part: number, mt: number) => {
  const styleBl2Form = {
    marginTop: mt,
    height: part,
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 9,
    padding: "0px 1px 0px 1px",
  };
  return styleBl2Form;
};

export const styleBl2Form01 = {
  overflowX: "auto",
  height: window.innerHeight - 175,
  textAlign: "center",
};

export const styleBl2Form02 = (part: number) => {
  const styleBl2Form = {
    fontSize: 15,
    textAlign: "left",
    bgcolor: "#F1F5FB", // светло серый
    border: "1px solid #d4d4d4",
    borderRadius: 1,
    color: "#5B1080", // сиреневый
    boxShadow: 3,
    padding: "0px 20px 14px 20px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    height: window.innerHeight - part,
    overflowX: "auto",
  };
  return styleBl2Form;
};

export const styleBl2Form03 = (part: number) => {
  const styleBl2Form = {
    fontSize: 14,
    bgcolor: "#F1F5FB", // светло серый
    border: "1px solid #d4d4d4",
    borderRadius: 1,
    color: "#5B1080", // сиреневый
    boxShadow: 3,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    height: window.innerHeight - part,
  };
  return styleBl2Form;
};

export const styleBl2Form04 = (part: number) => {
  const styleBl2Form = {
    overflowX: "auto",
    height: window.innerHeight - part,
    textAlign: "center",
  };
  return styleBl2Form;
};

export const styleBl2Form05 = {
  border: 0,
  marginTop: "10px",
  height: window.innerHeight - 195,
};

export const styleBl2Form06 = {
  fontSize: 12.0,
  height: "24px",
  width: (window.innerWidth - 3) / 12 - 3,
  border: "1px solid #d4d4d4", // серый
  borderRadius: 1,
  color: "black",
  textAlign: "center",
  padding: "6px 0px 0px 0px",
};

export const styleBl2Form07 = {
  textAlign: "center",
  color: "#F68A1E", // оранж
  padding: "5px 0px 0px 0px",
  height: "30px",
};

export const styleBl2Form08 = {
  color: "#5B1080",
  cursor: "pointer",
};
//=== HcmBlock3 =======================================================
export const styleBl3Form01 = (part: number) => {
  const styleBl3Form = {
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    margin: "5px 2px 0px 1px",
    height: window.innerHeight - part,
  };
  return styleBl3Form;
};
//=== HcmBlock4 =======================================================
export const styleBl4Form01 = (part: number) => {
  const styleBl4Form = {
    height: part,
    border: 0,
    padding: "0px 5px 5px 5px",
  };
  return styleBl4Form;
};

export const styleBl4Form02 = {
  fontSize: 15,
  textAlign: "center",
  color: "#7620a2", // сиреневый
  margin: "5px 0 10px 0",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
};

export const styleBl4Form03 = (part: number) => {
  const styleBl4Form = {
    fontSize: 15,
    textAlign: "left",
    bgcolor: "#F1F5FB", // светло серый
    border: "1px solid #d4d4d4",
    borderRadius: 1,
    color: "#5B1080", // сиреневый
    boxShadow: 6,
    padding: "0px 20px 14px 20px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    height: part,
  };
  return styleBl4Form;
};
//=== HcmBlock5 =======================================================
export const styleBl5Form00 = (wdth: number, hdth: number) => {
  const styleSetPK01 = {
    outline: "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: wdth,
    height: hdth,
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: "center",
    padding: "1px 10px 10px 10px",
  };
  return styleSetPK01;
};

export const styleBl5Form01 = {
  fontSize: 20,
  textAlign: "center",
  color: "#7620a2", // сиреневый
  margin: "5px 0 10px 0",
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleBl5Form02 = {
  fontSize: 15,
  textAlign: "left",
  bgcolor: "#F1F5FB", // светло серый
  border: "1px solid #d4d4d4",
  borderRadius: 1,
  color: "#5B1080", // сиреневый
  boxShadow: 3,
  //margin: "1px 0 1px 0",
  padding: "0px 20px 14px 20px",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  //height: 380, //=====================================================
};

export const styleBl5Form03 = {
  fontSize: 15,
  color: "#5B1080",
  //border: '1px dashed #5B1080',
  //padding: "0px 2px 1px 5px",
};

export const styleBl5Form04 = {
  fontSize: 15,
  marginTop: "-5px",
  height: "30px",
  width: "190px",
};

export const styleBl5Form05 = {
  height: "30px",
  maxWidth: "124px",
  minWidth: "124px",
};

export const styleBl5Form06 = {
  bgcolor: "#FFFBE5", // топлёное молоко
  height: "30px",
  width: "150px",
};
//=== HcmBlock6 =======================================================
export const styleBl6Form01 = {
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  marginTop: "5px",
  height: window.innerHeight - 95,
};

export const styleBl6Form02 = {
  textAlign: "left",
  marginTop: "20px",
  color: "#5B1080",
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleBl6Form03 = {
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  boxShadow: 3,
};
//=== Разное ==========================================================
export const styleInpOk = {
  fontSize: 15,
  height: "27px",
  width: "15px",
};

export const styleButOk = {
  fontSize: 12,
  marginRight: 1,
  height: "27px",
  maxWidth: "30px",
  minWidth: "30px",
  bgcolor: "#E9F5D8", // светло салатовый
  color: "black",
  border: "1px solid #000",
  borderColor: "#d4d4d4", // серый
  borderRadius: 1,
  boxShadow: 4,
  textTransform: "unset !important",
};

export const styleModalMenu = {
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

export const styleSetPK01 = {
  outline: "none",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 333,
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  boxShadow: 24,
  textAlign: "center",
  padding: "5px 10px 12px 12px",
};
//=====================================================================

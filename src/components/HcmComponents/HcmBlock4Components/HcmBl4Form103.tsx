import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { InputDirectA, PreparCurrencies041 } from "../../HcmServiceFunctions";
import { PreparCurrencies042 } from "../../HcmServiceFunctions";

import { styleBl1Form011, styleBl4Form01 } from "../../HcmMainStyle";
import { styleBl4Form02, styleBl4Form03 } from "../../HcmMainStyle";
//import { styleBl1Form011 } from "../../HcmMainStyle";

import { widthGl } from "../../HcmMain";

import { Chart as ChartJS, CategoryScale } from "chart.js";
import { LinearScale, PointElement } from "chart.js";
import { LineElement, Title, Tooltip, Legend } from "chart.js";
import { BarElement, ArcElement } from "chart.js";
//import { Line } from "react-chartjs-2"; // график
//import { Doughnut } from "react-chartjs-2"; // бублик
import { Bar } from "react-chartjs-2"; // Гистограмма
import { Pie } from "react-chartjs-2"; // круговая диограмма
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

let labelsGist = [
  "ИТ Отдел",
  "1С автоматизация",
  "Тренер",
  "Поддержка пользователей",
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

let currencies01: any = []; // Подразделение
let currencies02: any = []; // Период

//let partHeight = 152;
let heightBlock = window.innerHeight / 1.6;

let flagOpen = false;

const HcmBl4Form103 = () => {
  const [currency01, setCurrency01] = React.useState("0");
  const [currency02, setCurrency02] = React.useState("0");
  //=== инициализация ======================================
  if (!flagOpen) {
    currencies01 = PreparCurrencies041(); // Подразделение
    currencies02 = PreparCurrencies042(); // Период
    flagOpen = true;
  }
  //========================================================

  const StrokaMenuGlob = (
    mode: number,
    wdth: number,
    currency: any,
    currencies: any
  ) => {
    let widthBlok = (widthGl / 12) * wdth - 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Подразделение
          setCurrency01(event.target.value);
          break;
        case 2: // Период
          setCurrency02(event.target.value);
      }
    };

    return (
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirectA(mode, handleChange, widthBlok, currency, currencies)}
      </Box>
    );
  };

  const BarChart03 = () => {
    const data = {
      labels: labelsGist,
      datasets: [
        {
          label: "Вовремя",
          data: [3, 1, 3, 2],
          backgroundColor: "#80C3F1", // голубой
        },
        {
          label: "Просрочены",
          data: [1, 0, 1, 0],
          backgroundColor: "#636367", // тёмно-серый
        },
      ],
    };

    return (
      <Box sx={{ width: "99%", height: "99%" }}>
        <Bar options={options} data={data} />
      </Box>
    );
  };

  const PieChart = () => {
    const data = {
      labels: ["Выполнены", "Просрочены"],
      datasets: [
        {
          data: [81.8, 18.2],
          backgroundColor: ["#80C3F1", "#636367"],
        },
      ],
    };
    return (
      <Box sx={{ width: "99%", height: "99%" }}>
        <Pie data={data} options={options} />
        {/* <Doughnut data={data} options={options} />; */}
      </Box>
    );
  };

  return (
    <>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={6} sx={{}}>
          <Grid container>
            {/* Подразделение */}
            <Grid item xs={4} sx={{ height: "30px", border: 0 }}>
              <Box>{StrokaMenuGlob(1, 2, currency01, currencies01)}</Box>
            </Grid>
            {/* Период */}
            <Grid item xs={4} sx={{ height: "30px", border: 0 }}>
              <Box>{StrokaMenuGlob(2, 2, currency02, currencies02)}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container sx={styleBl3Form01(partHeight)}> */}
      <Grid container sx={styleBl1Form011(140)}>
        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>Задачи по запуску процесса Onboarding</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 60)}>{BarChart03()}</Box>
        </Grid>

        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>Задачи Onboarding</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 60)}>{PieChart()}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HcmBl4Form103;

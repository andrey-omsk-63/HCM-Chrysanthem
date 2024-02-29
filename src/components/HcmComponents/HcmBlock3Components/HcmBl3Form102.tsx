import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

import { styleBl3Form01 } from '../../HcmMainStyle';

const HcmBl3Form102 = () => {
  return (
    <Grid container sx={styleBl3Form01(48)}>
      <Grid item xs={12}>
        <Box sx={{ fontSize: 16, marginTop: -1.75, marginLeft: 2 }}>
          <b>Справочная информация ➤ Структура компани</b>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl3Form102;

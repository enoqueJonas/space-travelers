import { createAsyncThunk } from '@reduxjs/toolkit';
import { MISSIONS_RETRIEVED } from './missions';

const getMissions = createAsyncThunk(MISSIONS_RETRIEVED, async () => {
  const res = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  return data;
});

export default getMissions;
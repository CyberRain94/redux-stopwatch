import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface StopwatchState {
  isRunning: boolean;
  elapsedTime: number;
}

const initialState: StopwatchState = {
  isRunning: false,
  elapsedTime: 0,
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    start: state => {
      state.isRunning = true;
    },
    stop: state => {
      state.isRunning = false;
    },
    reset: state => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    tick: state => {
      state.elapsedTime += 1;
    },
  },
});
export const { start, stop, reset, tick } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
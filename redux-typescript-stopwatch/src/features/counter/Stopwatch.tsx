import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { start, stop, reset, tick } from './stopwatchSlice';
import { RootState } from '../../app/store';
import styles from "./Stopwatch.module.css"
const Stopwatch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isRunning, elapsedTime } = useAppSelector((state: RootState) => state.stopwatch);
  const intervalRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (isRunning && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
  }, [isRunning, dispatch]);
  const formatTime = (seconds: number): string => {
    const hours = (seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  return (
    <div>
      <span className={styles.value}>Time {formatTime(elapsedTime)}</span>
      <div className={styles.row}>
      <button className={styles.button}
              aria-label="start" 
              onClick={() => dispatch(start())}>Start</button>
      <button className={styles.button}
              aria-label="stop" 
              onClick={() => dispatch(stop())}>Stop</button>
      <button className={styles.button}
              aria-label="reset" 
              onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

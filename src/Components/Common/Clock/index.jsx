import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Turret Road',
  },
  data: {
    fontSize: '1.5em',
    marginTop: theme.spacing(3),
  },
  time: {
    fontSize: '4em',
    marginTop: theme.spacing(1),
  },
}));

export const Clock = () => {
  const style = useStyles();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => setTime(moment().format('HH:mm:ss')), 1000);
    const month = setInterval(() => setDate(moment().format('MMM Do')), 1000);

    return () => {
      clearInterval(interval, month);
    };
  }, []);

  return (
    <>
      <div className={style.root}>
        <span className={style.data}>{date}</span>
        <span className={style.time}>{time}</span>
      </div>
    </>
  );
};

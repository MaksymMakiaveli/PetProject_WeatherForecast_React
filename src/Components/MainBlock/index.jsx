import React, { useEffect } from 'react';
import { CardWeather } from '../CardWeather';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import { Typography, makeStyles } from '@material-ui/core';
import { Form } from '../Form';
import { Clock } from '../Common/Clock';
import { useLocation } from '../../hooks/useLocation';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationUser } from '../../store/WeatherReducer';

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'Dancing Script',
    color: 'rgba(4, 30, 45, 0.8)',
  },
  icon: {
    fontSize: '4em',
    color: 'rgba(0, 138, 255, 0.7)',
  },
}));

export const MainBlock = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useSelector((state) => state.weather.data);

  useEffect(() => {
    dispatch(getLocationUser(location.coordinates.lat, location.coordinates.lng));
  }, [location.coordinates]);

  return (
    <>
      <CloudOutlinedIcon className={style.icon} color='primary' />
      <Typography className={style.text} component='h1' variant='h4'>
        Weather Project
      </Typography>
      <CardWeather data={data} />
      <Form />
      <Clock />
    </>
  );
};

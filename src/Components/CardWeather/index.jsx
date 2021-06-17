import React from 'react';
import weatherImg from '../../Common/img/favicon1-removebg-preview.png';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Preloader } from '../Preloader';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0.45)',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 1),
    minWidth: '50%',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoTitle: {
    fontWeight: 300,
  },
  image: {
    minHeight: 80,
    minWidth: 80,
  },
}));

export const CardWeather = ({ data }) => {
  const style = useStyles();

  if (!data) return <Preloader />;

  const convertKelvin = (kelvin) => {
    const temp = kelvin - 273.15;
    return temp.toFixed(1);
  };

  const celsius = convertKelvin(data.main.temp);
  return (
    <Card className={style.root}>
      <CardContent className={style.cardContent}>
        <Typography className={style.infoTitle} component='h2' variant='h6'>
          City:
        </Typography>
        <Typography component='h2' variant='h6'>
          {data.name}
        </Typography>
        <CardMedia className={style.image} image={weatherImg} />
        <Typography component='p'>{celsius}° С</Typography>
      </CardContent>
    </Card>
  );
};

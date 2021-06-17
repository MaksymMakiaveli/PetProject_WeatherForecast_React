import { makeStyles } from '@material-ui/core';
import React from 'react';
import preloader from '../../Common/img/preloader.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    background: ' transparent',
  },
}));

export const Preloader = () => {
  const style = useStyles();
  return (
    <>
      <img src={preloader} alt='preloader' />
    </>
  );
};

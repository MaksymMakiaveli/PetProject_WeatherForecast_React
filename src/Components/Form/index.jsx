import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, InputBase, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    background: 'rgba(255, 255, 255, 0.40)',
  },
  input: {
    margin: '5px 0px 3px 0px',
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    background: 'rgba(46, 113, 205, 0.70)',
    borderRadius: '0',
    color: '#fff',
  },
}));

export const Form = () => {
  const style = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { city } = data;
    const newCity = city.replaceAll(' ', '');
    console.log(newCity);
  };

  // * переобразование в строку пробнный метод
  // const count = (num) => {
  //   const str = num.toString();
  //   const sum = str.substring(str.indexOf('.') + 1); // * рабочий метод
  //   return sum;
  // };
  // console.log(count(22.45));

  // const num = 311.24;
  // const b = num - Math.floor(num);
  // console.log('b: ', b);

  // const numN = 311.24;
  // const str = numN.toString();
  // const sum = str.substring(str.indexOf('.') + 1);
  // console.log(sum);

  // const num = 311.24;
  // const m = ('' + num).split('.').splice(1, 1); // * тоже рабочий метод
  // console.log('m: ', m);

  return (
    <form className={style.root} noValidate onSubmit={handleSubmit(onSubmit)}>
      <InputBase name='search' className={style.input} placeholder='Search City' {...register('city')} />
      <IconButton type='submit' className={style.iconButton}>
        <SearchIcon />
      </IconButton>
    </form>
  );
};

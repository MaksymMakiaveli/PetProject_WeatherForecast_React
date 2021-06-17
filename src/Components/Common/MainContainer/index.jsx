import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 1, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(244, 244, 244, 0.20);',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 );',
    backdropFilter: 'blur(50.0px);',
    borderRadius: '10px;',
    border: '1px solid rgba( 255, 255, 255, 0.18 );',
  },
}));

export const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container className={styles.root} component='div' maxWidth='sm' {...props}>
      {children}
    </Container>
  );
};

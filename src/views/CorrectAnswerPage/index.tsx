import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';

const styles = (theme: Theme) => ({
  root: {
    height: '100%',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  button: {
    marginTop: 20,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
  },
});

const useStyles = makeStyles(styles);
const FINAL_COUNT = 5000;
const TICK = 1000;

const CorrectAnswerPage: FunctionComponent = () => {
  const classes = useStyles({});
  const [count, setCount] = useState(FINAL_COUNT);

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push(apiPath.quiz);
    }, FINAL_COUNT);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timerId = setInterval(
      () => { setCount(count - TICK); },
      TICK,
    );
    const timer = setTimeout(() => {
      clearInterval(timerId);
    }, FINAL_COUNT);
    return () => {
      clearTimeout(timer);
      clearInterval(timerId);
    };
  }, [count]);

  const handleClickNext = () => {
    history.push(apiPath.quiz);
  };

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
      <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.title}>
        <Typography variant="h2">Correct!</Typography>
        <Typography variant="h5">
          {`Next question in ${count / 1000} seconds`}
        </Typography>
      </Grid>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => handleClickNext()}
      >
        Next Question
      </Button>
    </Grid>
  );
};

export default CorrectAnswerPage;

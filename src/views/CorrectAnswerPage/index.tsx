import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';
import DogButton from '../../components/DogButton';

const styles = (theme: Theme) => ({
  root: {
    flex: 1,
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  buttonContainer: {
    marginTop: 20,
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
      <Grid className={classes.buttonContainer}>
        <DogButton
          click={() => handleClickNext()}
          title="Next Question"
        />
      </Grid>
    </Grid>
  );
};

export default CorrectAnswerPage;

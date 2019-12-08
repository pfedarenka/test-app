import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import actions from '../../store/game/actions';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const QuestionPage: FunctionComponent = () => {
  const classes = useStyles({});

  const dispatch = useDispatch();
  const { initQuestion } = actions;
  const dispatchNextQuestion = useCallback(
    () => dispatch(initQuestion()),
    [dispatch, initQuestion],
  );

  useEffect(() => {
    dispatchNextQuestion();
  }, [dispatchNextQuestion]);

  return (
    <Grid className={classes.root}>
      QUIZ PAGE
    </Grid>
  );
};

export default QuestionPage;

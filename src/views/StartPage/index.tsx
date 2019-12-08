import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import actions from '../../store/game/actions';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const StartPage: FunctionComponent = () => {
  const classes = useStyles();
  const { getAllBreeds } = actions;
  const { isResult } = useSelector(
    (state: AppState) => state.game,
  );
  const dispatch = useDispatch();
  const dispatchGetBreeds = useCallback(() => dispatch(getAllBreeds()), [
    dispatch,
    getAllBreeds,
  ]);

  useEffect(() => {
    if (isResult) {
      return;
    }

    dispatchGetBreeds();
  }, [isResult, dispatchGetBreeds]);

  return (
    <Grid className={classes.root}>
      START PAGE
    </Grid>
  );
};

export default StartPage;

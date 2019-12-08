import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import actions from '../../store/game/actions';
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

const StartPage: FunctionComponent = () => {
  const classes = useStyles({});
  const { getAllBreeds } = actions;
  const { isResult, breedsLoading } = useSelector(
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

  const handleClickStart = () => {
    history.push(apiPath.quiz);
  };

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
      <Typography variant="h2" className={classes.title}>Who wants to be a dogellionare?</Typography>
      <Button
        disabled={breedsLoading}
        size="large"
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => handleClickStart()}
      >
        Start
      </Button>
    </Grid>
  );
};

export default StartPage;

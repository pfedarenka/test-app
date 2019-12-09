import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import actions from '../../store/game/actions';
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
      <Grid className={classes.buttonContainer}>
        <DogButton
          disabled={breedsLoading}
          click={() => handleClickStart()}
          title="Start"
        />
      </Grid>
    </Grid>
  );
};

export default StartPage;

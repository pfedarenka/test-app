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
  subTitle: {
    marginTop: 10,
    lineHeight: '98%',
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
      <Grid className={classes.title}>
        <Typography variant="h2">Who wants to be a dogellionare?</Typography>
        <Typography variant="subtitle1" align="center" className={classes.subTitle}>
          It’s a quiz which will test your knowledge of dogs breeds.
          <br />
          You will be given an image of a dog and 4 answers.
          <br />
          Let’s see how good are you at knowing your good boys and girls.
        </Typography>
      </Grid>
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

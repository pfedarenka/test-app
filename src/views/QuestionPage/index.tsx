import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/game/actions';
import { AppState } from '../../store';
import QuizButtons from '../../components/QuizButtons';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';

const WON_CONDITION = 15;

const styles = (theme: Theme) => ({
  root: {
    flex: 1,
    maxWidth: 700,
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  picture: {
    margin: 10,
  },
});

const useStyles = makeStyles(styles);

const QuestionPage: FunctionComponent = () => {
  const classes = useStyles({});
  const {
    correctCount, image, choices, correctAnswer, loading,
  } = useSelector(
    (state: AppState) => state.game,
  );

  const dispatch = useDispatch();
  const { initQuestion, initChoose } = actions;
  const dispatchNextQuestion = useCallback(
    () => dispatch(initQuestion()),
    [dispatch, initQuestion],
  );

  const dispatchInitChoose = (breed: string) => dispatch(initChoose(breed));

  useEffect(() => {
    dispatchNextQuestion();
  }, [dispatchNextQuestion]);

  const buttonClick = (breed: string) => {
    if (breed === correctAnswer) {
      if (correctCount === WON_CONDITION) {
        history.push(apiPath.victory);
        return;
      }
      dispatchInitChoose(breed);
      history.push(apiPath.correct);
    } else {
      history.push(apiPath.gameOver);
    }
  };

  if (loading) {
    return (
      <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
        <Typography variant="h5" className={classes.title}>Loading...</Typography>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
      <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.title}>
        <Typography variant="h4">{`${correctCount}/16`}</Typography>
        <Typography variant="h5">Which breed is this dog?</Typography>
      </Grid>
      <Grid className={classes.picture}>
        <img src={image} alt="breed" width="300" />
      </Grid>
      <QuizButtons
        choices={choices}
        click={buttonClick}
      />
    </Grid>
  );
};

export default QuestionPage;

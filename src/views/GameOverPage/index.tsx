import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';
import { restartQuiz } from '../../store/game/actions';

const styles = (theme: Theme) => ({
  root: {
    height: '100%',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  picture: {
    margin: 10,
  },
  button: {
    marginTop: 20,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
  },
});

const useStyles = makeStyles(styles);

const GameOverPage: FunctionComponent = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const dispatchRestartQuiz = () => dispatch(restartQuiz());

  const { image, correctAnswer } = useSelector(
    (state: AppState) => state.game,
  );

  const handleClickAgain = () => {
    dispatchRestartQuiz();
    history.push(apiPath.quiz);
  };

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
      <Typography variant="h2" className={classes.title}>Game Over</Typography>
      <Grid className={classes.picture}>
        <img src={image} alt="breed" width="300" />
      </Grid>
      <Typography variant="h4" className={classes.title}>
        {`This dog is a ${correctAnswer}`}
      </Typography>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => handleClickAgain()}
      >
        Play Again
      </Button>
    </Grid>
  );
};

export default GameOverPage;

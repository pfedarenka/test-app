import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
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
    marginTop: 10,
  },
});

const useStyles = makeStyles(styles);

const VictoryPage: FunctionComponent = () => {
  const classes = useStyles({});
  const { restartQuiz } = actions;
  const dispatch = useDispatch();
  const dispatchRestartQuiz = () => dispatch(restartQuiz());

  const handleClickAgain = () => {
    dispatchRestartQuiz();
    history.push(apiPath.quiz);
  };

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.root}>
      <Grid container direction="column" wrap="nowrap" alignItems="center" justify="center" className={classes.title}>
        <Typography variant="h2">You won!</Typography>
        <Typography variant="h4">You are a true dog connoisseur!</Typography>
      </Grid>
      <Grid className={classes.buttonContainer}>
        <DogButton
          click={() => handleClickAgain()}
          title="Play Again"
        />
      </Grid>
    </Grid>
  );
};

export default VictoryPage;

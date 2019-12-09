import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
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

export default VictoryPage;

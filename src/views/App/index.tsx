import React, { FunctionComponent } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';
import StartPage from '../StartPage';
import QuestionPage from '../QuestionPage';
import GameOverPage from '../GameOverPage';
import CorrectAnswerPage from '../CorrectAnswerPage';
import VictoryPage from '../VictoryPage';

const styles = (theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    height: '100vh',
  },
});

const useStyles = makeStyles(styles);

const App: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap" direction="column" alignItems="center" className={classes.root}>
      <Router history={history}>
        <Switch>
          <Route exact path={apiPath.root} component={StartPage} />
          <Route path={apiPath.quiz} component={QuestionPage} />
          <Route path={apiPath.gameOver} component={GameOverPage} />
          <Route path={apiPath.victory} component={VictoryPage} />
          <Route path={apiPath.correct} component={CorrectAnswerPage} />
        </Switch>
      </Router>
    </Grid>
  );
};

export default App;

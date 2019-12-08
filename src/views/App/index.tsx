import React, { FunctionComponent } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import history from '../../helpers/history';
import apiPath from '../../constants/api-path';
import StartPage from '../StartPage';
import QuestionPage from '../QuestionPage';
import GameOverPage from '../GameOverPage';
import CorrectAnswerPage from '../CorrectAnswerPage';
import VictoryPage from '../VictoryPage';
import PrivateRoute from '../../helpers/private-route';
import { AppState } from '../../store';

const styles = (theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    height: '100vh',
  },
});

const useStyles = makeStyles(styles);

const App: FunctionComponent = () => {
  const classes = useStyles({});

  const { isLegal } = useSelector(
    (state: AppState) => state.game,
  );

  return (
    <Grid container wrap="nowrap" direction="column" alignItems="center" className={classes.root}>
      <Router history={history}>
        <Switch>
          <Route exact path={apiPath.root} component={StartPage} />
          <PrivateRoute
            path={apiPath.quiz}
            component={QuestionPage}
            isLegal={isLegal}
          />
          <PrivateRoute
            path={apiPath.gameOver}
            component={GameOverPage}
            isLegal={isLegal}
          />
          <PrivateRoute
            path={apiPath.victory}
            component={VictoryPage}
            isLegal={isLegal}
          />
          <PrivateRoute
            path={apiPath.correct}
            component={CorrectAnswerPage}
            isLegal={isLegal}
          />
        </Switch>
      </Router>
    </Grid>
  );
};

export default App;

import React, { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const GameOverPage: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      GAME OVER PAGE
    </Grid>
  );
};

export default GameOverPage;

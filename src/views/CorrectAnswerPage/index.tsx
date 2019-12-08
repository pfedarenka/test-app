import React, { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const CorrectAnswerPage: FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <Grid className={classes.root}>
      CORRECT PAGE
    </Grid>
  );
};

export default CorrectAnswerPage;

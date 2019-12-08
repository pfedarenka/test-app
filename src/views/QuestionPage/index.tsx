import React, { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const QuestionPage: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      QUIZ PAGE
    </Grid>
  );
};

export default QuestionPage;

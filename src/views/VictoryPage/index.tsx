import React, { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const styles = {
  root: {},
};

const useStyles = makeStyles(styles);

const VictoryPage: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      VICTORY PAGE
    </Grid>
  );
};

export default VictoryPage;

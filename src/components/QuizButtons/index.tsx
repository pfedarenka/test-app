import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export interface QuizButtonsProps {
  choices: Array<string>;
  click: (breed: string) => void;
}

const styles = (theme: Theme) => ({
  button: {
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  container: {
    padding: '5px 5px 0 0',
  },
});

const useStyles = makeStyles(styles);

const QuizButtons: FunctionComponent<QuizButtonsProps> = (
  props: QuizButtonsProps,
) => {
  const { choices, click } = props;
  const classes = useStyles({});

  return (
    <Grid container direction="row" wrap="wrap" justify="space-between">
      {choices.map((breed: string) => (
        <Grid item xs={6} className={classes.container} key={breed}>
          <Button
            className={classes.button}
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => click(breed)}
          >
            {breed}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizButtons;

import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core';

export interface DogButtonProps {
  title: string;
  disabled?: boolean;
  click: () => void;
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
});

const useStyles = makeStyles(styles);

const DogButton: FunctionComponent<DogButtonProps> = (
  props: DogButtonProps,
) => {
  const { title, click, disabled } = props;
  const classes = useStyles({});

  return (
    <Button
      disabled={disabled}
      size="large"
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={() => click()}
    >
      {title}
    </Button>
  );
};

DogButton.defaultProps = {
  click: () => null,
  title: 'Button',
};

export default DogButton;

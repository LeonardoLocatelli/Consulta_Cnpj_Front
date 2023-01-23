import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

export default ({ children, className }) => {
  const theme = useTheme();
  const color = theme.palette.type === 'light' ? 'initial' : 'primary';

  return (
    <Typography component="h2" variant="h6" color={color} className={className}>
      {children}
    </Typography>
  );
};

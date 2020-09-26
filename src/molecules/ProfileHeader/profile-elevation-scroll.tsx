import React from 'react';
import { useScrollTrigger } from '@material-ui/core';

const ElevationScroll: React.FunctionComponent = ({ children }: any) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;

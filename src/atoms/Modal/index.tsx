import React from 'react';
import { Dialog, Slide } from '@material-ui/core';

type TransitionProps = {
  children: React.ReactElement;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps,
  ref
) {
  return (
    <Slide direction="up" ref={ref}>
      {props.children}
    </Slide>
  );
});

type Props = {
  open: boolean;
  container: React.ReactNode;
  size: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  toggleModalAction: any;
};

const Modal: React.FunctionComponent<Props> = ({
  open,
  size,
  container,
  toggleModalAction,
}: Props) => {
  const handleClose = () => {
    toggleModalAction({
      open: false,
      container: null,
    });
  };

  return (
    <Dialog
      open={open}
      maxWidth={size}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="dialog"
      aria-describedby="dialog-description"
    >
      {container || ''}
    </Dialog>
  );
};

export default Modal;

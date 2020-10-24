import React from 'react';
import { Dialog, Slide } from '@material-ui/core';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

type Props = {
  open: boolean;
  container: React.ReactNode;
  size: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  toggleModalAction: (payload: any) => {};
};

const Modal: React.FunctionComponent<Props> = ({
  open,
  size,
  container,
  toggleModalAction,
}: Props) => {
  const handleClose = () => {};

  return (
    <Dialog
      open={open}
      maxWidth={size}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      // aria-labelledby="dialog"
      // aria-describedby="dialog-description"
    >
      {container || ''}
    </Dialog>
  );
};

export default Modal;

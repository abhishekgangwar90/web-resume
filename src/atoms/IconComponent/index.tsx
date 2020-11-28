import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: any;
  size?: any;
  style?: any;
};

const IconMail: React.FunctionComponent<Props> = ({
  icon,
  size,
  style,
}: Props) => {
  return (
    <FontAwesomeIcon
      size={size}
      color="rgba(0, 115, 177, 1)"
      style={style}
      icon={icon}
    />
  );
};

IconMail.defaultProps = {
  style: {},
  size: 'lg',
};

export default IconMail;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const IconGithub: React.FunctionComponent<any> = () => {
  return (
    <FontAwesomeIcon
      size="lg"
      color="rgba(0, 115, 177, 1)"
      style={{ marginRight: '0.5rem' }}
      icon={faMapMarkerAlt}
    />
  );
};

export default IconGithub;

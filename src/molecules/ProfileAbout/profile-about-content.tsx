import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ProfileAboutAction = React.lazy(() => import('./profile-about-actions'));

type Props = {
  name: string;
  title: string;
  aboutMe: string;
  location: string;
  actions: Array<any>;
};

const ProfileAboutContent: React.FunctionComponent<Props> = ({
  name,
  title,
  aboutMe,
  location,
  actions,
}: Props) => {
  return (
    <article>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="location">
        <LocationOnIcon />
        {location}
      </div>
      <p>{aboutMe}</p>
      <ProfileAboutAction actions={actions} />
    </article>
  );
};

export default ProfileAboutContent;

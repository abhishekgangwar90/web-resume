import { connect } from 'react-redux';
import ProfileExperience from './profile-experience';
import { toggleModalAction } from '../../state/actions';

export const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, { toggleModalAction })(
  ProfileExperience
);

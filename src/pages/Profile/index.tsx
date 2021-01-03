import { connect } from 'react-redux';
import Profile from './Profile';
import { toggleModalAction } from '../../state/actions';

const mapStateToProps = ({ state }: any) => {
  const { modal } = state;
  return {
    modal,
  };
};

export default connect(mapStateToProps, { toggleModalAction })(Profile);

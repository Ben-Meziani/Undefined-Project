import { connect } from 'react-redux';

import SharedMedia from '../../../components/Room/ShareMedia';
import { toggleOpenShare, changeFileUrl, addFile } from '../../../actions';

const mapStateToProps = (state) => ({
  pictureOpen: state.room.pictureOpen,
  fileURL: state.upload.fileURL,
  files: state.upload.files,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenShare: () => {
    const action = toggleOpenShare();
    dispatch(action);
  },
  changeFileUrl: (fileURL) => {
    const action = changeFileUrl(fileURL);
    dispatch(action);
  },
  addFile: () => {
    const action = addFile();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedMedia);

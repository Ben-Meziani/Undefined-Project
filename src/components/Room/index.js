import React from 'react';
import PropTypes from 'prop-types';

import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from '../../containers/Room/SharedView';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from '../../containers/Room/DicesHistory';
import DicesThrow from '../../containers/Room/DicesThrow';
import PlayerNotes from '../../containers/Room/PlayerNotes';
import PlayersList from '../../containers/Room/PlayersList';
import SharedFiles from '../../containers/Room/SharedFiles';
import ShareMedia from '../../containers/Room/ShareMedia';
import ToolsMenu from '../../containers/Room/ToolsMenu';

import './style.scss';

const Room = ({ logged }) => {
  console.log('dans la room logged vaut', logged);
  return (
    <div className="room-container">
      <div className="static-room">
        <NavBarRoom />
        <PlayersList />
        <SharedView />
        <Chatroom />
        <div className="tools">
          <ToolsMenu />
          <SharedFiles />
          <DicesThrow />
          <DicesHistory />
          <PlayerNotes />
          <ShareMedia />
        </div>
      </div>
    </div>
  );
};

Room.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Room;

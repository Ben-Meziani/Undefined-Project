/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import createIcon from '../../../../assets/icons/feather.svg';

import Field from '../../../HomePage/Forms/Field';

import './style.scss';

const CreateRoom = ({
  changeValue,
  handleDropdown,
  roomName,
  roomPass,
  playersNb,
  createRoom,
  masterRole,
}) => {
  const dropdownChange = (evt, value) => {
    handleDropdown(value.value);
  };
  const handleSubmit = (evt) => {
    // console.log('je lance la requête de création de room');
    evt.preventDefault();
    createRoom();
    // console.log(roomName);
  };

  return (
    <Modal
      className="create-room-modal"
      trigger={<div className="create"><div className="create-container"><p>Créer</p><div className="create-img"><img src={createIcon} alt="create" /></div></div></div>}
    >
      <Modal.Header>Créer une Salle</Modal.Header>

      {masterRole && (
        <Modal.Content image>
          <Modal.Description>
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="room-name">
                  Choisissez un nom pour votre salle
                </label>
                <Field
                  className="create-room-form-input"
                  type="text"
                  placeholder="Nom de la salle"
                  name="roomName"
                  changeValue={changeValue}
                  value={roomName}
                />
              </div>
              <div>
                <label htmlFor="room-password">
                  Choisissez un mot de passe pour vos joueurs
                </label>
                <Field
                  className="create-room-form-input"
                  type="text"
                  placeholder="Mot de passe"
                  name="roomPass"
                  changeValue={changeValue}
                  value={roomPass}
                />
              </div>
              <div className="field">
                <label htmlFor="room-players">
                  Indiquez votre nombre de joueurs
                </label>
                <Dropdown
                  onChange={dropdownChange}
                  options={[
                    { key: 1, text: '1', value: 1 },
                    { key: 2, text: '2', value: 2 },
                    { key: 3, text: '3', value: 3 },
                    { key: 4, text: '4', value: 4 },
                  ]}
                  placeholder="Indiquez le nombre de joueurs"
                  selection
                  value={playersNb}
                />
              </div>
              <div className="field">
                <button
                  className="ui button create-room-submit"
                  type="submit"
                >
                  Créer la salle
                </button>
              </div>
            </form>
          </Modal.Description>
        </Modal.Content>
      )}
      {!masterRole && (
        <div className="success">
          <p>Vous avez déjà une Salle en cours.</p>
          <Link className="go" to="/room">
            Rejoignez la !
          </Link>
        </div>

      )}
    </Modal>
  );
};

CreateRoom.propTypes = {
  changeValue: PropTypes.func.isRequired,
  playersNb: PropTypes.number,
  roomName: PropTypes.string.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
  masterRole: PropTypes.bool.isRequired,
  roomPass: PropTypes.string.isRequired,
};

CreateRoom.defaultProps = {
  playersNb: 0,
};

export default CreateRoom;

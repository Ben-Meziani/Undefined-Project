/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Loader,
} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Dashboard from 'src/components/Dashboard';
import Field from './Field';
import './style.scss';

const Login = ({
  email,
  password,
  changeField,
  requestConnexion,
  userLogged,
  responseLoading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    requestConnexion();
  };

  return (
    <div className="login">
      {!userLogged && (
      <Grid className="center aligned login-form">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Field required>
            <label>E-mail</label>
            <Field
              type="email"
              placeholder="Email"
              name="email"
              propFromActionsOnChange={changeField}
              value={email}
            />
          </Form.Field>
          <Form.Field required>
            <label>Mot de passe</label>
            <Field
              type="password"
              placeholder="Mot de passe"
              name="password"
              propFromActionsOnChange={changeField}
              value={password}
            />
          </Form.Field>
          <Button color="black" type="submit" className="center aligned">
            Connectez-vous !
          </Button>
        </Form>
      </Grid>
      )}
      {responseLoading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {userLogged && !responseLoading && (
        <Route
          path="/dashboard"
          component={Dashboard}
        />
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  userLogged: PropTypes.bool,
  responseLoading: PropTypes.bool,
  requestConnexion: PropTypes.func.isRequired,
};

Login.defaultProps = {
  userLogged: false,
  responseLoading: false,
};

export default Login;

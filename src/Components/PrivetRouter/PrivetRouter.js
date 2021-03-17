import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';

import { userContext } from '../../App';

const PrivetRouter = ({ children, ...rest }) => {
    const [loginUser,setLoginUser]=useContext(userContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
        loginUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )};

export default PrivetRouter;
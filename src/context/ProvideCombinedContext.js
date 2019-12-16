import React from "react";
import AlertContext from "./alert/alertContext";
import UserContext from "./user/UserContext";
import MainContext from "./MainContext";


const ProvideCombinedContext = props => {
  return (
    <UserContext.Consumer>
      {user => (
        <AlertContext.Consumer>
          {alert => (
            <MainContext.Provider value={{ user, alert }}>
              {props.children}
            </MainContext.Provider>
          )}
        </AlertContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};

export default ProvideCombinedContext;
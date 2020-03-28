import React from "react";
import ProfilPohto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";
const Main = props => {
  return (
    <React.Fragment>
      <ProfilPohto />
      <FullName />
      <Address />
    </React.Fragment>
  );
};

export default Main;

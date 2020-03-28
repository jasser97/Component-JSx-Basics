import React from "react";
import photo from "../img/photoProfile.jfif";

const ProfilPohto = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: 30
    }}
  >
    <img
      style={{
        height: 250,
        width: 250,
        borderRadius: 150
      }}
      src={photo}
      alt="phtoprofile"
    ></img>
  </div>
);

export default ProfilPohto;

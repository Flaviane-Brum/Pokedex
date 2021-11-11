import React from "react";
import Sad from "../../../assets/sad.png";
const ErrorComponent = ({ error }) => {
  return (
    <>
      <p
        style={{
          color: "#800000",
          margin: "1rem 0",
          alignSelf: "center",
          fontWeight: "700",
        }}
      >
        {error}
      </p>
      <img src={Sad} alt="Erro " />
    </>
  );
};

export default ErrorComponent;

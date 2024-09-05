import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div style={spinnerStyles.container}>
      <ClipLoader color={"#AD49E1"} loading={true} size={50} />
    </div>
  );
};

const spinnerStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default Spinner;

import React from "react";
import { MDBInput } from "mdbreact";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <MDBInput
        {...rest}
        name={name}
        label={label}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

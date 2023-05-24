import React from "react";

export const Alert = (props) => {
  if (!props.alert) {
    return (
      <div className="mt-5 mb-0 " style={{ zIndex: 9999 }}>
        <div
          className={`alert `}
          role="alert"
          style={{
            visibility: "hidden",
          }}
        >
          htrf
        </div>
      </div> 
    );
  }
  return (
    props.alert && (
      <div className="mt-5 mb-0  " style={{ zIndex: 9999 }}>
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.type}: {props.alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert; 

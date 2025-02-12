import React from "react";

const ErrorNotification = ({ message }) => {
  return <p style={{ color: "red" }}>Error: {message}</p>;
};

export default ErrorNotification;

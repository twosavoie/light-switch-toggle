import React from "react";
// removed , { Component } from inport React

const Switch = (props) => (
  <div className="switch-plate">
    <div className="screw" />
    <div className="switch" onClick={props.toggle}>
      <div className="switch-handle" />
    </div>
    <div className="screw" />
  </div>
);

export default Switch;

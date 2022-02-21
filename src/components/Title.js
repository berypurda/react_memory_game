import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <React.Fragment>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
    </React.Fragment>
  )
}
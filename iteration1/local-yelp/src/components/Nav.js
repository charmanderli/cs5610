import React from "react";
import LoginButton from "./LoginButton";
import { Router, Route, Link } from "react";
import New from "./New";

export default function Nav({ city }) {
  return (
    <div className="Nav">
      <div className="Nav-left">
        <div className="logo"></div>
        <h1>Poco Loco</h1>
      </div>

      <div className="Nav-right">
        <p className="city">{city}</p>

        

        <LoginButton />
      </div>
    </div>
  );
}

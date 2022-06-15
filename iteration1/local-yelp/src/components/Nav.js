import React from "react";
import Header from "./Header";
import LoginButton from "./LoginButton";

export default function Nav({ city }) {
  return (
    <div className="Nav">
      <span className="Nav-Left">
        <span className="logo"></span>
        <Header title={"Poco Loco"} />
      </span>

      <span className="Nav-right">
        <LoginButton />
      </span>
    </div>
  );
}

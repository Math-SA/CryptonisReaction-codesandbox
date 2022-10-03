import * as React from "react";
import { useState } from "react";
import ServerStatus from "./ServerStatus";
import "./Header.css";

function Header() {
  const [serverOnline, setServerOnline] = useState(false);

  return (
    <div className="header">
      <h1>Cryptonis Reaction</h1>
      <div>
        a react based frontend for{" "}
        <a href="https://github.com/Math-SA/Cryptonis">Cryptonis</a>
        <ServerStatus
          online={serverOnline}
          repaint={setServerOnline}
        ></ServerStatus>
      </div>
    </div>
  );
}
export default Header;

import * as React from "react";
import "./ServerStatus.css";
import Axios from "axios";

function ServerStatus(props) {
  const getClass = (online) => {
    if (online) {
      return "status online";
    } else {
      return "status offline";
    }
  };

  const [serverStatusClass, setServerStatusClass] = React.useState(
    getClass(false)
  );

  const serverPingUrl = "https://devplay-cryptonis.onrender.com/ping";
  const pingAllowed = true;
  const pingWait = 3000;
  let pingCallInterval = React.useRef(null);
  const [serverAlive, setServerAlive] = React.useState(false);

  React.useEffect(() => {
    const pingServer = () => {
      //console.log(`ping?`);
      if (pingAllowed) {
        Axios.get(serverPingUrl, { timeout: 1000 })
          .then((res) => {
            setServerAlive(res.status === 200);
            //console.log("pong!");
          })
          .catch(() => {
            setServerAlive(false);
            //console.log("fail!");
          })
          .then(() => {
            //console.log(
            //  `${new Date().toLocaleString("pt-BR")} - ping scheduled`
            //);
            setTimeout(pingServer, pingWait);
          });
      }
    };
    if (pingCallInterval.current === null) {
      pingCallInterval.current = pingServer();
    }
  }, [pingAllowed]);

  React.useEffect(() => {
    setServerStatusClass(getClass(serverAlive));
  }, [serverAlive]);

  return <div className={serverStatusClass}></div>;
}
export default ServerStatus;

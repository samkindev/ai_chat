import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { useChatWithGemini } from "./functions/hooks";

const App = () => {
  const { stream, getResponse } = useChatWithGemini();

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: {stream}</div>

      <button onClick={() => getResponse()}>Chat</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

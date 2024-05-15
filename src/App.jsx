import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { useChatWith } from "./functions/hooks";

const App = () => {
  const { stream, getResponse } = useChatWith();

  console.log(process.env.GEMINI_API_KEY);

  useEffect(() => {
    getResponse("Où est Kinshasa ?");
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Stream: {stream}</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

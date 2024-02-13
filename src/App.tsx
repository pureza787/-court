import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Please",
  "But I really love you",
  "But I really really love you",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = (noCount * 20) + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container"> {
      yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="yes-pic" />
          <div className="val-text">Yayyy</div>
        </>
      ) : (
        <>
          <img src="https://media.tenor.com/vknNeIAWurIAAAAi/tkthao219-bear.gif" alt="bear-asking" />
          <div className="val-text">Do you love me?</div>
          <div>
              <button className="button yes-button" style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}>
                Yes
              </button>
              <button onClick={() => setNoCount(noCount + 1)} className="button no-button">
                {getNoButtonText()}
              </button>
          </div>
        </>
      )}
      
    </div>
  );
};
export default App;

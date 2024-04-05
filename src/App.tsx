import { useState } from "react";
import "./App.css";

const phrases = [
  "ไม่",
  "ไม่อยากรู้หรอ?",
  "เอ๊ะ!!แน่ใจหรอ?",
  "เปิดดูหน่อยนะ",
  "ได้โปรด",
  "ยังไม่กดเปิดดูอีก!!!",
  "เราจะทุบแกแล้วนะ เปิดดูได้แล้ว :<",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container">
      {" "}
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/q_zo_A3taR0AAAAi/tkthao219-bubududu.gif"
            alt="yes-pic"
          />
          <div className="val-text">
            วันนี้เหนื่อยมั้ยคั้บ พี่เอากำลังใจมาฝาก สู้ๆนะคนเก่งของะพี่
            กอดๆจุ้บๆน๊าาา🤍
          </div>
        </>
      ) : (
        <>
          <img src="https://media.tenor.com/amRuuQRN6d0AAAAi/love.gif" />
          <div className="val-text">เค้ามีไรจะบอก</div>
          <div>
            <button
              className="button yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              เปิด
            </button>
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;

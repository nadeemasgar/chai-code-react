import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) {
      str += "0123456789";
    }

    if (isSpecialChar) {
      str += "!@#$%^&*+`~=?|<>/";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }

    setPassword(pass);
    console.log(pass);
  }, [isNumber, isSpecialChar, length]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isSpecialChar, generatePassword]);

  const rangeHandler = (e) => {
    setLength(e.target.value);
  };

  const copyHandler = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <input type="text" value={password} ref={passwordRef} />
      <button className="copyBtn" onClick={copyHandler}>
        Copy
      </button>{" "}
      <br />
      <input
        type="range"
        value={length}
        onChange={rangeHandler}
        min="8"
        max="100"
        id=""
      />
      Length: {length}
      <br />
      <input
        type="checkbox"
        onClick={() => setIsNumber((prev) => !prev)}
      />{" "}
      Numbers <br />
      <input
        type="checkbox"
        onClick={() => setIsSpecialChar((prev) => !prev)}
      />
      Characters <br />
    </div>
  );
}

export default App;

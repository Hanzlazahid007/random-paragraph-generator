import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count);
    let counts = parseInt(count);
    if (count <= 0) {
      counts = 1;
    }
    if (count > 8) {
      counts = 8;
    }
    setText(data.slice(0, counts));
  };
  return (
    <secton className="section-center">
      <h2>Tired of Boring Lorem Ipsum ?</h2>
      <form onSubmit={handleSubmit}>
        <label>Paragraph </label>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </secton>
  );
}

export default App;

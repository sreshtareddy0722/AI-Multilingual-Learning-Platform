function Translation() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🌐 Translation & Simplification</h1>

      <br />

      <label>Select Language:</label>

      <select>
        <option>Telugu</option>
        <option>Hindi</option>
      </select>

      <br />
      <br />

      <h3>Original Text</h3>

      <textarea
        rows="6"
        cols="80"
        placeholder="Extracted textbook text appears here..."
      />

      <br />
      <br />

      <button>Translate</button>

      <br />
      <br />

      <h3>Translated Text</h3>

      <textarea
        rows="6"
        cols="80"
        placeholder="Translation appears here..."
      />

      <br />
      <br />

      <h3>🧠 Explain Simply</h3>

      <textarea
        rows="6"
        cols="80"
        placeholder="Simple explanation appears here..."
      />

      <br />
      <br />

      <h3>🏡 Local Example</h3>

      <textarea
        rows="4"
        cols="80"
        placeholder="Rural/local analogy appears here..."
      />
    </div>
  );
}

export default Translation;
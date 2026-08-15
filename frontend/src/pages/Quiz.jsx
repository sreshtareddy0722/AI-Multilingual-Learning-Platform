function Quiz() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📝 Quiz Assessment</h1>

      <div
        style={{
          background: "#eef2ff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Question 1</h3>
        <p>Photosynthesis mainly requires?</p>

        <div>
          <input type="radio" name="q1" /> Sunlight
        </div>

        <div>
          <input type="radio" name="q1" /> Iron
        </div>

        <div>
          <input type="radio" name="q1" /> Plastic
        </div>

        <div>
          <input type="radio" name="q1" /> Salt
        </div>
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
        }}
      >
        Submit Quiz
      </button>

      <div
        style={{
          marginTop: "30px",
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>📊 Performance Summary</h3>

        <p>Score: 8/10</p>

        <p>Strong Topics: Photosynthesis, Respiration</p>

        <p>Needs Revision: Genetics</p>
      </div>
    </div>
  );
}

export default Quiz;
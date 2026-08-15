function Analytics() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Learning Analytics</h1>

      <div style={card}>
        <h3>Photosynthesis</h3>
        <p>90% ✅</p>
      </div>

      <div style={card}>
        <h3>Respiration</h3>
        <p>82% ✅</p>
      </div>

      <div style={card}>
        <h3>Cell Division</h3>
        <p>65% 🟡</p>
      </div>

      <div style={card}>
        <h3>Genetics</h3>
        <p>42% 🔴</p>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#fff3cd",
          borderRadius: "10px",
        }}
      >
        <h2>📌 Recommendation</h2>
        <p>Genetics needs revision.</p>
      </div>
    </div>
  );
}

const card = {
  background: "#eef2ff",
  padding: "20px",
  marginTop: "15px",
  borderRadius: "10px",
};

export default Analytics;
function StudentDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome, Student 👋</h1>
      <p>AI Multilingual Learning Platform</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>📚 Upload PDF</div>
        <div style={cardStyle}>📸 Scan Textbook</div>
        <div style={cardStyle}>🌐 Translate</div>
        <div style={cardStyle}>🎤 Ask AI</div>
        <div style={cardStyle}>📝 Quiz</div>
        <div style={cardStyle}>📊 Progress</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#eef2ff",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  fontSize: "20px",
  cursor: "pointer",
};

export default StudentDashboard;
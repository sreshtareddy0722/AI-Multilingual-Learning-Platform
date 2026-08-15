import { useNavigate } from "react-router-dom";
function StudentDashboard() {
    const navigate = useNavigate();
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
        <div
  className="card"
  onClick={() => navigate("/upload")}
>
  📚 Upload PDF
</div>
        <div style={cardStyle}>📸 Scan Textbook</div>
        <div
  className="card"
  onClick={() => navigate("/translation")}
>
  🌐 Translation
</div>
        <div style={cardStyle}>🎤 Ask AI</div>
        <div
  className="card"
  onClick={() => navigate("/quiz")}
>
  📝 Quiz
</div>
        <div
  className="card"
  onClick={() => navigate("/analytics")}
>
  📊 Progress Analytics
</div>
    
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
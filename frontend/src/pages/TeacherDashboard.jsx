function TeacherDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>👨‍🏫 Teacher Dashboard</h1>

      <div style={card}>
        <h2>📚 Upload Chapter</h2>
        <input type="file" accept=".pdf" />
      </div>

      <div style={card}>
        <h2>🌐 Generate Learning Content</h2>

        <button style={button}>
          Telugu Version
        </button>

        <button style={button}>
          Hindi Version
        </button>
      </div>

      <div style={card}>
        <h2>📝 Quiz Generation</h2>

        <button style={button}>
          Generate Quiz
        </button>
      </div>

      <div style={card}>
        <h2>📊 Class Performance</h2>

        <p>Photosynthesis - 88%</p>
        <p>Respiration - 76%</p>
        <p>Cell Division - 62%</p>
        <p>Genetics - 45%</p>
      </div>

      <div style={warningCard}>
        <h2>⚠ Students Need Help In</h2>

        <p>Genetics</p>
        <p>Cell Division</p>
      </div>
    </div>
  );
}

const card = {
  background: "#eef2ff",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
};

const warningCard = {
  background: "#fff3cd",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
};

const button = {
  marginRight: "10px",
  padding: "10px 15px",
  cursor: "pointer",
};

export default TeacherDashboard;
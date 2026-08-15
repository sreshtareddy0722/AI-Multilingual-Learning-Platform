function UploadPDF() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Upload Textbook</h1>

      <div
        style={{
          marginTop: "30px",
          padding: "50px",
          border: "2px dashed #4f46e5",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <h2>Drag & Drop PDF Here</h2>
        <p>or</p>

        <input type="file" accept=".pdf" />

        <br />
        <br />

        <button>
          Upload PDF
        </button>
      </div>
    </div>
  );
}

export default UploadPDF;
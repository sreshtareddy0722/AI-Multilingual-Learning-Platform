import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import UploadPDF from "./pages/UploadPDF";
import Translation from "./pages/Translation";
import Quiz from "./pages/Quiz";
import TeacherDashboard from "./pages/TeacherDashboard";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/upload" element={<UploadPDF />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

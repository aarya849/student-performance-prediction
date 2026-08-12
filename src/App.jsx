import React, { useState } from "react";
import TeacherForm from "./components/TeacherForm"; 
import StudentForm from "./components/StudentForm";
import PredictionResult from "./components/PredictionResult";

import "./App.css";
function App() {
  const [teacherData, setTeacherData] = useState(null);
  const [studentData, setStudentData] = useState(null);

  return (
<div className="outer-wrapper">
  <div className="app-container">
    <h1>🎓 Student Performance Prediction</h1>
    {!teacherData && <TeacherForm onSubmit={(data) => setTeacherData(data)} />}
    {teacherData && !studentData && <StudentForm onSubmit={(data) => setStudentData(data)} />}
    {teacherData && studentData && (
      <PredictionResult teacherData={teacherData} studentData={studentData} />
    )}
  </div>
</div>
  );
}

export default App;

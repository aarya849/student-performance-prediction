import React from "react";

function PredictionResult({ teacherData, studentData }) {
  const { minAttendance, minAssignments } = teacherData;
  const {
    attendance,
    assignments,
    studyHours,
    motivation,
    previousGrade
  } = studentData;

  let score = 0;

  if (attendance >= minAttendance) score++;
  if (assignments >= minAssignments) score++;
  if (studyHours >= 2) score++;
  if (motivation >= 5) score++;
  if (previousGrade >= 50) score++;

  const prediction =
    score >= 4 ? "High Chance of Good Performance" : "Needs Improvement";

  return (
    <div>
      <h2>📊 Prediction Result</h2>

      <p>
        <b>Teacher Set Rules:</b> Attendance ≥ {minAttendance}%,
        Assignments ≥ {minAssignments}
      </p>

      <p><b>Student Data:</b></p>
      <ul>
        <li>Attendance: {attendance}%</li>
        <li>Assignments Completed: {assignments}</li>
        <li>Study Hours: {studyHours}</li>
        <li>Motivation: {motivation}/10</li>
        <li>Previous Grade: {previousGrade}</li>
      </ul>

      <h3>✅ Prediction: {prediction}</h3>
    </div>
  );
}

export default PredictionResult;

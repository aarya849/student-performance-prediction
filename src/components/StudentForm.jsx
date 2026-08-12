import React, { useState } from "react";

function StudentForm({ onSubmit }) {
  const [form, setForm] = useState({
    attendance: "",
    assignments: "",
    studyHours: "",
    motivation: "",
    previousGrade: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Input</h2>

      <label>
        Attendance (%):
        <input
          type="number"
          name="attendance"
          value={form.attendance}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Assignments Completed:
        <input
          type="number"
          name="assignments"
          value={form.assignments}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Study Hours per Day:
        <input
          type="number"
          name="studyHours"
          value={form.studyHours}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Motivation (1–10):
        <input
          type="number"
          name="motivation"
          value={form.motivation}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Previous Grade (0–100):
        <input
          type="number"
          name="previousGrade"
          value={form.previousGrade}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Predict →</button>
    </form>
  );
}

export default StudentForm;

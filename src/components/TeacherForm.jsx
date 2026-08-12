import React, { useState } from "react";

function TeacherForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    minAttendance: "",
    minAssignments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Teacher Input</h2>
      <label>
        Minimum Attendance (%):
        <input
          type="number"
          name="minAttendance"
          value={formData.minAttendance}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Minimum Assignments Completed:
        <input
          type="number"
          name="minAssignments"
          value={formData.minAssignments}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Next →</button>
    </form>
  );
}

export default TeacherForm;

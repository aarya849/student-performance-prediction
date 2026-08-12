# Student Performance Prediction System

A React-based web application that evaluates student performance using academic and behavioral inputs provided through structured student and teacher forms.

## Live Demo

[View Live Project](https://cosmic-capybara-1e3ac3.netlify.app/)

## Overview

The Student Performance Prediction System provides a simple interface for collecting relevant student information and generating a performance classification based on the provided inputs.

The application uses reusable React components and state management to handle multiple input workflows and dynamically display prediction results.

## Features

- Student input form for collecting academic and behavioral information
- Teacher input form for defining performance-related criteria
- Form validation for user inputs
- Dynamic performance classification
- Conditional rendering of prediction results
- React state management for handling form data
- Reusable and component-based UI structure
- Responsive user interface

## Tech Stack

- **Frontend:** React.js
- **Programming Language:** JavaScript (ES6)
- **Markup:** HTML5
- **Styling:** CSS3
- **Build Tool:** Vite

## How It Works

The application follows a simple input-to-prediction workflow:

1. The teacher provides performance-related criteria.
2. The student enters relevant academic and behavioral information.
3. The application manages the form data using React state.
4. The input values are evaluated using the application's prediction logic.
5. The resulting performance level is displayed dynamically.

## Project Structure

```text
student-prediction-frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx
│   │   ├── TeacherForm.jsx
│   │   └── PredictionResult.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

// PATH: './App.jsx'

import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    emotion: "😁",
  });

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value }
    setFormData(newFormData);
  }

  return (
    <div className="App">
      <form>
        <label>
          NAME
          <input name='name' value={formData.name} onChange={handleChange} />
          </label>
        <label>
          EMOTION
        <select name="emotion" value={formData.emotion} onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
        </label>
      </form>
      <h1>{formData.name} is {formData.emotion}</h1>
    </div>
  );
}
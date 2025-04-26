import React, { useState } from 'react';
import { submitFeedback } from '../services/FeedbackService';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', category: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFeedback(formData);
    alert('Feedback submitted!');
    setFormData({ name: '', email: '', feedback: '', category: '' });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        className="input"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        className="input"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="suggestion">Suggestion</option>
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
      </select>
      <textarea
        className="textarea"
        name="message"
        placeholder="Your Feedback"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button className="button" type="submit">Submit</button>
    </form>
  );
}
import React from 'react';

export default function FeedbackTable({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <p className="noData">No feedback found!</p>;
  }

  return (
    <table className="feedbackTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Category</th>
          <th>Feedback</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map((fb, index) => (
          <tr key={index}>
            <td>{fb.name}</td>
            <td>{fb.email}</td>
            <td>{fb.category}</td>
            <td>{fb.message}</td>
            <td>{new Date(fb.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
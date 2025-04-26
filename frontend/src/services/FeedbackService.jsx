// services/feedbackService.js
const API_URL = 'http://localhost:3002/api/feedback';

export const submitFeedback = async (data) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export async function fetchFeedback({ category, sortField, sortOrder, page, limit }) {
    let url = API_URL+`?page=${page}&limit=${limit}`; 
    if (category) url += `&category=${category}`;
    if (sortField) url += `&sortField=${sortField}`;
    if (sortOrder) url += `&sortOrder=${sortOrder}`;
  
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); 
    return data;
  }

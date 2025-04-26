import React, { useEffect, useState } from 'react';
import FeedbackTable from '../components/FeedbackTable';
import { fetchFeedback } from '../services/FeedbackService';

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortField, setSortField] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    loadFeedbacks();
  }, [categoryFilter, sortField, sortOrder, page, limit]);

  const loadFeedbacks = async () => {
    const data = await fetchFeedback({ category: categoryFilter, sortField, sortOrder, page, limit });
    setFeedbacks(data.feedbacks); 
    setHasNextPage(data.hasNextPage); 
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setPage(1); 
  };

  const handleSortFieldChange = (e) => {
    setSortField(e.target.value);
    setPage(1); 
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1); 
  };

  const handleSearchChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1);
  };

  const filteredFeedbacks = feedbacks.filter(f =>
    [f.name, f.email, f.message].some(field => (field || '').toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <div className="dashboard">
      <h1>Feedback Dashboard</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, email, or message"
          value={searchFilter}
          onChange={handleSearchChange}
          className="filterInput"
        />
        <select value={categoryFilter} onChange={handleCategoryChange} className="filterInput">
          <option value="">All Categories</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
        </select>
        <select value={sortField} onChange={handleSortFieldChange} className="filterInput">
          <option value="name">Sort by Name</option>
          <option value="timestamp">Sort by Date</option>
        </select>
        <select value={sortOrder} onChange={handleSortOrderChange} className="filterInput">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select value={limit} onChange={handleLimitChange} className="filterInput">
          <option value={5}>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={20}>20 items per page</option>
          <option value={50}>50 items per page</option>
        </select>
      </div>

      <FeedbackTable feedbacks={filteredFeedbacks} />

      <div className="pagination">
        <button onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage(page => page + 1)} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

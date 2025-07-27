import React, { useState } from 'react';
import './TaskFilter.css';
import { type TaskFilterProps, type TaskStatus } from '../../types';

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TaskStatus | '';
    setStatus(value);
    onFilterChange({
      status: value === '' ? undefined : value,
      priority: priority === '' ? undefined : priority,
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'low' | 'medium' | 'high' | '';
    setPriority(value);
    onFilterChange({
      status: status === '' ? undefined : status,
      priority: value === '' ? undefined : value,
    });
  };

  return (
    <div className="task-filter">
      <select value={status} onChange={handleStatusChange} className="filter-select">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select value={priority} onChange={handlePriorityChange} className="filter-select">
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;

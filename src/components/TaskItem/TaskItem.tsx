import React from 'react';
import './TaskItem.css';
import { type TaskItemProps, type TaskStatus } from '../../types';

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const { id, title, description, status, priority, dueDate } = task;

  const statusClass = `status-${status}`;
  const priorityClass = `priority-${priority}`;

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(id, e.target.value as TaskStatus);
  };

  return (
    <div className={`task-item ${statusClass} ${priorityClass}`}>
      <div className="task-header">
        <h3 className="task-title">{title}</h3>
        <span className={`badge priority-badge ${priorityClass}`}>
          {priority.toUpperCase()}
        </span>
      </div>
      <p className="task-desc">{description}</p>
      <p className="task-due-date">Due: {dueDate}</p>
      <div className="task-controls">
        <label htmlFor={`status-select-${id}`} className="visually-hidden">
          Change task status
        </label>
        <select
          id={`status-select-${id}`}
          value={status}
          onChange={handleStatusChange}
          className="status-select"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
          aria-label={`Delete task: ${title}`}
          title="Delete task"
        >
            Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
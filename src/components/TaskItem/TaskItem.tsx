import React from 'react';
import './TaskItem.css';
import { type TaskItemProps, type TaskStatus } from '../../types';

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    const { id, title, description, dueDate, status, priority } = task;
    
    const handleStatusChange = () => {
      const statusFlow: TaskStatus[] = ['pending', 'in-progress', 'completed'];
      const currentIndex = statusFlow.indexOf(status);
      const nextStatus = statusFlow[(currentIndex + 1) % statusFlow.length];
      onStatusChange(id, nextStatus);  
    };

    return (
        <div className={`task-item ${priority}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Due:</strong> {dueDate}</p>
            <p><strong>Status:</strong> {status}</p>
            <button onClick={handleStatusChange}>Advance Status</button>
            <button onClick={() => onDelete(id)} className="delete-btn">Delete</button>
            {priority === 'high' && status === 'pending' && (
                <p className="urgent">Urgent Task!</p>
            )}
        </div>
    ); 
}

export default TaskItem;
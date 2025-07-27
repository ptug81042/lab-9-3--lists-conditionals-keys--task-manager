import React, { useState } from 'react';
import { type Task, type TaskStatus } from '../../types';

interface AddTaskFormProps {
  onAdd: (task: Task) => void;
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [formData, setFormData] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      ...formData,
      id: crypto.randomUUID(),
    };
    onAdd(newTask);
    setFormData({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: '',
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={e => setFormData({ ...formData, status: e.target.value as TaskStatus })}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select
        value={formData.priority}
        onChange={e => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        value={formData.dueDate}
        onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
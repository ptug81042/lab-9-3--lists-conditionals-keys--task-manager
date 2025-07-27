import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import { type Task, type TaskStatus } from './types'

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs',
    status: 'pending',
    priority: 'medium',
    dueDate: '2025-08-01'
  },
  {
    id: '2',
    title: 'Finish project report',
    description: 'Finalize charts and submit',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2025-08-03',
  },
  {
    id: '3',
    title: 'Workout',
    description: '45-minute run and stretching',
    status: 'completed',
    priority: 'low',
    dueDate: '2025-07-27',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task);
    setTasks(updated);
  };

  const handleDelete = (taskId: string) => {
    const updated = tasks.filter((task) => task.id !== taskId);
    setTasks(updated);
  };

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityNatch = filters.priority
      ? task.priority === filters.priority 
      : true;
    return statusMatch && priorityNatch;
  });

  const handleSortByDate = () => {
    setTasks(prevTasks => [
      ...prevTasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    );
  };

  return (
    <div className="app">
      <h1 className="app-title">📝 Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onSortByDate={handleSortByDate}
      />
    </div>
  );
}

export default App;

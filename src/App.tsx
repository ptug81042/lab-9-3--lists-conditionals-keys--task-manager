import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import { type Task, type TaskStatus } from './types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Finish React Lab',
      description: 'Complete Lab 9.3 assignment',
      status: 'pending',
      priority: 'high',
      dueDate: '2025-08-01',
    },
    {
      id: '2',
      title: 'Review TypeScript',
      description: 'Go over interfaces and types',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-07-30',
    },
  ]);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const [showForm, setShowForm] = useState(false);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => {
    setFilters(newFilters);
  };

  const handleSortByDate = () => {
    const sorted = [...tasks].sort((a, b) =>
      new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );
    setTasks(sorted);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const handleMoveUp = (taskId: string) => {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  };

  const handleMoveDown = (taskId: string) => {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTasks(updatedTasks);
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchStatus = !filters.status || task.status === filters.status;
    const matchPriority = !filters.priority || task.priority === filters.priority;
    return matchStatus && matchPriority;
  });

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <TaskFilter onFilterChange={handleFilterChange} />

      <button onClick={() => setShowForm(prev => !prev)}>
        {showForm ? 'Cancel' : 'Add New Task'}
      </button>

      {showForm && <AddTaskForm onAdd={handleAddTask} />}

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onSortByDate={handleSortByDate}
        onMoveUp={handleMoveUp}
        onMoveDown={handleMoveDown}
      />
    </div>
  );
}

export default App;
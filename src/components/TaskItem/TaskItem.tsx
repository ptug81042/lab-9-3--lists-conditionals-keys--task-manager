import { type TaskItemProps, type TaskStatus } from '../../types';
import './TaskItem.css';

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: TaskItemProps) {
  return (
    <div className={`task-item status-${task.status}`}>
      <h3>
        {task.title}
        <span className={`priority-badge priority-${task.priority}`}>
          {task.priority}
        </span>
      </h3>

      <p>{task.description}</p>
      <p className="due-date">Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>

      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <div className="task-actions">
        <button onClick={() => onMoveUp(task.id)}>↑ Move Up</button>
        <button onClick={() => onMoveDown(task.id)}>↓ Move Down</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
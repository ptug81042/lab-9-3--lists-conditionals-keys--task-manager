import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import { type TaskListProps } from '../../types';

function TaskList({
  tasks,
  onStatusChange,
  onDelete,
  onSortByDate,
  onMoveUp,
  onMoveDown
}: TaskListProps) {
  return (
    <div className="task-list">
      <button onClick={onSortByDate} className="sort-button">
        Sort by Due Date
      </button>
      {tasks.length === 0 ? (
        <p className="empty">No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
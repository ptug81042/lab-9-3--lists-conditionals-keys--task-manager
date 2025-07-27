import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import {type TaskListProps } from '../../types';

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

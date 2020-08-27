import * as React from 'react';

export interface ITask {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
  updatedAt?: Date;
}

const defaultTask: ITask = {
  id: '0', title: 'Title', state: 'TASK_INBOX'
}

export interface TaskProps {
  task: ITask;
  onArchiveTask: () => void;
  onPinTask: () => void;
}

const Task = ({ task = defaultTask, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className="list-item">
      <input type="text" value={task.title} readOnly={true} />
    </div>
  );
}

export default Task;
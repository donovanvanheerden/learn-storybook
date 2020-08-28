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
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task = ({ task = defaultTask, onArchiveTask, onPinTask }: TaskProps) => {
  const handleArchive = (id: string) => () => onArchiveTask(id);
  const handlePin = (id: string) => () => onPinTask(id);

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  return (
    <div className={`list-item ${task.state}`}>
      <label htmlFor="checked" className="checkbox">
        <input type="checkbox" defaultChecked={task.state === 'TASK_ARCHIVED'} disabled={true} name="checked" />
        <span className="checkbox-custom" onClick={handleArchive(task.id)} />
      </label>
      <div className="title">
        <input type="text" value={task.title} readOnly={true} placeholder="Input title" />
      </div>
      <div className="actions" onClick={stopPropagation}>
        <a onClick={handlePin(task.id)}><span className="icon-star" /></a>
      </div>
    </div>
  );
}

export default Task;
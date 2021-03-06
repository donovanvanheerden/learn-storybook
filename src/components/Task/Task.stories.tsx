import * as React from 'react';
import Task, { TaskProps } from './Task';
import { Story, Meta } from '@storybook/react/types-6-0';

const TaskStory: Meta = {
  component: Task,
  title: 'Task',
};

export default TaskStory;

const Template: Story<TaskProps> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task!,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task!,
    state: 'TASK_ARCHIVED',
  },
};
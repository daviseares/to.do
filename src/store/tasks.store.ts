import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

const tasksDefault = [] as Task[];

export default class TasksStore {
  @persist('object')
  @observable
  tasks: Task[] = tasksDefault;

  constructor() {
    makeObservable(this);
  }

  @action
  setTask = (task: Task) => {
    this.tasks = [...this.tasks, task];
  };

  @action
  markAsDone = (id: number) => {
    const newTasks = this.tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item,
    );
    this.tasks = newTasks;
  };

  @action
  remove = (id: number) => {
    const newTasks = this.tasks.filter((item) => item.id !== id);
    this.tasks = newTasks;
  }
}

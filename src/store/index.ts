import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TasksStore from './tasks.store';

class RootStore {
  tasks: TasksStore;

  constructor() {
    this.tasks = new TasksStore();
  }
}

const hydrate = create({ storage: AsyncStorage });
const store = new RootStore();

hydrate('tasks', store.tasks);


export { RootStore };
export { TasksStore };


export default store;
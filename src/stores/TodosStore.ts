import Todo from '@app/containers/todos/Todo';
import { action, computed, observable } from 'mobx';

export class TodoStore {
  @observable
  public todos: Todo[] = [
    {
      finished: false,
      id: 'aaaa',
      title: 'aaaa'
    },
    {
      finished: false,
      id: 'bbbb',
      title: 'bbbb'
    }
  ];

  @action.bound
  public change_finished(i: number) {
    this.todos[i].finished = !this.todos[i].finished;
  }

  @computed
  public get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

export default TodoStore;
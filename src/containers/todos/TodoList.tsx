import { computed, observable } from 'mobx';

import Todo from './Todo';

export default class TodoList {
  @observable
  public todos: Todo[] = [
    {
      finished: false,
      id: 'aaaa',
      title: 'aaaa'
    },
    {
      finished: false,
      id: 'aaaa',
      title: 'aaaa'
    }
  ];

  @computed
  public get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

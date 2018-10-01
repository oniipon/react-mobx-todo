import * as React from 'react';

import TodoList from './TodoList';
import TodoListView from './TodoListView';

const store = new TodoList();
export class Todos extends React.Component {
  public render() {
    return (
      <TodoListView todoList={ store } />
    )
  }
}

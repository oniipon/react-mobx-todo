import * as React from 'react';

import TodoStore from '@app/stores/TodosStore';
// import { Provider } from 'mobx-react';
import TodoList from './TodoList';
import TodoListView from './TodoListView';

const store = new TodoStore();
export class Todos extends React.Component {
  public render() {
    return [
      <TodoListView key="1" todoList={store} />,
      // tslint:disable-next-line:jsx-no-lambda
      <button
        // tslint:disable-next-line:jsx-no-lambda
        onClick={e => cl(store)}
        key="2"
      >
        aaaaaa
      </button>
    ];
  }
}

const cl = (a: TodoList) => {
  console.log(JSON.stringify(a));
};

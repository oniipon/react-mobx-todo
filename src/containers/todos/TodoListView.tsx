import * as React from 'react';

import { observer } from 'mobx-react';
import Todo from './Todo';

interface IProps {
  todoList: ITodoList
}

interface ITodoList {
  todos: Todo[],
  unfinishedTodoCount: number
}

@observer
export default class TodoListView extends React.Component<IProps>  {
  public render() {
    return (
      <div>
        <ul>
          {
            this.props.todoList.todos.map(
              todo =>
              <TodoView todo={ todo } key={ todo.id } />
            )
          }
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    )
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type="checkbox"
      checked={ todo.finished }
      onClick={ handleOnClick.bind(todo) }
      data-message={ todo }
    />{todo.title}
  </li>
)

const handleOnClick = (event: React.MouseEvent<HTMLElement>, todo: Todo) => {
  console.log('todo.finished = !todo.finished');
  // event.target.getAttribute('data-message')
  // todo.finished = !todo.finished
}
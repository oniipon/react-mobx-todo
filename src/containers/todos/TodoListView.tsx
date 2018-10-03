import * as React from 'react';

// import Todo from '@app/containers/todos/Todo';
import { TodoStore } from '@app/stores';
import { inject, observer } from 'mobx-react';

interface IProps {
  todoList: TodoStore;
}
@inject()
@observer
export default class TodoListView extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map((todo, index) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.finished}
                  data-message={todo}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={e=>this.props.todoList.change_finished(index)}
                />
              </li>
              // return ( <TodoView
              //   todo={todo}
              //   index = {index}
              //   key={todo.id}
              //   store = {this.props.todoList}
              //   // tslint:disable-next-line:jsx-no-lambda
              //  // onCahnge={this.props.todoList.change_finished(index)}
              //   />
            );
          })}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

// const TodoView = observer((todo: Todo, index: number, store: TodoStore) => (
//   <li>
//     <input
//       type="checkbox"
//       checked={todo.finished}
//       data-message={todo}
//       onChange={store.change_finished(index)}
//     />
//     {todo.title}
//   </li>
// ));

// const handleOnClick = (event: React.MouseEvent<HTMLElement>, todo: Todo) => {
//   console.log('todo.finished = !todo.finished');
//   console.log(todo);
//   // event.target.getAttribute('data-message')
//   todo.finished = !todo.finished;
// };

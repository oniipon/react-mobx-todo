import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { ICountStoreType } from '../stores/CountStore';

export interface ICountPropType {
    count?: ICountStoreType
};

@inject('count')
@observer
class Counter extends React.Component<ICountPropType> {
  public render() {
    const { count } = this.props;

    return (
      <div>
        <p>Counter : {count!.num}</p>
        <p>Double Count: {count!.doubleCount}</p>
        <button onClick={count!.onIncrement}>+</button>
        <button onClick={count!.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
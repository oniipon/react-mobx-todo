import * as React from 'react';

import { ICountStoreType } from '@app/stores/CountStore';
import { inject, observer } from 'mobx-react';

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
        <button onClick={count!.increment}>+</button>
        <button onClick={count!.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
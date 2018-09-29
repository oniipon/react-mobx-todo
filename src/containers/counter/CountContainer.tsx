import * as React from 'react';

import Counter from '@app/components/Counter';
import CountStore from '@app/stores/CountStore';
import { Provider } from 'mobx-react';

// create store
const stores = new CountStore();

class CountContainer extends React.Component {
  public render() {
    return (
      <Provider count={stores}>
        <Counter />
      </Provider>
    );
  }
}

export default CountContainer;

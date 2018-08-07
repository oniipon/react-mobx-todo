import * as React from 'react';

import { Provider } from 'mobx-react';
import Counter from '../components/Counter';
import CountStore from '../stores/CountStore';

// create store
const stores = new CountStore();

export default class CountContainer extends React.Component {
  public render() {
    return (
      <Provider count={stores}>
        <Counter />
      </Provider>
    );
  }
}

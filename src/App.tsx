import * as React from 'react';

import AppRouter from '@app/AppRouter';

import styled from 'styled-components';
const Component = styled.div``;

class App extends React.Component {
  public render() {
    return (
      <Component>
        <AppRouter />
      </Component>
    );
  }
}

export default App;

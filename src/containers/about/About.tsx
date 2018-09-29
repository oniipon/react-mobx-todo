import * as React from 'react';

import logo from '@app/assets/images/logo.svg';

export class About extends React.Component {
  public render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

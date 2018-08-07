import * as React from 'react';
import './App.css';

import logo from './logo.svg';

// export class Name extends React.Component<INamePropType> {
import { Name } from './components/Name';
// export default class CountContainer extends React.Component {
// It is not necessary to use '{}' if defined with default
import CountContainer from './containers/CountContainer'; 

/*
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Name member="Fumio SAGAWA"/>
        <CountContainer />
      </div>
    );
  }
}

export default App;

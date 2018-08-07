import * as React from 'react';

import './Home.css';
import logo from './logo.svg';

// export class Name extends React.Component<INamePropType> {
import { Name } from '../components/Name';
// export default class CountContainer extends React.Component {
// It is not necessary to use '{}' if defined with default
import CountContainer from '../containers/CountContainer'; 

export class Home extends React.Component {
  public render() {
    return (
      <div>
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

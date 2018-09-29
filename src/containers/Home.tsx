import * as React from 'react';

// import './Home.css';
import logo from './logo.svg';

// export class Name extends React.Component<INamePropType> {
import { Name } from '../components/Name';
// export default class CountContainer extends React.Component {
// It is not necessary to use '{}' if defined with default
import CountContainer from '../containers/CountContainer'; 

import styled from 'styled-components';

const Component = styled.div `
img {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

h1 {
  font-size: 1.5em;
}

p {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`

export class Home extends React.Component {
  public render() {
    return (
      <Component>
        <header>
          <img className="App-logo-spin" src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Name member="Fumio SAGAWA"/>
        <CountContainer />
      </Component>
    );
  }
}

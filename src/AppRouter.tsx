import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { About, Friends, Home } from '@app/containers';

import styled from 'styled-components';

const Component = styled.div`
{
  text-align: center;
  ul {
    text-align: left;
  }
  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
}
`;

class AppRouter extends React.Component {
  public render() {
    return (
      <Component>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/friends'>Friends</Link></li>
            </ul>
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} />
            <Route path='/friends' component={Friends} />
          </div>
        </BrowserRouter>
      </Component>
    );
  }
}

export default AppRouter;

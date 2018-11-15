import React, { Component, Fragment } from 'react';
import { CalcWrapper, Screen } from './style';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CalcWrapper>
          <Screen />

        </CalcWrapper>
      </Fragment>
    );
  }
}

export default App;

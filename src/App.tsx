import * as React from 'react';

import { Fabric, PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

interface IAppState {
  primary: boolean;
}

class App extends React.Component<{}, IAppState> {

  public constructor() {
    super();
    this.state = {
      primary: true,
    };
  }

  render() {
    return (
      <div className="App">
        <Fabric>
          { this.state.primary &&
            <PrimaryButton onClick={() => this.setState({primary: false})}>Click Me</PrimaryButton>
          }
          { !this.state.primary &&
            <DefaultButton onClick={() => this.setState({primary: true})}>Click Me</DefaultButton>
          }
        </Fabric>
      </div>
    );
  }
}

export default App;

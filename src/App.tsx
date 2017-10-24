import * as React from 'react';

import { Fabric, DefaultButton } from 'office-ui-fabric-react';

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
          <DefaultButton
            primary={this.state.primary} 
            onClick={() => this.setState({primary: !this.state.primary})} 
          >
            Click Me
          </DefaultButton>
        </Fabric>
      </div>
    );
  }
}

export default App;

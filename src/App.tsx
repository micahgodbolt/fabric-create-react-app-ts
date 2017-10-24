import * as React from 'react';

import { Fabric, TextField } from 'office-ui-fabric-react';

interface ITodoState {
  text?: any;
}

class App extends React.Component<any, ITodoState> {

  render() {
    return (
      <Fabric className="App">

        <TextField
          label="Enter Todo"
          onChanged={(text) =>  this.setState({ text })}
        />

      </Fabric>
    );
  }
}

export default App;

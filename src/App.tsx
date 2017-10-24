import * as React from 'react';

import { Fabric, TextField, PrimaryButton } from 'office-ui-fabric-react';

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

        <PrimaryButton
          iconProps={{iconName: 'Add'}}
          text="Add Todo"
          onClick={() => alert(this.state.text)}
        />

      </Fabric>
    );
  }
}

export default App;

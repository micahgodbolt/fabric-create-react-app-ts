import * as React from 'react';

import { Fabric, TextField, PrimaryButton, Checkbox, ProgressIndicator } from 'office-ui-fabric-react';

interface ITodoState {
  text?: any;
  todo: string | null;
}

class App extends React.Component<any, ITodoState> {

  public constructor() {
    super();
    this.state = {
      todo: null
    };
  } 

  render() {
    return (
      <Fabric className="App">

        <TextField
          label="Enter Todo"
          onChanged={(text) => this.setState({ text })}
        />

        <PrimaryButton
          iconProps={{iconName: 'Add'}}
          text="Add Todo"
          onClick={() => this.addTodo(this.state.text)}
        />

        { this.state.todo &&
          <Checkbox
            label={this.state.todo}
            onChange={() => this.removeTodo()}
          />
        }

        <ProgressIndicator
          label={`${this.state.todo ? 0 : 1 * 100} % Done`}
          percentComplete={this.state.todo ? 0 : 1}
        />

      </Fabric>
    );
  }
  addTodo = (todo: string | null): void => {
    this.setState( {
      todo
    });
  }

  removeTodo = (): void => {
    this.setState( {
      todo: null
    });
  }
}

export default App;

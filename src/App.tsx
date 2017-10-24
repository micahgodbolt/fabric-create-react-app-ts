import * as React from 'react';

import { Fabric, TextField, PrimaryButton, Checkbox } from 'office-ui-fabric-react';

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

      </Fabric>
    );
  }
  addTodo = (todo: string): void => {
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

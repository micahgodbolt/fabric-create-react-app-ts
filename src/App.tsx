import * as React from 'react';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class App extends React.Component<any, any> {

  render() {
    return (
      <Fabric className="App">
        <DefaultButton onClick={() => alert('clicked')} > Hi </DefaultButton>
      </Fabric>
    );
  }
}

export default App;

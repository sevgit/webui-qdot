
import * as React from 'react';
import { observer } from 'mobx-react';


@observer(['comments'])
class App extends React.Component<any, any> {

  public componentDidMount() {

    this.props.comments.fetchComments()
  

  }


  public render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

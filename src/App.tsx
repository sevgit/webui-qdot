
import * as React from 'react';
import { observer } from 'mobx-react';

import CommentList from './containers/CommentList';

@observer(['comments'])
class App extends React.Component<any, any> {

  public componentDidMount() {

    this.props.comments.fetchComments()
  

  }


  public render() {
    return (
      <React.Fragment>
        <header>
          <h1>CommentBox 9001</h1>
        </header>

        <div className='App'>
          <CommentList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

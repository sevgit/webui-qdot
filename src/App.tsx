
import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CommentList from './containers/CommentList';
import SingleComment from './components/SingleComment';


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
        <BrowserRouter>

          <Switch>
            <Route exact={true} path="/comment/:id" render={(props) =>
               this.props.comments.list.length > 0 && <SingleComment
                postId={1}
                id={this.props.comments.list[props.match.params.id - 1].id}
                name={this.props.comments.list[props.match.params.id - 1].name}
                email={this.props.comments.list[props.match.params.id - 1].email}
                body={this.props.comments.list[props.match.params.id - 1].body}
                expanded={true} /> } />
            <Route path="/" component={CommentList} /> 

          </Switch>
        </BrowserRouter>
        
         
        </div>
      </React.Fragment>
    );
  }
}

export default App;

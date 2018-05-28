
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CommentList from './containers/CommentList';
import SingleComment from './components/SingleComment';
import ErrorFetching from './components/ErrorFetching';
import Spinner from './components/Spinner';
@inject('comments') @observer
class App extends React.Component<any, any> {


  public componentDidMount() {

     this.props.comments.fetchComments()

    
  }

 


  public render() {
    const listState = this.props.comments.state;
    return (
      <React.Fragment>
        <header>
          <h1>CommentBox 9001</h1>
        </header>
        <div className='App'>
        <BrowserRouter>

          <Switch> 
            <Route exact={true} path="/comment/:id" render={(props) =>
              {switch(this.props.comments.state) {
                case 'initial': case 'loading':
                return <Spinner loading={listState} />;
                case 'done':
                if (this.props.comments.list.length < props.match.params.id -1) {
                  return <ErrorFetching buttonText={'Go Back'} buttonFunction={() => props.history.push('/')} />
                }
                return <SingleComment
                postId={1}
                id={this.props.comments.list[props.match.params.id - 1].id}
                name={this.props.comments.list[props.match.params.id - 1].name}
                email={this.props.comments.list[props.match.params.id - 1].email}
                body={this.props.comments.list[props.match.params.id - 1].body}
                expanded={true} />;
                default: 
                   return null
              }}
            }
                /> 
            <Route path="/" component={CommentList} /> 

          </Switch>
        </BrowserRouter>
        
         
        </div>
      </React.Fragment>
    );
  }
}

export default App;

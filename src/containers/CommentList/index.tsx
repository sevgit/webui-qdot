import * as React from 'react';
import { observer } from 'mobx-react';
import SingleComment from '../../components/SingleComment';
import Spinner from '../../components/Spinner';
import ErrorFetching from '../../components/ErrorFetching';

@observer(['comments'])
class CommentList extends React.Component<any, any> {

  public render() {

    switch(this.props.comments.state) {
      case 'loading':
      return <Spinner />;

      case 'done':
        return(
          this.props.comments.list.map((value:any, index:number) => {
            return(
              <SingleComment
              postId={value.postId} 
              id={value.id} 
              name={value.name}
              email={value.email}
              body={value.body} 
              expanded={false} 
              key={index} />) 
          })
        );
      
      case 'error':
        return <ErrorFetching retry={() => this.props.comments.fetchComments()} />

      default:
        return null;
    }
    
  }
}

export default CommentList;
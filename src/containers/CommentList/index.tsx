import * as React from 'react';
import { observer } from 'mobx-react';
import SingleComment from '../../components/SingleComment';

@observer(['comments'])
class CommentList extends React.Component<any, any> {

  public render() {
    return(
      this.props.comments.comments.map((value:any, index:number) => {
        return(
          <SingleComment
          postId={value.postId} 
          id={value.id} 
          name={value.name}
          email={value.email}
          body={value.body} 
          expanded={value.expanded} 
          key={index} />) 
      })
    )
  }
}

export default CommentList;
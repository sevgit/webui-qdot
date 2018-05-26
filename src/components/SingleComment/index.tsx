import * as React from 'react';
import  { SFC } from 'react';


interface ISingleCommentProps  {
  postId?: number,
  id?: number,
  name: string,
  email: string,
  body: string,
  expanded: boolean,
  
}


const SingleComment: SFC<ISingleCommentProps> = (props) => { 

return (
  <div>
    <p>{props.postId} </p>
    <p>{props.id}</p>
    <p>{props.name}</p>
    <p>{props.email}</p>
    <p>{props.body}</p>
    
  </div>
);
 }





export default SingleComment;
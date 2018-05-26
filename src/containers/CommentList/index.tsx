import * as React from 'react';
import SingleComment from '../../components/SingleComment';

const dummyData = [{
  postId: 1,
  id: 1,
  name: 'Jane',
  email: 'jane@doe.com',
  body: 'Hello',
  expanded: false,
},
{
  postId: 1,
  id: 2,
  name: 'Jane',
  email: 'jane@doe.com',
  body: 'Hello',
  expanded: false,
},
{
  postId: 1,
  id: 3,
  name: 'Jane',
  email: 'jane@doe.com',
  body: 'Hello',
  expanded: false,
},
{
  postId: 1,
  id: 4,
  name: 'Jane',
  email: 'jane@doe.com',
  body: 'Hello',
  expanded: false,
}]

class CommentList extends React.Component<any, any> {

  public render() {
    return(
      dummyData.map((value, index) => {
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
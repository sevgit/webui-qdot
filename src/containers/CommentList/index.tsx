import * as React from 'react';
import { inject, observer } from 'mobx-react';
import SingleComment from '../../components/SingleComment';
import Spinner from '../../components/Spinner';
import ErrorFetching from '../../components/ErrorFetching';

@inject('comments') @observer
class CommentList extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick(id: number) {

    this.props.history.push(`/comment/${id} `)
  }

  public render() {

    switch (this.props.comments.state) {
      case 'loading': case 'initial':
        return <Spinner />;

      case 'done':
        return (
          this.props.comments.list.map((value: any, index: number) => {
            return (
              <SingleComment
                postId={value.postId}
                id={value.id}
                name={value.name}
                email={value.email}
                body={value.body}
                expanded={false}
                onClick={() => this.handleClick(value.id)}
                key={index} />)
          })
        );

      case 'error':
        return <ErrorFetching buttonText={'Try again?'} buttonFunction={() => this.props.comments.fetchComments()} />

      default:
        return null;
    }

  }
}

export default CommentList;
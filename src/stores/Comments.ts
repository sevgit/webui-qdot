import { action, observable } from 'mobx';

import { toTitleCase } from '../utils/stringUtilities';

interface InterfaceComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

class CommentStore {
  @observable public list: InterfaceComment[] = [];
  @observable public state = 'initial';
 

  @action public async fetchComments() {
    this.state = 'loading';
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments');
      this.list = await response.json();

      this.list.map((value) => {
        value.name = toTitleCase(value.name)
        value.email = value.email.toLowerCase()
      })
      this.state = 'done';
    } catch (error) {
      this.state = 'error';
    }
  }

}

const Comments = new CommentStore;



export default Comments
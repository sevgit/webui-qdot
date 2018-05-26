import { action, observable } from 'mobx';


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
      const response = await fetch('https://httpstat.us/403');
      this.list = await response.json();
      this.state = 'done';
    } catch (error) {
      this.state = 'error';
    }
  }
}

const Comments = new CommentStore;



export default Comments
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


  @action public async addComments(status: string, data?: InterfaceComment[]) {
    if (data && status === 'done') {
      this.state = 'done';
      this.list = data;
      this.list.map((value) => {
        value.name = toTitleCase(value.name)
        value.email = value.email.toLowerCase()
      })
    } else {
      this.state = 'error';
    }


  }
  @action public async fetchComments(url: string) {
    this.state = 'loading';
    try {
      const response = await fetch(url);
      this.addComments('done', await response.json())




    } catch (error) {
      this.addComments('error')
    }
  }

}

const Comments = new CommentStore;



export default Comments
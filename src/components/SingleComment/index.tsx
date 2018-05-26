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
  <div style={styles.commentBox}>
    <div style={styles.commentBox.head}>
      <span style={styles.commentBox.head.photo}>PIC</span>
      <div>
      <span style={styles.commentBox.head.name} >{props.name}</span>
      <span style={styles.commentBox.head.email} >{props.email}</span>
      </div>
    </div>
    <p style={styles.commentBox.body} >{props.body} </p>
    
  </div>
);
 }

const styles = {
  commentBox: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '100%',
    border: '2px solid var(--light)',
    marginBottom: '7px', 
    head: {
      display: 'grid',
      alignItems: 'center',
      gridGap: '15px',
      gridTemplateColumns: '60px 1fr',
      gridTemplateAreas: '"photo details"',
      backgroundColor: 'var(--light)',
      padding: '5px 8px',
      photo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        gridArea: 'photo',
        width: '60px',
        height: '60px',
        backgroundColor: 'var(--blue)',
        borderRadius: '50%',
      },
      name: {
        display: 'block',
        fontWeight: 'bold' as 'bold',
      },
      email: {

      }
    },
    body: {
      margin: '25px 8px 25px 85px',
    }
  },

}




export default SingleComment;
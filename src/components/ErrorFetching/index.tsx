import * as React from 'react';
import './index.css';


const ErrorFetching = (props:any) => {

    return (
      <div className='error' >
        Oops! It looks like something went wrong.
        <span onClick={props.retry} >Try again?</span>
      </div>

    );
  }


export default ErrorFetching;

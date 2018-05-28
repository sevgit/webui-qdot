import * as React from 'react';
import './index.css';

interface IErrorFetching {
  buttonText: string,
  buttonFunction: any,
}
const ErrorFetching = (props:IErrorFetching) => {

    return (
      <div className='error' >
        Oops! It looks like something went wrong.
        <span onClick={props.buttonFunction} >{props.buttonText}</span>
      </div>

    );
  }


export default ErrorFetching;

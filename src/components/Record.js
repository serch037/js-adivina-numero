/**
 * Created by sergio on 5/1/17.
 */
import React from 'react';
import trophy from '../assets/trophy.png';
const Record = (props) => {
  return (
    <div className="record-wrapper">
      <p>Congratulations, you broke the record with</p>
      <div className="tropy">
        <img src={trophy} alt="trophy"/>
        <p>{props.record} attempts</p>
      </div>
    </div>
  )
}

export default Record;

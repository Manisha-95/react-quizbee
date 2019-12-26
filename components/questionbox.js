import React from 'react';

const questionbox=({question,opt})=>{
  return(
    <div className="questionBox">
    <div className="question">
    {question}</div>
    {opt.map((text,index)=>
    (<button key={index} className="answerBtn">{text}</button>))
    }
    </div>
  );
}
export default questionbox;
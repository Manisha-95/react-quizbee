import React,{useState} from 'react';

const questionbox=({question,opt,selected})=>{
  const [answer,setAnswer]= useState(opt);
  return(
    <div className="questionBox">
    <div className="question">
    {question}</div>
    {answer.map((text,index)=>
    (<button key={index} className="answerBtn" onClick={()=> {setAnswer([text]);
    selected(text);}}>{text}</button>))
    }
    </div>
  );
}
export default questionbox;
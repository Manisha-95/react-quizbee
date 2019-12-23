import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './Assets/style.css';
import quizService from './quizService/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: []
    };
  }
    getQuestions = () => {
      quizService().then(question=>{
        this.setState({questionBank:question})
      })
    } 
 
  componentDidMount()
  {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
      <div className="title">
       QuizBee</div>
        {this.state.questionBank.length>0 && this.state.questionBank.map(({ques,ans,cor,id})=> <h4>{ques}</h4>)}
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

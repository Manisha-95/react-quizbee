import React, { Component } from 'react';
import { render } from 'react-dom';
import './Assets/style.css';
import quizService from './quizService';
import QuestionBox from './components/questionbox';

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
       
        {this.state.questionBank.map(({question,answers,correct,questionId})=> (<QuestionBox 
        question={question}
        opt={answers} 
        key={questionId}/>))}
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

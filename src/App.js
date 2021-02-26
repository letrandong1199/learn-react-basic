import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';
class App extends Component {
  state = { text: "" }
  changeText = (event) => {
    this.setState({ text: event.target.value });
  }
  deleteCharHandler = (index) => {
    const charList = [...this.state.text.split('')];
    charList.splice(index, 1);
    const updateText = charList.join('');
    this.setState({ text: updateText });

  }

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <Char character={ch} key={index} click={() => this.deleteCharHandler(index)} />;
    });
    return (
      <div className="App">
        <input type="text" onChange={this.changeText} value={this.state.text} />
        <Validation inputLength={this.state.text.length} />
        {charList}
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import TodoItems from "./todoitems";
import './App.css';

 class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemAmount: 0,
      completedItems: 0
    }
    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  //Add item to To Do List
  addItem(e) {
    
    if (this._inputElement.value !== "") {
      var newItem = this._inputElement.value;
      
      this.setState({
          items: [...this.state.items, { value: newItem, checked: false }],
          itemAmount: this.state.itemAmount + 1
      });

      this._inputElement.value = "";
    }

    e.preventDefault();
     
  }

  //checkItem
  checkItem = ({ value, checked }) => {
    this.setState({
      items: this.state.items.map(item => item.value === value ? { value, checked: !checked } : item)
    });
  }

  //Remove item
  removeItem(name) {
    this.setState({
      items: this.state.items.filter(el => el !== name),
      itemAmount: this.state.itemAmount - 1
    })
  }
  
  //Clear whole list
  clearList() {
    this.setState({
      items: [],
      itemAmount: 0
    })
  }

  render () {
  return (
    <div className="todoapp">
      <div className="header">
        <form id="submitform">
          <input id="inputbutton" placeholder="Enter task" ref={(input) => this._inputElement = input}></input>
          <button id="additembutton" type="submit" onClick={this.addItem}>Add</button>
          <button id="clearlistbutton" type="submit" onClick={this.clearList}>Clear List</button>
        </form>
      </div>
      <TodoItems entries={this.state.items} removeItem={this.removeItem} checkItem={this.checkItem}/>
      <p id="entrycount">Tasks remaining: {this.state.itemAmount}</p>
      <p id="completedtasks"> Completed tasks: {this.state.items.filter(item => item.checked).length}</p>
    </div>
  );
  }
}

export default App;

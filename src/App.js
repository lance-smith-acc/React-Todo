import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./index.css";



class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todoItems:[]
    }
  }
  
  completeItem = id => {
    const newTodoList = this.state.todoItems.map(item => {
      if (item.id  === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      else {
        return item;
      }
    });
    this.setState({ todoItems:newTodoList})
  }

  addItem = itemName => {
    const newTodo = {
      id: Date.now(),
      name: itemName,
      completed: false
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
    console.log(this.state)
  }

  clearCompleted = k => {
    this.setState(({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    }))
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItems={this.state.todoItems} completeItem={this.completeItem}/>
        <TodoForm  addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;

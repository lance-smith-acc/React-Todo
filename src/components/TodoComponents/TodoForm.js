import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {todoText: ''};
    }
    
    handleChanges = e => {
        this.setState({
            todoText:e.target.value
        });
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);
        this.setState({
            todoText:""
        });
    }

    handleComplete = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleComplete}>
                <input 
                    type ="text"
                    name="item"
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add To-Do</button>
                <button type="reset">Clear To-Do</button>
            </form>    
        )
       
    }
}

export default TodoForm;
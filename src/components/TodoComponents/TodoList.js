// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './Todo'

const TodoList = props => {
    return (
            <div class='todo-list'>
               <h4>To Do List</h4>
                <ul>
                    {props.todoItems.map(item => (
                        <TodoItem key={item.id} item={item} completeItem={props.completeItem} />
                    ))}
                </ul>    
            </div>
        );
 
}

export default TodoList;

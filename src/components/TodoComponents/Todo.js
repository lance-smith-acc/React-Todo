import React from 'react';

const TodoItem = props => {
    return (
        <div className={`item${props.item.completed ? " completed" : ""}`} onClick={() => props.completeItem(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default TodoItem;
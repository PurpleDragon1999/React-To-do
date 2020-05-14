import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            // <div style={{backgroundColor: '#f4f4f4'}}>      for inline style, double brackets
            // <div style={itemStyle}>                         for variable, single brackets
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={ this.props.todo.completed } onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { title }
                    <button style={btnStyle} onClick={ this.props.delTodo.bind(this, id) }>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

let btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

// let itemStyle = {
//     backgroundColor: '#f4f4f4'
// };

export default TodoItem;

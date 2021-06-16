import React, { Component } from 'react';
import "./todoitems.css";

    class TodoItems extends Component {
        render() {
          const {checkItem, removeItem} = this.props
          return (
            <ul className="theList">
                { this.props.entries.map((item) => {
                  return <li class="list" key={item}>
                         <input type="checkbox" class="checkbox" checked={item.checked} onChange={() => checkItem(item)}></input>
                         <del class="item">{item.value}</del>
                         <button id="removeItemButton" onClick={() => removeItem(item)} >X</button>
                         </li>
                })}
            </ul>
          );
       }
    };

export default TodoItems;
import React from 'react';
import { Component } from 'react';
import Todoitem from './todoItem';


export default class todoList extends Component {

    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        return (
            <ul className="list-group mt-5">
                <h3 className="text-capitalize text-center"> Planned Activities</h3>
                {
                    items.map(item => {
                        return <Todoitem key={item.id}
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)} />
                    })
                }

                <button type="button" className="btn btn-danger mt-5" onClick={clearList}> Clear List </button>


            </ul>
        );
    }
}
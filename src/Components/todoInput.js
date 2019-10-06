import React, { Component } from 'react';

export default class todoInput extends Component {
    render() {
        const { title, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className="card card-body m-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add a todo Item"
                            value={title} onChange={handleChange}
                        />

                    </div>
                    <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} >
                        {editItem ? 'Edit Item' : 'Add Item'}
                    </button>
                </form>

            </div>
        );
    }
}


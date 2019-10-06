import React from 'react';
import TodoInput from './Components/todoInput';
import Todolist from './Components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';



export default class App extends React.Component {

  state = {
    items: [],
    id: uuid(),
    title: "",
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.title
    }


    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      id: uuid(),
      title: "",
      editItem: false
    })


  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })

    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      title: selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto col-md-8 mt-4" >
            <h3 className="text-capatalize text-center">
              Start Planning!!
          </h3>
            <TodoInput title={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}></TodoInput>
            <Todolist items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}></Todolist>
          </div>

        </div>

        <p className="text-center mt-3">&copy; Developed by - Bhavesh Barskar</p>
      </div>
    )
  }
}




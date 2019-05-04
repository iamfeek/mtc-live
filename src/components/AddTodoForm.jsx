import React from 'react';

class AddTodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      task: ""
    }
  }

  handleTaskChange = (e) => {
    e.preventDefault();

    this.setState({
      task: e.target.value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/mtc-workshop/us-central1/addTodo", {
        method: "post",
        body: JSON.stringify({
          data: {
            task: this.state.task,
          }
        })
      });
    } catch(e){
      console.log(e);
    }


  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Task</label>
          <div className="control">
            <input className="input" onChange={this.handleTaskChange} value={this.state.task} type="task" name="task" required />
          </div>
        </div>
        <button type="submit" className="button is-block is-info is-fullwidth">Add todo</button>
      </form>
    )
  }
}

export default AddTodoForm;

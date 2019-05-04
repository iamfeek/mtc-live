import React from 'react';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: [],
    }
  }

  componentDidMount(){
    // fetch data from firebase
  }

  render(){
    const { data } = this;
    return(
      <div>
        <h1>Todos</h1>
        { data.map(item => item.task)}
      </div>
    )
  }
}

export default TodoList;

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const ToDoList = ({todos}) => {
  
    const elements = todos.map((item) => {
      const {id, ...itemProps} = item;
      return <li className='list-group-item' key={id}><TodoListItem {...itemProps}/></li>
    })

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    )
}

export default ToDoList;
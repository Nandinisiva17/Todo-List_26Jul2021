import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

const Todolist = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleComplete = todo => {
    setTodos(todos.map(item => (item.id === todo.id ? { ...item, completed: true } : item)))
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find(todo => todo.id === id)
    setEditTodo(findTodo)
  }

  return (
    <div>
      {todos.map(todo => (
        <li className="list-item" key={todo.id}>
          <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""} `} onChange={e => e.preventDefault()} />
          <div>
            <button className="button-complete" onClick={() => handleComplete(todo)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
          <div>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <div>
            <button className="button-delete" onClick={() => handleDelete(todo)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}
export default Todolist

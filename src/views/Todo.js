const Todo = (props) => {

    const { todos, title, deleteDataTodo } = props;
    const handleDeleteTodo = (id) => {
        deleteDataTodo(id);
    }

    return (
        <div className='todo-container'>
            <div className="title">
                {title}
            </div>
            {todos.map((todo, index) => {
                //cần thêm key để react thêm hiệu năng
                return (
                    <div key={todo.id}>
                        <li className='todo-child'>{todo.title} <span onClick={() => handleDeleteTodo(todo.id)}>x</span></li>
                    </div>

                )
            })
            }
            <hr />
        </div>
    )
}

export default Todo;
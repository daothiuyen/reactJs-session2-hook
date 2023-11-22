const Todo = (props) => {
    console.log(props);
    const todos = props.todos;
    return (
        <div className='todo-container'>
            {todos.map((item, index) => {
                //cần thêm key để react thêm hiệu năng
                return (
                    <li key={item.id} className='todo-child'>{item.title}</li>
                )
            })
            }
        </div>
    )
}

export default Todo;
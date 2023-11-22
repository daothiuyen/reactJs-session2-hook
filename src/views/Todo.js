const Todo = (props) => {
    console.log(props);
    const todos = props.todos;
    return (
        <div className='todo-container'>
            <div className="title">
                {props.title}
            </div>
            {todos.map((item, index) => {
                //cần thêm key để react thêm hiệu năng
                return (
                    <li key={item.id} className='todo-child'>{item.title}</li>
                )
            })
            }
            <hr />
        </div>
    )
}

export default Todo;
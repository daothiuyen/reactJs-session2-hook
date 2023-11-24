import { useState } from "react";
import './Blog.scss';
import axios from "axios";

const AddBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async () => {
        if (!title) {
            alert('Vui lòng nhập title');
            return;
        }
        if (!content) {
            alert('Vui lòng nhập content');
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNewBlog(newBlog);
            console.log('dfdf', newBlog);
        }
        console.log('dfdfd', res);
    }
    return (
        <div className="add-new-blog">
            <label >Title:</label><br />
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /><br />
            <label >Content:</label><br />
            <input type="text" value={content} onChange={(event) => setContent(event.target.value)} /><br />
            <button type="button" className="btn-add" onClick={(event) => handleSubmit(event)}>Submit</button>
        </div>
    )
}

export default AddBlog;
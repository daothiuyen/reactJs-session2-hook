
import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddBlog from "./AddBlog";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleAddBlog = () => setShow(true);
    let history = useHistory();
    const { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            //lấy ra 10 item
            let data = dataBlogs.slice(0, 9);
            setNewData(data);
        }
    }, [dataBlogs])

    const handleAddNewBlog = (blog) => {

        let data = newData;
        newData.unshift(blog)
        setShow(false);
        setNewData(data);
    }

    const deleteBlog = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id);
        setNewData(data);
    }



    return (
        <>
            {/* <div><button className="btn-add-new" onClick={handleAddBlog}>Add new blog</button></div> */}
            <Button variant="primary" onClick={handleAddBlog}>
                Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBlog handleAddNewBlog={handleAddNewBlog} />
                </Modal.Body>
            </Modal>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div key={item.id} className="item-blog">
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <Link to={`/blog/${item.id}`}>Detail</Link>
                                <button type="button" onClick={() => deleteBlog(item.id)}>Delete</button>
                            </div>
                        )
                    })
                }
                {isLoading === true &&
                    <div>Loading</div>
                }
            </div>
        </>


    )
}

export default Blog;
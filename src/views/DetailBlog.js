
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const { data: dataBlogDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    const handleBackData = () => {
        history.push('/blog');
    }
    return (
        <div>
            <span onClick={handleBackData}>Back</span>
            {dataBlogDetail &&
                <>
                    <div>{dataBlogDetail.title}</div>
                    <div>{dataBlogDetail.body}</div>
                </>

            }

        </div>
    )
}

export default DetailBlog;
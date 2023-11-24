import { useHistory } from "react-router-dom";
const NotFound = () => {
    let history = useHistory();
    const handleClickBack = () => {
        history.push('/');
    }
    return (
        <div className="bot-found-page">
            <h4></h4>
            <h5></h5>
            <button className="btn btn-primary" onClick={handleClickBack}>Go to home page</button>
        </div>
    )
}
export default NotFound;
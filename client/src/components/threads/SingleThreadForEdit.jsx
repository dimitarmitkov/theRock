import {Container, Row, Col} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import "./sigleEditStyle.css";
import {valuesLinks} from "../../enumerators/links";
import EditThread from "./EditThread";
import SelectBy from "../selectBy/SelectBy";
import {Button} from "primereact/button";
import Comment from "../comment/Comment";
import axios from "axios";
import {useState, useEffect} from "react";


const SingleThreadForList = () => {
    // const navigate = useNavigate();
    const {id} = useParams();

    console.log(id.replace(":", ""));

    const [threadData, setThreadData] = useState({});
    const [commentsData, setCommentsData] = useState({});

    const getData = async () => {

        axios.post("http://localhost:62000/threads", {id: id.replace(":", "")})
            .then(response => {
                setThreadData(response.data);
            })
            .catch(error => console.log(error));

        axios.post("http://localhost:62000/comments", {threadId: id.replace(":", "")})
            .then(response => {
                setCommentsData(response.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);

    const clickHandler = (e) => {
        //  const data = e.target.innerText ? e.target.innerText : e.target.className;
        //
        // if(data.toLowerCase().indexOf("comments") !== -1){
        //     navigate(valuesLinks.EditTask);
        // }
    }
    return (
        <Container id="card" className="card-container-thread">
            <Row>
                <Col id="cardNumberVotesField" md={"auto"} className="side-votes-bar">
                    <Row><Button icon="pi pi-caret-up" className="p-button-rounded p-button-secondary p-button-text"
                                 aria-label="Bookmark"/></Row>
                    <Row id="cardNumberVotes">{threadData.threadRating}</Row>
                    <Row><Button icon="pi pi-caret-down" className="p-button-rounded p-button-secondary p-button-text"
                                 aria-label="Bookmark"/></Row>
                </Col>
                <Col xs lg="11">

                    <Row id="posted" className={"card-container-thread-posted"}>
                        <div>
                            Posted by {threadData.threadName} 11 days ago
                        </div>
                    </Row>
                    <Row id="title" className={"card-container-thread-title-black"}>
                        <div>
                            {threadData.threadTitle}
                        </div>
                    </Row>
                    <Row id="content" className={"card-container-thread-content"}>
                        <div>
                            {threadData.threadContent}
                        </div>

                    </Row>
                    <Row id="icons" className={"card-container-thread-icons"}>
                        <div onClick={(e) => clickHandler(e)}>
                            <i className="pi pi-comments"></i><span>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>

                    <Row className="edit-field">
                        <EditThread/>
                    </Row>

                    <Row>
                        <SelectBy/>
                    </Row>
                    <Row className={"comment-single-below"}>
                        <Comment/>
                    </Row>
                    <Row className={"comment-single-below"}>
                        <Comment/>
                    </Row>
                    <Row className={"comment-single-below"}>
                        <Comment/>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default SingleThreadForList;

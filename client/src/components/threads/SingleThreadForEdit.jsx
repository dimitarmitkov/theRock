import {Container, Row, Col} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import "./sigleEditStyle.css";
import EditThread from "./EditThread";
import SelectBy from "../selectBy/SelectBy";
import {Button} from "primereact/button";
import axios from "axios";
import {useState, useEffect} from "react";
import avatar1 from "../../images/avatar2.png";


const SingleThreadForList = () => {
    const {id} = useParams();

    const [threadData, setThreadData] = useState({});
    const [commentsData, setCommentsData] = useState({});
    const [element, setElement] = useState([]);

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
    };


    useEffect(() => {
        getData();
    }, [id]);

    useEffect(() => {
        if(commentsData.length>0){
            setElement(commentsData.map((comment, i) => {
                return (
                    <Row key={i + "data"} className={"comment-single-below"}>
                        <Row>
                            <Col md={2} >
                                <img className={"avatar-images"} src={avatar1} alt="avatar"/>
                            </Col>
                            <Col md={10}>
                                {comment.threadComment}
                            </Col>
                        </Row>
                    </Row>
                )
            }));
        }
    }, [commentsData.length>0]);


    const clickHandler = (e) => {

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
                            <i className="pi pi-comments sidebar-pointer"></i><span className={"sidebar-pointer"}>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>

                    <Row className="edit-field">
                        <EditThread params={threadData}/>
                    </Row>

                    <Row>
                        <SelectBy/>
                    </Row>
                    <div>
                        {element}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleThreadForList;

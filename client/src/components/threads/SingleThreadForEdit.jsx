import {Row, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import "./sigleEditStyle.css";
import {useState, useEffect} from "react";
import avatar1 from "../../images/avatar2.png";
import SingleThreadElement from "./SingleThreadElement";
import {valuesLinks} from "../../enumerators/links";
import axiosFunctions from "../../functions/axiosFunctions";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SingleThreadForList = () => {
    const {id} = useParams();

    const [threadData, setThreadData] = useState({});
    const [commentsData, setCommentsData] = useState({});
    const [element, setElement] = useState([]);

    const getData = async () => {

        const axiosUrlThreads = SERVER_URL + valuesLinks.Threads;
        const axiosUrlComments = SERVER_URL + valuesLinks.Comments;
        const idData = id.replace(":", "");
        const queryThreads = {id: idData};
        const queryComments = {threadId: idData};

        axiosFunctions(axiosUrlThreads, queryThreads, "post", setThreadData);
        axiosFunctions(axiosUrlComments, queryComments, "post", setCommentsData);
    };

    useEffect(() => {
        getData();
    }, [id]);

    useEffect(() => {
        if (commentsData.length > 0) {
            setElement(commentsData.map((comment, i) => {
                return (
                    <Row key={i + "data"} className={"comment-single-below"}>
                        <Row>
                            <Col md={2}>
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
    }, [commentsData.length > 0]);

    return (
        <SingleThreadElement thread={threadData} element={element}/>
    )
}

export default SingleThreadForList;

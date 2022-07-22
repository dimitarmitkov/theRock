import {Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Button} from 'primereact/button';
import "./singleThreadCardStyle.css";
import {valuesLinks} from "../../enumerators/links";
import {useEffect, useState} from "react";
import axios from "axios";
import avatar1 from "../../images/avatar2.png";
import {AutoComplete} from 'primereact/autocomplete';


const SingleThreadForList = () => {
    const navigate = useNavigate();

    const [threadData, setThreadData] = useState([]);

    const getData = async () => {

        axios.get("http://localhost:62000/threads")
            .then(response => {
                setThreadData(response.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);

    const clickHandler = () => {

        navigate(valuesLinks.StartTask);
    }


    return (
        <>
            <Container className="card-container-thread">
                <Row onClick={() => clickHandler()}>
                    <Col md={2}>
                        <Row>
                            <img className={"avatar-images-start"} src={avatar1} alt="avatar"/>

                        </Row>
                    </Col>
                    <Col md={10}>
                        <Row id="posted" className={"card-container-thread-posted"}>
                            {/*<AutoComplete className={"create-post"} placeholder="Create Post"  />*/}
                            <div className={"create-post"}>Create Post</div>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleThreadForList;

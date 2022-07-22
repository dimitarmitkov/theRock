import {Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./singleThreadCardStyle.css";
import {valuesLinks} from "../../enumerators/links";
import avatar1 from "../../images/avatar2.png";

const SingleThreadForList = () => {
    const navigate = useNavigate();

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
                            <div className={"create-post"}>Create Post</div>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleThreadForList;

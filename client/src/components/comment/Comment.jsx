import {Row, Col} from "react-bootstrap";
import avatar1 from "../../images/avatar2.png";
import "./commentStyle.css";

const Comment = (props) => {
    return (
        <Row>
            <Col md={2} >
                <img className={"avatar-images"} src={avatar1} alt="avatar"/>
            </Col>
            <Col md={10}>
                {props}
            </Col>
        </Row>
    )
}

export default Comment;

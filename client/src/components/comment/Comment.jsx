import {Row, Col} from "react-bootstrap";
import avatar1 from "../../images/avatar2.png";
import "./commentStyle.css";

const Comment = () => {
    return (
        <Row>
            <Col md={2} >
                <img className={"avatar-images"} src={avatar1} alt="avatar"/>
            </Col>
            <Col md={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Col>
        </Row>
    )
}

export default Comment;

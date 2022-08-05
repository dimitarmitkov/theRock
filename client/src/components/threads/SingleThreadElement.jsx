import {Col, Container, Row} from "react-bootstrap";
import {Button} from "primereact/button";
import {valuesLinks} from "../../enumerators/links";
import {useNavigate} from "react-router-dom";
import EditThread from "./EditThread";
import SelectBy from "../selectBy/SelectBy";

const SingleThreadElement = (params)=> {

    const thread = params.thread;
    const element = params.element ? params.element : null;
    const navigate = useNavigate();

    const clickHandler = (e, id) => {
        const data = e.target.innerText ? e.target.innerText : e.target.className;

        if (data.toLowerCase().indexOf("comments") !== -1) {
            navigate(valuesLinks.EditTask + ":" + id);
        }
    }

    return(
        <Container key={params.i} id="card" className="card-container-thread">
            <Row>
                <Col id="cardNumberVotesField" md={"auto"} className="side-votes-bar">
                    <Row><Button icon="pi pi-caret-up" className="p-button-rounded p-button-secondary p-button-text"
                                 aria-label="Bookmark"/></Row>
                    <Row id="cardNumberVotes">{thread.threadRating}</Row>
                    <Row><Button icon="pi pi-caret-down"
                                 className="p-button-rounded p-button-secondary p-button-text"
                                 aria-label="Bookmark"/></Row>
                </Col>
                <Col xs lg="11">
                    <Row id="posted" className={"card-container-thread-posted"}>
                        <div>
                            Posted by {thread.threadName} 11 days ago
                        </div>
                    </Row>
                    <Row id="title" className={"card-container-thread-title-grey"}>
                        <div>
                            {thread.threadTitle}
                        </div>
                    </Row>
                    <Row id="content" className={"card-container-thread-content"}>
                        <div>
                            {thread.threadContent}
                        </div>

                    </Row>
                    <Row id="icons" className={"card-container-thread-icons"}>
                        <div onClick={(e) => clickHandler(e, thread.id)}>
                            <i className="pi pi-comments sidebar-pointer"></i><span
                            className={"sidebar-pointer"}>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>
                    {element ?
                    <Row className="edit-field">
                        <EditThread params={thread}/>
                    </Row> : null}

                    {element ?
                    <Row>
                        <SelectBy/>
                    </Row> : null}

                    <div>
                        {element}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleThreadElement;

import {Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { Button } from 'primereact/button';
import "./singleThreadCardStyle.css";
import {valuesLinks} from "../../enumerators/links";


const SingleThreadForList = () => {
    const navigate = useNavigate();

   const clickHandler = (e)=>{
       const data = e.target.innerText ? e.target.innerText : e.target.className;

      if(data.toLowerCase().indexOf("comments") !== -1){
          navigate(valuesLinks.EditTask);
      }
   }
    return (
        <>
        <Container id="card" className="card-container-thread">
            <Row>
                <Col id="cardNumberVotesField" md={"auto"} className="side-votes-bar">
                    <Row><Button icon="pi pi-caret-up" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" /></Row>
                    <Row id="cardNumberVotes">0</Row>
                    <Row><Button icon="pi pi-caret-down" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" /></Row>
                </Col>
                <Col xs lg="11">
                    <Row id="posted" className={"card-container-thread-posted"}>
                        <div>
                            Posted by bullwinkle2112 11 days ago
                        </div>
                    </Row>
                    <Row id="title" className={"card-container-thread-title-grey"}>
                        <div>
                            How do I swap coins to different network so I can store them on wallet?
                        </div>
                    </Row>
                    <Row id="content" className={"card-container-thread-content"}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur*/}
                            adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                            esse, cupiditate neque quas!
                        </div>

                    </Row>
                    <Row id="icons" className={"card-container-thread-icons"}>
                        <div onClick={(e)=>clickHandler(e)}>
                            <i className="pi pi-comments"></i><span>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>

    <Container id="card2"  className="card-container-thread">
            <Row>
                <Col id="cardNumberVotesField" md={"auto"} className="side-votes-bar">
                    <Row><Button icon="pi pi-caret-up" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" /></Row>
                    <Row id="cardNumberVotes">0</Row>
                    <Row><Button icon="pi pi-caret-down" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" /></Row>
                </Col>
                <Col xs lg="11">

                    <Row id="posted" className={"card-container-thread-posted"}>
                        <div>
                            Posted by bullwinkle2112 11 days ago
                        </div>
                    </Row>
                    <Row id="title" className={"card-container-thread-title-grey"}>
                        <div>
                            How do I swap coins to different network so I can store them on wallet?
                        </div>
                    </Row>
                    <Row id="content" className={"card-container-thread-content"}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur*/}
                            adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                            esse, cupiditate neque quas!
                        </div>

                    </Row>
                    <Row id="icons" className={"card-container-thread-icons"}>
                        <div onClick={(e)=>clickHandler(e)}>
                            <i className="pi pi-comments"></i><span>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default SingleThreadForList;

import {Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./sigleEditStyle.css";
import {valuesLinks} from "../../enumerators/links";
import EditThread from "./EditThread";


const SingleThreadForList = () => {
    const navigate = useNavigate();

   const clickHandler = (e)=>{
       const data = e.target.innerText ? e.target.innerText : e.target.className;

      if(data.toLowerCase().indexOf("comments") !== -1){
          navigate(valuesLinks.EditTask);
      }
   }
    return (
        <Container id="card">
            <Row>
                <Col id="cardNumberVotesField" md={"auto"}>
                    <Row><i className="pi pi-caret-up"></i></Row>
                    <Row id="cardNumberVotes">0</Row>
                    <Row><i className="pi pi-caret-down"></i></Row>
                </Col>
                <Col xs lg="11">

                    <Row id="posted">
                        <div>
                            Posted by bullwinkle2112 11 days ago
                        </div>
                    </Row>
                    <Row id="title">
                        <div>
                            How do I swap coins to different network so I can store them on wallet?
                        </div>
                    </Row>
                    <Row id="content">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur*/}
                            adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                            esse, cupiditate neque quas!
                        </div>

                    </Row>
                    <Row id="icons">
                        <div onClick={(e)=>clickHandler(e)}>
                            <i className="pi pi-comments"></i><span>Comments</span> &nbsp;&nbsp;
                            <i className="pi pi-money-bill"></i><span>Awards</span> &nbsp;&nbsp;
                            <i className="pi pi-share-alt"></i><span>Share</span> &nbsp;&nbsp;
                            <i className="pi pi-save"></i><span>Save</span> &nbsp;&nbsp;
                        </div>
                    </Row>

                    <Row className="edit-field">
                        <EditThread />
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default SingleThreadForList;

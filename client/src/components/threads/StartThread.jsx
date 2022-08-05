import React, {useState} from "react";
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';
import {Row, Col} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {valuesLinks} from "../../enumerators/links";
import EditHeader from "../edit/EditHeader";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const StartThread = () => {
    const [text2, setText2] = useState('');
    const navigate = useNavigate();

    const clickHandler = () => {

        const axiosUrl = SERVER_URL + valuesLinks.StartTask;
        const query = {
            threadName: "bullwinkle2112",
            threadTitle: "Add to DB",
            threadContent: text2.replace(/[<,p,\/,>]/gm, ""),
            threadRating: 10,
            threadUser: 3,
            threadPostedAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };

        axios.post(axiosUrl, query)
            .then(res => {
            navigate("/");

        }).catch(error => {
            console.log(error);
        })
    }

    const header = <EditHeader />

    return (
        <div>
            <div className="card">
                <Editor headerTemplate={header} style={{height: '320px'}} value={text2}
                        onTextChange={(e) => setText2(e.htmlValue)}/>
            </div>
            <Row>
                <Col>
                    <div className="float-end">
                        <Button onClick={() => clickHandler()}
                                className="p-button-rounded p-buttÅon-info" label="Post"/>
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default StartThread;

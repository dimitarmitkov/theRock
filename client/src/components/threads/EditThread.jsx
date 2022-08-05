import React, {useState} from "react";
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';
import { Row, Col} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import EditHeader from "../edit/EditHeader";
import {valuesLinks} from "../../enumerators/links";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const EditorDemo = (params) => {
    const [text2, setText2] = useState('');
    const navigate = useNavigate();

    const clickHandler = () => {

        const axiosUrl = SERVER_URL + valuesLinks.Comment;
        const query = {
            threadId: params.params.id,
            userId: params.params.threadUser,
            threadComment: text2.replace(/[<,p,\/,>]/gm, ""),
        };

        axios.post(axiosUrl, query)
            .then(()=>{ navigate("/");})
            .catch(error => console.log(error));
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
                        <Button onClick={() => clickHandler()} className="p-button-rounded p-buttÅon-info"
                                label="Comment"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default EditorDemo;

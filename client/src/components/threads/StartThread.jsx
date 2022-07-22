import React, {useState} from "react";
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const StartThread = () => {
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');
    const navigate = useNavigate();

    const clickHandler = () => {
        axios.post("http://localhost:62000/start",{
            threadName: "bullwinkle2112",
            threadTitle: "Add to DB",
            threadContent: text2,
            threadRating: 10,
            threadUser: 3,
            threadPostedAt: new Date(),
            createdAt: new Date(),
            updatedAt:new Date(),
            deletedAt: null
        }).then(res=>{
            navigate("/");

        }).catch(error=>{
            console.log(error);
        })
    }

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <button className="ql-link" aria-label="Insert Link"></button>
                <button className="ql-code-block" aria-label="Insert Code Block"></button>
                <button className="ql-background ql-picker ql-color-picker ql-expanded"
                        aria-label="Insert Color"></button>
                <button className="ql-clean" aria-label="Remove Styles"></button>
                <button className="ql-list" value="bullet" aria-label="Unordered List"></button>
                <button className="ql-list ql-active" value="ordered" aria-label="Ordered List"></button>
            </span>

        );
    }

    const header = renderHeader();

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

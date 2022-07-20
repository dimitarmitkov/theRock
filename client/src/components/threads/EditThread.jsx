import React, {useState} from "react";
import {Editor} from 'primereact/editor';
import SingleThreadForList from "./SingleThreadForList";
import {Button} from 'primereact/button';
import {Container, Row, Col} from "react-bootstrap";
import {align} from "quill/ui/icons";


const EditorDemo = () => {
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');

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
            {/*<div className="card">*/}
                {/*<Editor style={{height: '320px'}} value={text1} onTextChange={(e) => setText1(e.htmlValue)}/>*/}
            {/*</div>*/}
            <div className="card">
                <Editor headerTemplate={header} style={{height: '320px'}} value={text2}
                        onTextChange={(e) => setText2(e.htmlValue)}/>

            </div>
            <Row>
                <Col >
                    <div className="float-end">
                <Button className="p-button-rounded p-buttÅon-info" label="Comment"/>

                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default EditorDemo;

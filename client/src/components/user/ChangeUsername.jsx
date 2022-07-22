import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Row, Col, Container} from 'react-bootstrap';
import currentLoggedUser from "../../functions/currentLoggedUser";

const EditUserGroup = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = async data => {
        currentLoggedUser(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mt-3">Edit User</h5>
            <Container className="mt-3 form-container">
                <Row className="mt-3 justify-content-md-center">
                    <Col>
                        <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user-edit"></i>
                                </span>
                            <InputText defaultValue={props.data.firstName} {...register("firstName", {
                                required: true,
                                minLength: {value: 3, message: "name must contain at least 3 symbols"}
                            })} contentEditable/>
                        </div>
                        {errors.firstName &&
                            <span className="error-message" role="alert">{errors.firstName.message}</span>}
                    </Col>
                </Row>
                <Row className="mt-3 mb-3 justify-content-md-center">
                    <Col>
                        <Button label="Submit" className="p-button-primary" disabled={false}/>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

const EditUserApp = (props) => {
    const [showElement, setShowElement] = useState(true);

    return (
        <>
            {showElement ? <EditUserGroup data={props}/> : null}
        </>
    );
}

export default EditUserApp;

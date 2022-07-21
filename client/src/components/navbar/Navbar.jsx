import React, {useState} from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Button } from 'primereact/button';
import { Dropdown } from "primereact/dropdown";
import { AutoComplete } from 'primereact/autocomplete';
import countries from "../../enumerators/navbar/countriesList";
import "./dropdown.css";
import axios from "axios";

const NavbarData = ()=>{

    const [selectedCountry, setSelectedCountry] = useState(null);

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }



    const clickHandler = async (data) => {
        const result = await axios.get("http://localhost:62000/users").catch(err=>console.log(err));

        console.log(result);

    }

    return (

        <Container fluid>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    {/*<Navbar.Brand href="#">Navbar</Navbar.Brand>*/}
                    <Col sm={12}>
                        <Row>
                            <Col sm={2}>
                                <i className="pi pi-reddit"></i>
                                <Navbar.Brand > Rabbit </Navbar.Brand>
                            </Col>
                            <Col sm={2}>
                                <Dropdown id = "dd1" value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
                            </Col>
                            <Col sm={2}>
                            <AutoComplete placeholder="search"  />

                            </Col>
                            <Col sm={3}>
                                <i className="pi pi-at"></i><i className="pi pi-compass"></i><i className="pi pi-camera"></i>
                                <i className="pi pi-at"></i><i className="pi pi-compass"></i><i className="pi pi-camera"></i>
                            </Col>

                            <Col sm={3}>
                                <Button icon="pi pi-user" className="p-button-rounded" disabled={false} onClick={() => clickHandler('currentuser')} />
                                UserName
                            </Col>
                        </Row>
                    </Col>

                </Container>
            </Navbar>
        </Container>
    )

}

export default NavbarData;

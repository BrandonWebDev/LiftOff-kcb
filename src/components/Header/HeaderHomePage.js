import {Col, Row, Stack} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LogoDecor } from "../LogoDecor/LogoDecor"
import { LogoName } from "../LogoName/LogoName";
import "./NavBar.css";
import { NavBarBusinessOwner } from './NavBarBusinessOwner';
import { NavBarHomePage } from './NavBarHomePage';


export const HeaderHomePage = () => {
    return (
        <Container 
        fluid>
            <Row
            className='navbar'
            >
                <Col><LogoName /></Col>
                <Col><LogoDecor/></Col>
                <Col><NavBarHomePage /></Col>
            </Row>
        </Container>
    )
}
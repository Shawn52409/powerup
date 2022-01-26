import React from 'react';
import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return(
        <div className='footer container-fluid'>
            <Row>
                <Col md='6'>
                    <p className='m-2 text-center'>Designed and Developed by Shawn Miller, Justin Oeters and Ben Kasper</p>
                </Col>
                <Col md='6'>
                    <p className='m-2 text-center'>All images and descriptions retrieved from <a className='igdb' href='https://www.igdb.com/' target='_blank'>IGDB.com</a></p>
                </Col>
            </Row>
        </div>
    );
};
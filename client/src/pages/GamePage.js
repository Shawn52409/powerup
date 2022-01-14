import React from 'react'
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";

const GamePage = () => {

    return (

        <Container>
            <Row>
                <div className='col-md-6'>
                    <div className='card title'>
                        <h2 className='text-center'>Game Title</h2>
                    </div>
                    <div>
                        Cover Image
                    </div>
                </div>
            </Row>
        </Container>

    );

};
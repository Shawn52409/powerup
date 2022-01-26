import React, { useState } from "react";
import Auth from "../utils/auth";
import { Form, Button, Alert } from "react-bootstrap";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import invaders from "../components/space-invaders.png";

const Login = () => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [userFormData, setUserFormData] = useState({ username: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        className="container-fluid border my-5 p-4 w-50 bg-light"
      >
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        {error && <div>Login failed</div>}
      </Form>
      <div className="container-fluid justify-content-center d-flex">
        <img
          className="text-center img-smaller"
          src={invaders}
          alt="Space Invaders"
        ></img>
      </div>
    </>
  );
};

export default Login;

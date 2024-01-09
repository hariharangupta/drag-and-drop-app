import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const FormAdd = () => {
  const navigate = useNavigate();
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [ageData, setAgeData] = useState("");
  const [formData, setFormData] = useState([]);
  const data = JSON.parse(localStorage.getItem("userData"));

  const formHandler = (e) => {
    e.preventDefault();
    console.log(nameData, emailData, passwordData, ageData);
    const dataObj = {
      id: uuidv4(),
      name: nameData,
      email: emailData,
      age: ageData,
    };
    const storedFormData = JSON.parse(localStorage.getItem("userData")) || [];
    storedFormData.push(dataObj);
    localStorage.setItem("userData", JSON.stringify(storedFormData));
    setNameData("");
    setEmailData("");
    setAgeData("");
    setPasswordData("");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "50rem",
        height: "50rem",
        margin: "2rem auto",
        padding: "2rem",
      }}
    >
      <h2> Form Data</h2>
      <Card style={{ width: "50rem", margin: "2rem auto", padding: "2rem" }}>
        <Card.Body>
          <Form onSubmit={formHandler}>
            <Container></Container>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  {" "}
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={nameData}
                    onChange={(e) => setNameData(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    value={emailData}
                    onChange={(e) => setEmailData(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={passwordData}
                    onChange={(e) => setPasswordData(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your Age"
                    value={ageData}
                    onChange={(e) => setAgeData(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button
              type="submit"
              disabled={!nameData || !emailData || !ageData || !passwordData}
            >
              Submit
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={() => {
                setNameData("");
                setEmailData("");
                setAgeData("");
                setPasswordData("");
              }}
            >
              Cancel
            </Button>{" "}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormAdd;

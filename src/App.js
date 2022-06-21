import { Button, Form, Col, Row, Container, InputGroup } from "react-bootstrap";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Form>
          <Row className="mb-3">
            <InputGroup hasValidation size="lg">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="text"
                required
                isInvalid
                placeholder="User Name"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Row>

          <Row className="mb-3">
            <Col md>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="First name"
                  />
                  <label htmlFor="floatingInputCustom">First name</label>
                </Form.Floating>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Last name"
                  />
                  <label htmlFor="floatingInputCustom">Last name</label>
                </Form.Floating>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md>
              <Form.Floating className="mb-3" controlId="formGridEmail">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="Email Adress"
                />
                <label htmlFor="floatingInputCustom">Email Adress</label>
              </Form.Floating>
            </Col>
            <Col md>
              <Form.Floating className="mb-3" controlId="formGridPassword">
                <Form.Control
                  id="floatingInputCustom"
                  type="password"
                  placeholder="Enter password here"
                />
                <label htmlFor="floatingInputCustom">Password</label>
              </Form.Floating>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="1234 Main ST"
              />
              <label htmlFor="floatingInputCustom">Adress 01</label>
            </Form.Floating>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="1234 Main ST"
              />
              <label htmlFor="floatingInputCustom">Adress 02</label>
            </Form.Floating>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="City"
                />
                <label htmlFor="floatingInputCustom">City</label>
              </Form.Floating>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                size="lg"
                defaultValue="State"
                id="floatingInputCustom"
              >
                <option>State</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Zip"
                />
                <label htmlFor="floatingInputCustom">Zip</label>
              </Form.Floating>
            </Form.Group>
          </Row>

          <Form.Group
            className="mb-3"
            id="formGridCheckbox"
            style={{ marginTop: 10 }}
          >
            <Form.Check type="checkbox" label="Check me out" color="green" />
          </Form.Group>

          <Button variant="success" type="submit" style={{ width: 300 }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default App;

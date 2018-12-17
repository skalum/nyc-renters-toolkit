import React, { Component } from 'react';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button, } from 'reactstrap'

class AddressInput extends Component {
  state = {
    houseNumber: '',
    street: '',
    apt: '',
    zip: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setAddress(this.state, this.props.user);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="houseNumber">House number</Label>
              <Input type="number" name="houseNumber" id="houseNumber" value={this.props.houseNumber} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Label for="street">Street name</Label>
              <Input type="text" name="street" id="street" value={this.props.street} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="apt">Apt number</Label>
          <Input type="text" name="apt" id="apt" value={this.props.apt} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="zip">ZIP code</Label>
          <Input type="number" name="zip" id="zip" value={this.props.zip} onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
};

export default AddressInput;

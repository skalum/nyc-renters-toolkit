import React, { Component } from 'react';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button, } from 'reactstrap'

class AddressInput extends Component {
  state = {
    houseNumber: '',
    street: '',
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
        <FormGroup row>
          <Label for="houseNumber" sm={2}>House number</Label>
          <Col sm={4}>
            <Input type="number" name="houseNumber" id="houseNumber" value={this.props.houseNumber} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="street" sm={2}>Street name</Label>
          <Col sm={4}>
            <Input type="text" name="street" id="street" value={this.props.street} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="houseNumber" sm={2}>ZIP code</Label>
          <Col sm={4}>
            <Input type="number" name="zip" id="zip" value={this.props.zip} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
};

export default AddressInput;

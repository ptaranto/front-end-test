import React, { Component } from 'react';
import base64 from 'base-64';
import Customer from './components/Customer';
import Label from './components/Label';
import Input from './components/Input';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      filter: ''
    };
  }

  componentDidMount() {
    const headers = new Headers();
    headers.set(
      'Authorization',
      'Basic ' + base64.encode('codetest1:codetest100')
    );
    fetch('api/queue/gj9fs', {
      method: 'GET',
      headers
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          customers: json.queueData.queue.customersToday
        });
      });
  }

  render() {
    let customers = [];
    let customer;
    for (let i = 0; i < this.state.customers.length; ++i) {
      customer = this.state.customers[i];

      if (
        customer.customer.name.toLowerCase().indexOf(this.state.filter) > -1
      ) {
        customers.push(
          <div key={customer.id}>
            <Customer customer={customer} />
          </div>
        );
      }
    }

    return (
      <div>
        <Label>Filter by customer name:</Label>
        <Input
          type="search"
          onChange={event => this.filter(event.currentTarget.value)}
        />
        {customers}
      </div>
    );
  }

  filter(value) {
    this.setState({ ...this.state, filter: value.toLowerCase() });
  }
}

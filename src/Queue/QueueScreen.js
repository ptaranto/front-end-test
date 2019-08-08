import React, { Component } from 'react';
import { connect } from 'react-redux';
import Customer from './components/Customer';
import Label from './components/Label';
import Input from './components/Input';
import { getTodaysCustomers } from './selector';
import { fetchTodaysQueue, setFilter } from './actions';

const mapStateToProps = (state, ownProps) => ({
  customers: getTodaysCustomers(state)
});

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(setFilter(value))
});

class QueueScreenView extends Component {
  componentDidMount() {
    fetchTodaysQueue();
    this.intervalId = window.setInterval(() => fetchTodaysQueue(), 30000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    let customers = [];
    let customer;
    if (this.props.customers) {
      for (let i = 0; i < this.props.customers.length; ++i) {
        customer = this.props.customers[i];
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
          onChange={event => this.props.setFilter(event.currentTarget.value)}
        />
        {customers}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueScreenView);

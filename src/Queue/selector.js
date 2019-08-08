export function getTodaysCustomers(state) {
  return state.queue.customers.filter(
    customer =>
      customer.customer.name.toLowerCase().indexOf(state.queue.filter) > -1
  );
}

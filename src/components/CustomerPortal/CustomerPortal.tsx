import React from "react";
import CustomerList from "../CustomerList/CustomerList";
import CustomerDetails from "../CustomerDetails/CustomerDetails";

const CustomerPortal= () => {
  return (
    <div className="App">
        <CustomerList />
      <div className="customer-details">
        <CustomerDetails />
      </div>
    </div>
  );
};

export default CustomerPortal;

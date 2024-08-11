import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { changeCustomer, fetchCustomers } from "../../redux/actions";
import { useDispatch } from "../../hooks/useDispatch";
import { RootState } from "../../redux/store";

const CustomerList: React.FC = () => {
  const dispatch = useDispatch();
  const { customers, loading, error, selectedCustomerId } = useSelector((state: RootState) => state.customers);

  console.log(customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul className="customer-list">
        {customers.map((customer) => (
          <li className={`customer-list-item ${selectedCustomerId === customer.id ? 'customer-list-item-active' : ''}`} key={customer.id} onClick={() => dispatch(changeCustomer(customer.id))}>
            <h2>{customer.title}</h2>
            <p>{customer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

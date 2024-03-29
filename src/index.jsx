import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CreateTicket from "./components/tickets/CreateTicket";
import CustomerList from "./components/customers/CustomerList";
import CustomerDetails from "./components/customers/CustomerDetails";
import CreateCustomer from "./components/customers/CreateCustomer";
import Customers from "./components/customers/Customers";
import Employees from "./components/employees/Employees";
import EmployeeList from "./components/employees/EmployeeList";
import CreateEmployee from "./components/employees/CreateEmployee";
import EmployeeDetails from "./components/employees/EmployeeDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="servicetickets" element={<ServiceTickets />}>
          <Route index element={<TicketsList />} />
          <Route path=":id" element={<TicketDetails />} />
          <Route path="create" element={<CreateTicket />} />
        </Route>

        <Route path="customers" element={<Customers />}>
          <Route index element={<CustomerList />} />
          <Route path="create" element={<CreateCustomer />} />
          <Route path=":id" element={<CustomerDetails />} />
        </Route>

        <Route path="employees" element={<Employees />}>
          <Route index element={<EmployeeList />} />
          <Route path="create" element={<CreateEmployee />} />
          <Route path=":id" element={<EmployeeDetails />} />
        </Route>
      </Route>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

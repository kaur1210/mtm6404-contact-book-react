import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddContact from "./components/AddContactForm";
import EditContact from "./components/EditContactForm";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState(""); // State for managing search input

  return (
    <Router>
      <NavigationBar /> {/* Navigation bar for routing links */}
      <div className="container" style={{ marginTop: '80px' }}>
        <Routes>
          {/* Route for displaying contact list */}
          <Route path="/" element={<ContactList filter={filter} />} />
          {/* Route for displaying specific contact details */}
          <Route path="/contact/:id" element={<ContactDetails />} />
          {/* Route for adding a new contact */}
          <Route path="/add" element={<AddContact />} />
          {/* Route for editing an existing contact */}
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

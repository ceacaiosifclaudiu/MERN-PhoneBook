import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const AddContact = () => {
  const initialData = {
    name: "",
    phone: "",
    email: "",
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="contacts-container__right">
      <header>
        <h1>Create a new contact</h1>
      </header>

      <ContactForm
        initialData={initialData}
        submitUrl={`${BASE_URL}/contact`}
      />
    </div>
  );
};

export default AddContact;

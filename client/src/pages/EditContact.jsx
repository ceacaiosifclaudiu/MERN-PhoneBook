import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const EditContact = () => {
  const contact = useRouteLoaderData("edit");
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="contacts-container__right">
      <header>
        <h1>Edit your contact</h1>
      </header>

      <ContactForm
        initialData={contact}
        submitUrl={`${BASE_URL}/contact/${contact._id}`}
        successCallback={() => {}}
      />
    </div>
  );
};

export default EditContact;

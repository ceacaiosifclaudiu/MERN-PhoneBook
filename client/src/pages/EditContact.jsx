import React from "react";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import TextInput from "../components/TextInput";

const EditContact = () => {
  const contact = useRouteLoaderData("edit");

  const [newContact, setNewContact] = React.useState({
    name: contact?.name || "",
    phone: contact?.phone || "",
    email: contact?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  return (
    <div className="contacts-container__right">
      <header>
        <h1>Edit your contact</h1>
      </header>
      <Form method="PATCH">
        <div className="two-columns">
          <TextInput
            name="name"
            value={newContact.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <TextInput
            name="email"
            value={newContact.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <TextInput
          name="phone"
          value={newContact.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit" className="button edit">
            Update
          </button>
          <Link to={`/${contact._id}`} className="button cancel">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default EditContact;

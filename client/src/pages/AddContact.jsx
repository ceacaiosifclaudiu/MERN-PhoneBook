import React from "react";
import { Form, Link } from "react-router-dom";
import TextInput from "../components/TextInput";

const AddContact = () => {
  const [contact, setContact] = React.useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div className="contacts-container__right">
      <header>
        <h1>Create a new contact</h1>
      </header>

      <Form method="POST">
        <div className="two-columns">
          <TextInput name="name" placeholder="Name" onChange={handleChange} />
          <TextInput name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <TextInput name="phone" placeholder="Phone" onChange={handleChange} />
        <div className="buttons">
          <button type="submit" className="button create">
            Create
          </button>
          <Link to={`/`} className="button cancel">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AddContact;

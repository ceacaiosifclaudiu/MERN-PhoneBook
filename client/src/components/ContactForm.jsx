import React from "react";
import { Link } from "react-router-dom";
import useContactForm from "../hooks/useContactForm";
import TextInput from "./TextInput";

const ContactForm = ({ initialData, submitUrl, successCallback }) => {
  const { contactData, handleChange, handleSubmit } = useContactForm({
    initialData,
    submitUrl,
    successCallback,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="two-columns">
        {["name", "email"].map((field) => (
          <TextInput
            key={field}
            name={field}
            value={contactData[field]}
            placeholder={field === "name" ? "Name" : "Email"}
            onChange={handleChange}
          />
        ))}
        <TextInput
          name="phone"
          value={contactData.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
      </div>
      <div className="buttons">
        <button
          type="submit"
          className={`button ${initialData._id ? "edit" : "create"}`}
        >
          {initialData._id ? "Update" : "Create"}
        </button>
        <Link to="/" className="button cancel">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
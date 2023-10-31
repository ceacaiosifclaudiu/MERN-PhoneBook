import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";

const ContactForm = ({ initialData, submitUrl, successCallback }) => {
  const [contactData, setContactData] = useState(initialData);
  const navigate = useNavigate();

  useEffect(() => {
    setContactData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(submitUrl, {
        method: initialData._id ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        console.log("Contact operation successful");
        setContactData(initialData);
        navigate(".", { replace: true });
        if (successCallback) {
          successCallback();
        }
      } else {
        const responseText = await response.text();
        console.error(
          "Failed to perform contact operation. Response text:",
          responseText
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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

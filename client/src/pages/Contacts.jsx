import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contacts-container__right">
      <div className="welcome-container">
        <h1>Welcome to Your Phone Book</h1>
        <p>
          Our phone book application empowers you to efficiently manage your
          contacts. With it, you can:
        </p>
        <ul className="list">
          <li>
            <strong>Add New Contacts:</strong> Easily include new contacts by
            providing their name, phone number, and email. To add a new contact
            to your phone book,{" "}
            <Link to="/add" className="link ">
              <i> click here</i> 
            </Link>
            .
          </li>
          <li>
            <strong>Check and Edit Existing Contacts:</strong> Review and make
            changes to your existing contacts' information. To access your
            contact list .
          </li>
          <li>
            <strong>Remove Contacts:</strong> Delete unwanted contacts from your
            phone book to keep it organized and up-to-date.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;

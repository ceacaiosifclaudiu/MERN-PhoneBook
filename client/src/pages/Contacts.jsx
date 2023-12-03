import React from "react";
import ContactListItem from "../components/ContactListItem";
import { contactListItemData } from "../data/ContactListItemData";

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
          {contactListItemData.map((item, index) => (
            <ContactListItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
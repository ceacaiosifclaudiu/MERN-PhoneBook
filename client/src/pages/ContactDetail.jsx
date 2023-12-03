// ContactDetail.js
import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import ContactItem from "../components/ContactItem";
import { contactDetailsData } from "../data/contactDetailsData";
import { deleteAccount } from "../navigation/actions/fetchContacts";

const ContactDetail = () => {
  const contact = useRouteLoaderData("edit");

  return (
    <div className="contacts-container__right">
      <header></header>
      <div className="two-columns">
        {contactDetailsData.map((item) => (
          <ContactItem
            key={item.key}
            iconSrc={item.iconSrc}
            text={contact?.[item.key]}
            label={item.label}
          />
        ))}
      </div>

      <div className="buttons">
        <Link to={`/${contact._id}/edit`} className="button edit">
          Edit
        </Link>
        <Link
          to={`/`}
          className="button delete"
          onClick={() => {
            deleteAccount(contact._id);
          }}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;